import Main from "./pages/main/main";
import {CERTIFICATE_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, MAIN_ROUTE} from "./utils/constants";
import Certificate from "./pages/certificate/Certificate";
import Contacts from "./pages/contacts/Contacts";
import Delivery from "./pages/delivery/Delivery";

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CERTIFICATE_ROUTE,
        Component: Certificate
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: DELIVERY_ROUTE,
        Component: Delivery
    },

]