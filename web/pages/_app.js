import "../../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sola Gulvservice</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" property="og:title" content="Sola Gulvservice AS" />
        <meta
          name="description"
          property="og:description"
          content="Sola Gulvservice AS"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
