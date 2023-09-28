import Head from "next/head";
import Landing from "../components/landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Band Assignment App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Landing />
      </main>
    </>
  );
}
