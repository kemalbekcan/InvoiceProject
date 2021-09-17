import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Descriptions from "../components/Descriptions";
import MobileFooter from "../components/displays/MobileFooter";
import MobileFooterMenu from "../components/displays/MobileFooterMenu";

type Props = {
  title?: string;
};

const IndexPage: NextPage<Props> = ({ title = "Generator" }: Props) => {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/04c5ba34f7.js"
          crossOrigin="anonymous"
        ></script>
        <title>{title}</title>
      </Head>
      <Header />
      <Descriptions />
      <Content />
      <Footer />
      <MobileFooter />
      <MobileFooterMenu />
      <Script src="js/modal.js"></Script>
    </Fragment>
  );
};

export default IndexPage;
