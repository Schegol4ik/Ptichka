import React, {useState} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Head from "./components/head/head";
import Footer from "./components/footer/footer";
import {routes} from "./routes";
import {MAIN_ROUTE} from "./utils/constants";
import {useLanguage} from "./hooks/useLanguage";

const App = (props) => {
    const {lang, changeLanguage} = useLanguage()

    const handleLanguage = (lang) => {
        changeLanguage(lang)
    }
    return (
        <BrowserRouter>
            <Head lang={lang} handleLang={handleLanguage}/>
            <Switch>
                {
                    routes.map(({path, Component}) => <Route path={path} key={path} component={Component} exact/>)
                }
                <Redirect to={MAIN_ROUTE}/>
            </Switch>
            <Footer lang={lang}/>
        </BrowserRouter>
    )
}

export default App