import React from 'react';
import PageLayout from './container/PageLayout';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Navigate from './component/Navigate';
import Routes from './router';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <PageLayout
          header={<Header />}
          nav={<Navigate />}
          content={<Routes />}
        />
      </BrowserRouter>
    </>
  );
}
