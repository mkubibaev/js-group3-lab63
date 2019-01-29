import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Blog from "./containers/Blog/Blog";
import Add from "./components/Add/Add";
import Header from "./components/Header/Header";
import FullPost from "./components/FullPost/FullPost";
import Edit from "./components/Edit/Edit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={Blog}/>
                        <Route path='/posts/add' component={Add}/>
                        <Route path='/posts/:id' exact component={FullPost}/>
                        <Route path='/posts/:id/edit' component={Edit}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
