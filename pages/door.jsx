import React, { Component } from "react";
import Head from "next/head";
import axios from "../lib/axios";

export default class door extends Component {
  static async getInitialProps({ req, asPath }) {
    let res = await axios.get("/");
    return { ...res.data };
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Space API Door Widget</title>
          <link href="https://fonts.googleapis.com/css?family=Space+Mono:400" rel="stylesheet" />
        </Head>
        <section>
          <figure className="status" />
          <span>Space {`${this.props.state.open ? 'geöffnet' : 'geschlossen'}`}</span>
        </section>
        <style jsx>{`
          section {
            padding: 4px;

            font-size: 16pt;
            font-family: "Space Mono", monospace;
          }
          .status {
            display: inline-block;
            width: 16px;
            height: 16px;

            margin: 0 12px;

            background-color: ${ this.props.state.open ? '#4bef84' : '#EF4B4B' };
            border-radius: 50%;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
