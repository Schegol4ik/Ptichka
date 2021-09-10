import chickIcon from '../pages/main/img/Цикл.png'
import familyFarm from '../pages/main/img/Семейная ферма.png'
import bookIcon from '../pages/main/img/традиции.png'
import pickupIcon from '../pages/main/img/свежая продукция.png'
import chickProduction from '../pages/catalog/images/chik.png'
import turkeyProduction from '../pages/catalog/images/turkey.png'
import rabbitProduction from '../pages/catalog/images/rabbit.png'
import sausageProduction from '../pages/catalog/images/sausages.png'
import eggsProduction from '../pages/catalog/images/egg.png'
import semiFinishProduction from '../pages/catalog/images/semiFinish.png'


export const MAIN_PAGE = {
    RU: {
        main_title: 'От нашей семьи - вашей!',
        text_page: 'Натуральные фермерские продукты',
        description_page: {
            title: 'Птичка из станички',
            text: 'С первого дня работы нашей фермы мы взяли за основу себе один главный принцип — мы будем приносить пользу обществу. Именно с этого замысла и родилось наше фермерское хозяйство и именно эта идеология помогает нам легко развиваться, а нашим потребителям делать правильный выбор.',
        },
        about_page: [
            {
                image: chickIcon,
                title: 'Экологичный цикл производства',
                text: 'Мы выращиваем наших птичек на кормах, которые изготавливаем самостоятельно. Никакой химии, гормонов роста и никаких ГМО, только правильное и сбалансированное питание, со всеми витаминами и микроэлементами, которые необходимы для здоровья птиц и качественного мяса к столу потребителей'
            },
            {
                image: familyFarm,
                title: 'Семейная ферма - семейные ценности',
                text: 'Мы – фермеры и мы любим своё дело. Весь цикл производства осуществляется нами самостоятельно и мы уверены в том, что на каждом этапе будет всё по-честному. Наша репутация в наших руках'
            },
            {
                image: bookIcon,
                title: 'Традиции и особые рецепты',
                text: 'Не секрет, что в нашем ассортименте имеются также и полуфабрикаты, к производству которых мы подходим с особым подходом. Делаем их как для себя'
            },
            {
                image: pickupIcon,
                title: 'Только свежая продукция',
                text: 'Мы производим только то количество продукции, в реализации которого уверены на 100%. Только с увеличением спроса мы потихоньку увеличиваем объем производства'
            },
        ],
        ourProduction_title: 'Наша продукция',
        ourProduction_top: [
            {
                image: chickProduction,
                title: 'Куры',
                text: 'Тушки,разделки и фарш',
                buttonText: 'Перейти в каталог'
            },
            {
                image: turkeyProduction,
                title: 'Индейка',
                text: 'Тушки,разделки и фарш',
                buttonText: 'Перейти в каталог'
            },
            {
                image: rabbitProduction,
                title: 'Кролик',
                text: 'Тушки,разделки и потрох',
                buttonText: 'Перейти в каталог'
            }],
        ourProduction_bot: [
            {
                image: sausageProduction,
                title: 'Копчения и колбасы',
                text: 'Все из нашего мяса',
                buttonText: 'Перейти в каталог'
            },
            {
                image: eggsProduction,
                title: 'Яйца',
                text: 'Яйца счастливых кур',
                buttonText: 'Перейти в каталог'
            },
            {
                image: semiFinishProduction,
                title: 'Полуфабрикаты',
                text: 'Все из нашего мяса',
                buttonText: 'Перейти в каталог'
            },
        ],
        weAndFarm_title: 'Мы и наша ферма'
    },
    EN: {
        main_title: 'From our family - yours!',
        text_page: 'Natural farm products',
        description_page: {
            title: 'A bird from the village',
            text: 'From the first day of operation of our farm, we have taken as a basis for ourselves one main principle - we will be of benefit to society. It is from this idea that our farming was born and it is this ideology that helps us to develop easily, and our consumers make the right choice.',
        },
        about_page: [
            {
                image: chickIcon,
                title: 'Eco-friendly production cycle',
                text: 'We raise our birds on feed that we make ourselves. No chemistry, no growth hormones and no GMOs, only proper and balanced nutrition, with all vitamins and minerals that are necessary for the health of birds and high-quality meat to the consumers\' table'
            },
            {
                image: familyFarm,
                title: 'Family farm - family values',
                text: 'We are farmers and we love what we do. The entire production cycle is carried out by us independently and we are confident that everything will be fair at every stage. Our reputation is in our hands'
            },
            {
                image: bookIcon,
                title: 'Traditions and special recipes',
                text: 'It\'s no secret that our assortment also includes semi-finished products, the production of which we approach with a special approach. We make them as for ourselves'
            },
            {
                image: pickupIcon,
                title: 'Only fresh products',
                text: 'We produce only the quantity of products that we are 100% sure of selling. Only with an increase in demand do we gradually increase production'
            },
        ],
        ourProduction_title: 'Our production',
        ourProduction_top: [
            {
                image: chickProduction,
                title: 'Chickens',
                text: 'Carcasses, cuts and minced meat',
                buttonText: 'Go to catalog'
            },
            {
                image: turkeyProduction,
                title: 'Turkey',
                text: 'Carcasses, cuts and minced meat',
                buttonText: 'Go to catalog'
            },
            {
                image: rabbitProduction,
                title: 'Rabbit',
                text: 'Carcasses, cuts and offal',
                buttonText: 'Go to catalog'
            }],
        ourProduction_bot: [
            {
                image: sausageProduction,
                title: 'Smokers and sausages',
                text: 'All of our meat',
                buttonText: 'Go to catalog'
            },
            {
                image: eggsProduction,
                title: 'Eggs',
                text: 'Happy Chickens\' Eggs',
                buttonText: 'Go to catalog'
            },
            {
                image: semiFinishProduction,
                title: 'Semi-finished products',
                text: 'All of our meat',
                buttonText: 'Go to catalog'
            },
        ],
        weAndFarm_title: 'We and our farm'
    }
}