
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './../CurrencyDropdown.css';

const CurrencyDropdown = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState('£ Pound');
  const [isOpen, setIsOpen] = useState(false);

  const currencies = [
    { symbol: '$', name: 'Dollar' },
    { symbol: '£', name: 'Pound' },
    { symbol: '€', name: 'Euro' },
    { symbol: '₹', name: 'Rupee' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(`${currency.symbol} ${currency.name}`);
    setIsOpen(false);
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency.symbol,
    });
  };

  return (
    <div className="alert alert-success dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Currency ({selectedCurrency}) 
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {currencies.map((currency) => (
            <li key={currency.name} onClick={() => selectCurrency(currency)}>
              {currency.symbol} {currency.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CurrencyDropdown;