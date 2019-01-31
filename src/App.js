import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PostList from "./containers/PostList/PostList";
import PostAdd from "./containers/PostAdd/PostAdd";
import Header from "./components/Header/Header";
import PostView from "./containers/PostView/PostView";
import PostEdit from "./containers/PostEdit/PostEdit";
import AboutView from "./containers/AboutView/AboutView";
import AboutEdit from "./containers/AboutEdit/AboutEdit";
import ContactsView from "./containers/ContactsView/ContactsView";
import ContactsEdit from "./containers/ContactsEdit/ContactsEdit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={PostList}/>
                        <Route path='/about' exact component={AboutView}/>
                        <Route path='/about/edit' component={AboutEdit}/>
                        <Route path='/contacts' exact component={ContactsView}/>
                        <Route path='/contacts/edit' component={ContactsEdit}/>
                        <Route path='/posts/add' component={PostAdd}/>
                        <Route path='/posts/:id' exact component={PostView}/>
                        <Route path='/posts/:id/edit' component={PostEdit}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
