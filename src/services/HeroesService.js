import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
let ts = Date.now().toString();
const hash = MD5(ts + privateKey + apiKey).toString();

const getHeroes = async (id) => {
    let baseUrl = `${API_URL}/v1/public/characters`;

    //Marvel API requires hashing
    
    let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${id}`;

    try {
        let response = await fetch(url);
        let res = await response.json();
        return res.data.results;
    } catch (err) {
        console.log(err)
        return;
    }
};

const getHero = async (id) => {
    let baseUrl = `${API_URL}/v1/public/characters/${id}`;
    let url = `${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

    try {
        let response = await fetch(url);
        let res = await response.json();
        return res.data.results;
    } catch (err) {
        console.log(err)
        return;
    }
};

export {getHeroes, getHero};