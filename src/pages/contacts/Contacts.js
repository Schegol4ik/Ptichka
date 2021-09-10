import React from 'react';
import Head from "../../components/head/head";
import ContentContacts from "./content/ContentContacts";
import Footer from "../../components/footer/footer";
import {useLanguage} from "../../hooks/useLanguage";

const Contacts = () => {
    const {lang} = useLanguage()

    return (
        <div>

            <ContentContacts/>

        </div>
    );
};

export default Contacts;