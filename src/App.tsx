import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './containers/Header/Header';
import stylingTheme from './assets/stylingTheme';
import FrontPage from './components/FrontPage/FrontPage';

const App: React.FC = () => {
  const App = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100vh 100vh;
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
