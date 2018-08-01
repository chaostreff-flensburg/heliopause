import React from "react";
import axios from "axios";

import brace from "brace";
import "brace/mode/json";
import "brace/theme/xcode";
import AceEditor from "react-ace";

class Editor extends React.Component {
  state = {
    api: "",
    token: "",
    canSave: false
  };

  componentWillMount = () => {
    axios.get("/").then(res => {
      let data = JSON.stringify(res.data, null, "\t");
      this.setState({ api: data });
    });
  };

  onEditorChange = value => {
    this.setState({ api: value });
  };

  onEditorValidate = value => {
    let saveable;
    if (value.length === 0) {
      saveable = true;
    } else {
      saveable = false;
    }
    this.setState({ canSave: saveable });
  };

  onTokenChange = value => {
    this.setState({ token: value });
  };

  onSave = () => {
    if (this.state.canSave === false) return;
    let newApi = JSON.parse(this.state.api);
    axios.post("/", { api: newApi, token: this.state.token }).then(res => {
      let data = JSON.stringify(res.data, null, "\t");
      this.setState({ api: data });
    });
  };

  render() {
    return (
      <main>
        <section>
          <AceEditor
            class="editor"
            mode="json"
            theme="xcode"
            value={this.state.api}
            onChange={value => this.onEditorChange(value)}
            name="jsoneditor"
            editorProps={{
              $blockScrolling: true
            }}
            fontSize={14}
            height="65vh"
            width="100%"
            focus={true}
            wrapEnabled={true}
            tabSize={2}
            onValidate={value => this.onEditorValidate(value)}
          />
        </section>
        <section className="key">
          <label>
            <span>API-Token</span>
            <input
              type="text"
              onChange={e => this.onTokenChange(e.target.value)}
              placeholder="Valid API-Token needed to save changes."
            />
          </label>
        </section>
        <button onClick={this.onSave} disabled={!this.state.canSave}>
          SAVE API
        </button>
        <style jsx>{`
          main {
            max-width: 720px;

            margin-left: auto;
            margin-right: auto;
          }
          section {
            margin-top: 24px;
            padding: 0;

            border-radius: 4px;
            background-color: #fff;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
          }
          :global(#jsoneditor) {
            border-radius: 4px;
          }
          .key {
            box-sizing: border-box;

            padding: 12px;
          }
          span {
            display: block;

            margin: 4px 2px;

            font-weight: bold;
          }
          input {
            box-sizing: border-box;
            width: 100%;

            margin: 4px 0;
            padding: 4px;

            font-size: 14px;
          }
          button {
            display: block;

            margin-top: 24px;
            padding: 12px 24px;

            float: right;

            color: white;
            font-size: 1.1em;
            font-weight: bold;

            appearance: none;
            border: none;
            border-radius: 4px;
            background-color: rgb(6, 122, 228);
            background: linear-gradient(rgb(6, 132, 248), rgb(6, 122, 228));
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 200, 0.35);
            cursor: pointer;

            transition: all 0.1s ease-in-out;
          }
          button:hover {
            transform: translateY(-1px);
            box-shadow: 0px 2px 15px 1px rgba(0, 0, 150, 0.25);
          }
          button:disabled {
            opacity: 0.5;
            box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
            cursor: not-allowed;
          }
          button:disabled:hover {
            transform: translateY(0px);
          }
        `}</style>
      </main>
    );
  }
}

export default Editor;
