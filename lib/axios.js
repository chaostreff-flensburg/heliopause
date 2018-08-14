// set host & port for axios instance
// https://github.com/nuxt-community/express-template/blob/master/template/plugins/axios.js
import * as axios from "axios";

let options = {};
// The server-side needs a full url to work
if (!process.browser) {
  options.baseURL = `http://${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;
}

export default axios.create(options);
