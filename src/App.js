import React from 'react';
import PageLayout from './container/PageLayout';
import Header from "./component/Header";
import Navigate from "./component/Navigate";

export default function App() {
  return (
      <>
         <PageLayout
            header={<Header />}
            nav={<Navigate />}
          />
          
      </>
          
  );
}
