import data from './fakeData';

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAll = () => {
    return delay(2000).then(() => data.bots);
};