import {CERTIFICATE_ROUTE, DELIVERY_ROUTE} from '../utils/constants'

export const FOOTER = {
    RU:{
        menu:[
            {
                title: 'Условия доставки',
                link: DELIVERY_ROUTE
            },
            {
                title: 'Наша ответственность',
                link: CERTIFICATE_ROUTE
            }
        ],
        text: 'Крестианско-фермерсвое хозяйство «Чухрий», ОГРН 313231531100042, ИНН 231518598756'
    },
    EN:{
        menu:[
            {
                title: 'Delivery terms',
                link: DELIVERY_ROUTE
            },
            {
                title: 'Our responsibility',
                link: CERTIFICATE_ROUTE
            }
        ],
        text: 'Peasant farm "Chukhriy", MSRN 313231531100042, TIN 231518598756'
    }
}