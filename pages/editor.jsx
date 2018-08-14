import React from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(import("../components/jsonEditor.jsx"), {
  ssr: false
});

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Editor />
        <style jsx global>{`
          body {
            color: #010101;
            font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell,
              "Helvetica Neue", sans-serif;

            background-color: rgb(246, 247, 248);
          }
        `}</style>
      </React.Fragment>
    );
  }
}
