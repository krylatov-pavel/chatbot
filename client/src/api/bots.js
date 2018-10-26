import data from './fakeData';
import { botApi } from '../config';

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAll = () => {
    return delay(2000)
        .then(() => [...data.bots])
        .then(bots => {
            bots.forEach(bot => bot.avatar = botApi + bot.avatar);
            return bots;
        });
};