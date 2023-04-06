import Main from "@/components/home/Main";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SeoulNight</title>
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
