import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Inicio from "./components/Views/Inicio";
const INITIAL_EXPENSES =[
    {
        id: '1', 
        title: 'Car Insurance', 
        amount: 294, 
        date: new Date(2021, 2, 28)
    }
];

function App() {
    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
    const addExpenseHandler =expense =>{    // Esto es para actualizar los registros
        //setExpenses([expense, ...expenses]);
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return(
        <Inicio/>
    );
    /*return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>
    );*/
}

export default App;