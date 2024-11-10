import axios from "axios";
import md5 from "md5";

// Ваши публичный и приватный ключи
const publicKey = '745d5e729c9aec59ac909406412c8e83';
const privateKey = 'ac0d393235cb9a47756b6b552984578f30313fbe';

const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

export const fetchCharacters = () => async dispatch => {
    try {
        const res = await axios.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
                apikey: publicKey,
                ts: ts,
                hash: hash,
                limit: 10
            }
        });

        dispatch({
            type: 'FETCH_CHARACTERS',
            payload: res.data.data.results
        });
    } catch (error) {
        console.error(error);
    }
};

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
});
