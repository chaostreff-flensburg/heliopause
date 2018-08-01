import React from "react";
import dynamic from "next/dynamic";
import axios from "axios";

const Editor = dynamic(import("../components/jsonEditor.jsx"), {
  ssr: false
});

export default class extends React.Component {
  render() {
    return <Editor />;
  }
}
