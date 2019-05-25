import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './containers/Header/Header';
import stylingTheme from './assets/stylingTheme';
import FrontPage from './containers/FrontPage/FrontPage';

const App: React.FC = () => {
  const App = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
  `

  return (
    <ThemeProvider theme = {stylingTheme} >
      <App>
        <Header />
        <FrontPage />        
      </App>
    </ThemeProvider>
  );
}

export default App;
