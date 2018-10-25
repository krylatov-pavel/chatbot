import data from './fakeData';
import { baseUrl } from '../config';

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAll = () => {
    return delay(2000)
        .then(() => [...data.bots])
        .then(bots => {
            bots.forEach(bot => bot.avatar = baseUrl + bot.avatar);
            return bots;
        });
};