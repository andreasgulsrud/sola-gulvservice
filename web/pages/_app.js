import "../../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sola Gulvservice</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="title"
          property="og:title"
          content="McKinsey market report"
        />
        <meta
          name="description"
          property="og:description"
          content="McKinsey market report, Norge i morgen"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
