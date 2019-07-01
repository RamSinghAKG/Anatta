import React from 'react';
import PropTypes from 'prop-types';
import './addmore.css';
import 'common/helper.css';
const AddMore = React.forwardRef((props, ref) => {
    const addMoreButton = <button className="action-btn addmore-btn" onClick={() => props.setIsAddMore(false)}>(+) Add More Currencies</button>;
    const enterInput = <><select className="currency-input" aria-label="select currency code" ref={ref}>
        {props.pendingCurrencies.map((currency)=> <option key={currency} value={currency}>{currency}</option>)}
    </select>
    <button className="action-btn submit-btn" onClick={props.addCurrencyCode}>Submit</button></>;
    
    console.log('render AddMore ....');
    return <div className="addMoreContainer"> {props.isAddMore ?  addMoreButton :  enterInput} </div> ;
});
AddMore.propTypes = {
    isAddMore: PropTypes.bool,
    pendingCurrencies: PropTypes.array,
    addCurrencyCode: PropTypes.func,
    setIsAddMore: PropTypes.func
};


export default AddMore;
