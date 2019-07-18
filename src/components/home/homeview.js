import React, { Suspense, useState, useEffect, useRef, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/UI/spinner';
import Header from 'components/header/header';
import Error from 'components/UI/error/error';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import AddMore from 'components/addmore/addmore';
import { getCurrencyExchangeInfo, currencyReducer, actions} from './homecontroller';
import './home.css';
const HomeView = (props) => {
  const CurrencyDetail = React.lazy(() => import('components/currencydetail/currencydetailview'));
  const currencyInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const initialState = {selectedCurrencyList:[]};

  const [state, dispatch] = useReducer(currencyReducer, initialState);
  const [conversionAmount, setConversionAmount] = useState(10);
  const [currencyCollection, setCurrencyCollection] = useState([]);
  const [isAddMore, setIsAddMore] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    getCurrencyExchangeInfo()
    .then(currencyInfo => {
      setCurrencyCollection(currencyInfo);
      setIsLoading(false);
    }).catch(error => {
      setError("Server is down. Try after some time..");
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    if(error.length > 0) {
      setTimeout(()=> {
        setError('');
      }, 3000);
    }
  }, [error])
  const updateConversionAmount = (amount) => {
    if(amount > 0) {
      setConversionAmount(amount);
    } else {
      setError("Enter correct conversion amount");
    }
  };
  const addCurrencyCode = () => {
    const currencyCode = currencyInputRef.current.value.trim().toUpperCase();
    if(currencyCode.length > 2) {
      const validCurrency = currencyCollection.find(currency => currency.name === currencyCode);
      setIsAddMore(true);
      dispatch({type: actions.ADD, payload: validCurrency});
    }
  }
  const removeCurrency = (currencycode) => {
    const filterCurrency = state.selectedCurrencyList.filter(currency => currency.name !== currencycode);
    dispatch({type: actions.REMOVE, payload: filterCurrency})
  };
  
  const pendingCurrencies = currencyCollection.reduce((pendingList, item ) => { 
    const isCurrencyAvailable = state.selectedCurrencyList.find(selectedItem => selectedItem.name === item.name);
    !isCurrencyAvailable && pendingList.push(item.name);
    return pendingList;
  }, []);
  
  const currencyList = state.selectedCurrencyList ? state.selectedCurrencyList.map(currency => <CurrencyDetail key={currency.name} conversionAmount={conversionAmount} currency={currency} removeCurrency={removeCurrency}></CurrencyDetail>) : null;
  
  return (
    <ErrorBoundary>
      {useMemo(() => <Header conversionAmount={conversionAmount} updateConversionAmount={updateConversionAmount}></Header>, [conversionAmount])}
      <main>
      {isLoading ? <Spinner /> : null}
      {error.length > 0 ? <Error error={error}></Error> : null}
      <Suspense fallback={<div>Loading...</div>}>
        <div aria-label="currency container" className="scrollableSection"> 
          {currencyList}
          {useMemo(()=> 
              <AddMore ref={currencyInputRef} pendingCurrencies={pendingCurrencies} isAddMore={isAddMore} setIsAddMore={setIsAddMore} addCurrencyCode={addCurrencyCode}></AddMore>
          // eslint-disable-next-line react-hooks/exhaustive-deps
          , [isAddMore])}
        </div>
      </Suspense>
      </main>
    </ErrorBoundary>
  );

}
HomeView.propTypes = {
  isLoading: PropTypes.bool
};

export default HomeView;

