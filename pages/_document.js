import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://cdn.fuseplatform.net/publift/tags/2/2019/fuse.js"
          />

          <script
            async
            src="//cdn.taboola.com/libtrc/weatherzone-weatherzonecomau/loader.js"
            id="tb_loader_script"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
