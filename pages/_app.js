import Head  from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Head>
        <title>
          B2Brain
        </title>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </Head>
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
