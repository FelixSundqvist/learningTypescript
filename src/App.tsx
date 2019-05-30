import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import stylingTheme from './assets/stylingTheme';
import FrontPage from './containers/FrontPage/FrontPage';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProductInfo from './components/FrontPage/ProductInfo/ProductInfo';

interface AppInterface {
  gamesFromState?: any
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

  const gamesRegex = (gameObj: any) => {
    let route: any;
    let routes: Array<any> = []

    for(let game in gameObj){
        route = `/products/:tile=(${game})/:console=(${gameObj[game].consoles.join("|")})`;
        routes.push(route)
    }
    return routes
  }

  //create exact paths for games
  let gameRoutes, exactRoutes:any;

  if(props.gamesFromState){
    let gamesCopy:any = {...props.gamesFromState};
    gameRoutes = gamesRegex(gamesCopy);
    exactRoutes = gameRoutes.map((route:string) => <Route path={route} component={ProductInfo} />)
  }


  return (
    <BrowserRouter>
      <ThemeProvider theme = {stylingTheme} >
      
        <App>
          <Header /> 
          <Menu /> 
          <Switch>
            <Route path="/" exact component={FrontPage} />
            {exactRoutes}
            <Route render={() => <h1>ooops something went wrong</h1>} />

          </Switch>
          

          <Footer />
        </App>
      
      </ThemeProvider>
    </BrowserRouter>
  );
}
const mapStateToProps = (state:any, ownProps:any) => {
  return {
      gamesFromState: state.games
  }
}
export default connect(mapStateToProps)(App);
