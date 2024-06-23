import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {currency, expenses, dispatch, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        let newValue = event.target.value
        if(newValue > 20000) {
            alert("The value cannot exceed "+currency+" 20,000");
            return;
        }
        if(totalExpenses > newValue) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        setNewBudget(newValue);
        dispatch({
            type: 'SET_BUDGET',
            payload: newValue,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
