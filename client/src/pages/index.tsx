import Head from "next/head";
import Selection from "./selection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Band Assignment App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Selection />
      </main>
    </>
  );
}
