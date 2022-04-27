import React, {useEffect} from 'react';
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import {observer} from "mobx-react-lite";
import {Route, Switch, useLocation} from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import {ToastContainer} from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import {useStore} from "../stores/store";
import LoadingComponent from "./LoadingComponent";
import ModalContainer from "../common/modals/ModalContainer";
import ProfilePage from "../../features/profiles/ProfilePage";
import Testing from "../../features/testing/Testing";
import PrivateRoute from "./PrivateRoute";

function isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}

function App() {
    const location = useLocation();
    const {commonStore, userStore} = useStore();
    
    useEffect(() => {
        if (commonStore.token) {
            if (!isTokenExpired(commonStore.token))
                userStore.getUser().finally(() => commonStore.setAppLoaded());
            else {
                userStore.logout();
                commonStore.setAppLoaded();
            }
        } else {
            commonStore.setAppLoaded();
        }
    }, [commonStore, userStore])
    
    if (!commonStore.appLoaded) return <LoadingComponent content='Loading app...' />
    
  return (
    <>
        <ToastContainer position='bottom-right' hideProgressBar />
        <ModalContainer />
        <Route exact path='/' component={HomePage} />
        <Route
            path={'/(.+)'}
            render={() => (
                <>
                    <NavBar />
                    <Container style={{marginTop: '7em'}}>
                        <Switch>
                            <PrivateRoute exact path='/activities' component={ActivityDashboard} />
                            <PrivateRoute path='/activities/:id' component={ActivityDetails} />
                            <PrivateRoute key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
                            <PrivateRoute path='/profiles/:username' component={ProfilePage} />
                            <Route path='/errors' component={TestErrors} />
                            <Route path='/server-error' component={ServerError} />
                            <Route path='/testing' component={Testing} />
                            <Route component={NotFound} />
                        </Switch>
                    </Container>
                </>
            )}
        />
    </>
  );
}

export default observer(App);
