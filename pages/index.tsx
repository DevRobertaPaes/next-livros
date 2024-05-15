import Head from "next/head";
import React from "react";
import styles from "../styles/home.module.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <main>
        <h1 className="w-100 text-center" style={{ fontSize: "36px" }}>
          <b>Página Inicial</b>
        </h1>
      </main>
    </div>
  );
};

export default Home;
