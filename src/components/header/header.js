import config from 'src/config';
import {DELAY} from 'common/constants';
import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './header.css';
const Header = (props) => {
    console.log('render header...');
    const amountRef = useRef();
    let timerId = 0;
    const onCurrencyAmountChange = () => {
        clearTimeout(timerId);
        timerId = setTimeout(() => props.updateConversionAmount(amountRef.current.value), DELAY);
    }
    
    return (
        <ErrorBoundary>
            <header>
                <div > {config.baseCurrencyDescription} </div>
                <div className="header-title">
                    <div className="currency-title">{config.baseCurrency}</div>
                    <input onChange={() => onCurrencyAmountChange()} ref={amountRef} aria-label="Enter currency number" placeholder="Enter amount.." type="number" className="currency-amount"></input>
                </div>
            </header>
        </ErrorBoundary>
    );
};

Header.propTypes = {
    conversionAmount: PropTypes.number,
    updateConversionAmount: PropTypes.func
};

export default Header;
