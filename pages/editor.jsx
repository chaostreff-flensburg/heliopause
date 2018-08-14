import React from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(import("../components/jsonEditor.jsx"), {
  ssr: false
});

export default class extends React.Component {
  render() {
    return <Editor />;
  }
}
