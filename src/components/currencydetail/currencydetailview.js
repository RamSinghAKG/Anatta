import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import config from 'src/config';
import { PRECISION } from 'common/constants';
import './currencydetail.css';
const CurrencyDetail = ({conversionAmount, currency, removeCurrency}) => {
    console.log('render CurrencyDetail...');
    const {name, description, unit } = currency;
    const formattedUnit = `1${config.baseCurrency} = ${name} ${parseFloat(unit).toFixed(PRECISION)}`;
    const amount = parseFloat(unit * conversionAmount).toFixed(PRECISION);
    return (
        <ErrorBoundary>
            <div className="currency-container">
                <div aria-label="currency information" className="currency-info">
                    <div className="net-amount"> <div aria-label="currency name">{name}</div> <div className="amount" aria-label="net amount">{amount}</div></div>
                    <div aria-label="currency descrption" className="description"> {description} </div>
                    <div aria-label="currency unit"> {formattedUnit} </div>
                </div>
                <button aria-label="remove currency detail"  onClick={() => removeCurrency(name)} className="currency-remove">( - )</button>
            </div>
        </ErrorBoundary>);
};

CurrencyDetail.propTypes = {
    currency: PropTypes.object,
    removeCurrency: PropTypes.func
};

export default CurrencyDetail;