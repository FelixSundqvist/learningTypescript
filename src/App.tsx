import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import stylingTheme from './assets/stylingTheme';
import FrontPage from './containers/FrontPage/FrontPage';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

interface AppInterface {
  
}


const App: React.FC<AppInterface> = (props) => {
  const App = styled.div`
    text-align: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100vw;
    overflow: hidden;
  `
  return (
    <BrowserRouter>
      <ThemeProvider theme = {stylingTheme} >
      
        <App>
          <Header /> 
          <Menu /> 
          <Route path="/" component={FrontPage} />
{/*           <Switch>
            
            <Route render={() => <h1>ooops something went wrong</h1>} />

          </Switch> */}
          

          <Footer />
        </App>
      
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
