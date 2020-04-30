import React from "react";
import Header from './header';
import { Global, css } from '@emotion/core';
import {Helmet} from 'react-helmet';


const Layout = (props) => {
  
  return (
    <>
      <Global
        styles={ css`
          html {
            font-size: 62.5%;
          }
          body {
            background-color: black;
            color: white;
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
          }

          h1,h2,h3 {
            margin: 0;
            line-height: 1.5;
          }

          h1,h2 {
            fontt-family: 'Roboto', serif;
          }

          h3 {
            fontt-family: 'PT Sans', sans-serif;
          }

          ul {
            list-style: none;
            margin:0;
            padding:0;
          }

        `}
      />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' rel='stylesheet'/>
      </Helmet>
      <Header/>
      {props.children}

    </>
  );
}


export default Layout;
