import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

              background-color: rgb(246, 247, 248);
            }
          `}</style>
          <style jsx global>{`
            /* CSS Micro Reset
      https://github.com/vladocar/CSS-Micro-Reset
      licensed under MIT License by Vladimir Carrer */

            body {
              margin: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-weight: normal;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            th,
            td {
              text-align: left;
              vertical-align: top;
            }

            img,
            iframe {
              border: 0;
            }

            /*=== CUSTOM RESETS ===*/

            *:focus {
              outline: none;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
