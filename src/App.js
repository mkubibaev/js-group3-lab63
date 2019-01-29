import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Blog from "./containers/Blog/Blog";
import Add from "./components/Add/Add";
import Header from "./components/Header/Header";
import FullPost from "./components/FullPost/FullPost";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Blog}/>
                        <Route path='/add' component={Add}/>
                        <Route path='/posts/:id' component={FullPost}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
