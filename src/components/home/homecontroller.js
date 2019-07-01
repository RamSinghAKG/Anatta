import * as service from 'common/service';
import config from 'src/config';
import { PRECISION, CURRENCY_INFO } from 'common/constants';
export const actions = {
    ADD: "ADD",
    REMOVE: "REMOVE"
}
export function getCurrencyExchangeInfo() {
    return service.getData(service.url.exchangerate).then((response => {
        const convertedBaseCurrency = baseCurrencyConversion(response); // EUR to  USD
        return Promise.resolve(convertedBaseCurrency);
    })).catch(error => {
        return Promise.reject(error);
    });
}

const baseCurrencyConversion = (exchangeRate) => {
    let euroRates = exchangeRate.rates;
    let newRates = {};
    const eur = 1 / euroRates[config.baseCurrency];
    newRates = { "EUR": eur.toFixed(PRECISION+1) };
    for (let currencyCode in euroRates) {
        newRates[currencyCode] = (euroRates[currencyCode] * eur).toFixed(PRECISION+1);
    }
    const formattedNewRates = CURRENCY_INFO.map(currency => Object.assign({}, currency, { unit: newRates[currency.name] }));
    return formattedNewRates;
}

export function currencyReducer(state, action) {
    switch (action.type) {
        case actions.ADD:
            return {selectedCurrencyList: [...state.selectedCurrencyList, action.payload]};
        case actions.REMOVE:
            return {selectedCurrencyList: action.payload};
        default:
            return state;
    }
}
