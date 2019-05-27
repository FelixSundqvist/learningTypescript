import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import stylingTheme from './assets/stylingTheme';
import FrontPage from './components/FrontPage';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from "react-router-dom"

const App: React.FC = () => {
  const App = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  `

  return (
    <BrowserRouter>
      <ThemeProvider theme = {stylingTheme} >
        
        <App>
          <Header /> 
          <Route path="/" component={FrontPage} />
        </App>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
