import React, { useState } from 'react';
import PageLayout from './container/PageLayout';
import { BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Navigate from './component/Navigate';
import Routes from './router';

export default function App() {
    const [word, setWord] = useState('Home')

    return (
      <>
        <BrowserRouter>
          <PageLayout
            header={<Header />}
            nav={<Navigate changeWord={word => setWord(word)}/>}
            content={<Routes />}
            rename={word}
          />
        </BrowserRouter>
      </>
    );
  }

