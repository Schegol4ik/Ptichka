import {CERTIFICATE_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE} from '../utils/constants'

export const HEADER = {
    lang: ['RU','EN'],
    RU:{
        menu: [
            {
                title:'Доставка',
                link: DELIVERY_ROUTE
            },
            {
                title: 'Сертификаты',
                link: CERTIFICATE_ROUTE
            },
            {
                title:'Контакты',
                link: CONTACTS_ROUTE
            }
        ]
    },
    EN:{
        menu:[
            {
                title:'Delivery',
                link: DELIVERY_ROUTE
            },
            {
                title:'Certificates',
                link: CERTIFICATE_ROUTE
            },
            {
                title:'Contacts',
                link: CONTACTS_ROUTE
            }
        ]
    }
}