import chick from '../pages/certificate/Content/img/цикл.png'
import ear from '../pages/certificate/Content/img/1.png'
import responsebility from '../pages/certificate/Content/img/3.png'

export const CERTIFICATE_PAGE = {
    RU: {
        aboutCycle:
            {
                title: 'Гарантия качества',
                image: chick,
                text: 'Полный цикл производства'
            },
        ourRejection_top: [
            {
                image: ear,
                title: 'Собственный натуральный корм',
                text: 'Мы сами готовим корм для наших птичек и кроликов. Никаких гормонов роста и продуктов генной инженерии. Все корма сбалансированы и насыщены витаминами и минералами.'
            },
            {
                image: ear,
                title: 'Без усилителей вкуса',
                text: 'Все полуфабрикаты, фарш и колбасы производятся без усилителей вкуса, нитратов, красителей, сои и и другой гадости. Только натуральные специи.'
            }

        ],
        ourRejection_bot: [
            {
                image: responsebility,
                title: 'Экологическое содержание',
                text: 'Наше хозяйство находится в лесу, на экологически чистой территории. Даже вода, которую пьют наши птички и кролики, из артезианской скважины.'
            },
            {
                image: responsebility,
                title: 'Личная ответственность',
                text: 'Мы дорожим репутацией нашей семьи и фермы и контролируем производство на каждом этапе. Все этапы работы, включая упаковку, проделывают члены нашей большой семьи. Мы уверены в своем продукте.'
            }],
        title: 'Справки и сертификаты'
    },
    EN: {
        aboutCycle:
            {
                title: 'Quality assurance',
                image: chick,
                text: 'Full production cycle'
            },
        ourRejection_top: [
            {
                image: ear,
                title: 'Own natural food',
                text: 'We prepare food for our birds and rabbits ourselves. No growth hormones or genetically engineered products. All feeds are balanced and rich in vitamins and minerals.'
            },
            {
                image: ear,
                title: 'Without flavor enhancers',
                text: 'All semi-finished products, minced meat and sausages are produced without flavor enhancers, nitrates, dyes, soy and other nasty things. Only natural spices.'
            }
        ],
        ourRejection_bot: [
            {
                image: responsebility,
                title: 'Environmental content',
                text: 'Our farm is located in a forest, in an ecologically clean area. Even the water that our birds and rabbits drink is from an artesian well.'
            },
            {
                image: responsebility,
                title: 'Personal responsibility',
                text: 'We value the reputation of our family and farm and control production at every stage. All stages of work, including packaging, are done by members of our large family. We are confident in our product.'
            }],
        title: 'References and certificates'
    }
}
