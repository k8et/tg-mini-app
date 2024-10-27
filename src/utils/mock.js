import fish from "../../assets/img/fakeFish.png";
import dumbbell from "../../assets/img/dumbbell.png";
export const items = {
    snacks: [
        {
            name: 'Килька',
            description: 'Килька — маленькая рыбка из семейства сельдевых.',
            duration: '8 часов',
            reward: '+0.05 TON',
            price: 1,
            image: fish,
        },
        {
            name: 'Суши',
            description: 'Роллы с лососем и авокадо.',
            duration: '6 часов',
            reward: '+0.03 TON',
            price: 2,
            image: fish,
        },
        {
            name: 'Бутерброд с икрой',
            description: 'Хрустящий багет с красной икрой.',
            duration: '4 часа',
            reward: '+0.02 TON',
            price: 1.5,
            image: fish,
        }
    ],
    upgrades: [
        {
            name: 'Фитнес-клуб',
            description: 'После хорошего перекуса, кот Том предпочитает позаниматься в зале!',
            level: '1 lvl',
            interval: 'Раз в 1 час',
            reward: '+0.05 TON',
            price: 1,
            image: dumbbell,
        },
        {
            name: 'Кот Том 2.0',
            description: 'Улучшенная версия кота Тома с большей выносливостью.',
            level: '2 lvl',
            interval: 'Раз в 2 часа',
            reward: '+0.10 TON',
            price: 2,
            image: dumbbell,
        }
    ]
};