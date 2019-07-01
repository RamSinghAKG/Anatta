import config from 'src/config';
export const url = {
    exchangerate: '/latest'
}

export const getData = (url) => {
    const options = {
        method: 'GET'
    }
    return fetchJSON(url, options);
}

async function fetchJSON(url, options={}) {
    const absoluteUrl = config.apiServer + url;
    try{
        const response =  await fetch(absoluteUrl, options);
        const json = await response.json();
        console.log('Request succeeded: ', url);
        return Promise.resolve(json);
    } catch(error){
        console.log('Request failed', error);
        return Promise.reject(error);
    }
}
