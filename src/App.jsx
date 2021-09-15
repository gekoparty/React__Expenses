import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
      id: "e1",
      title: "Car Insurance",
      amount: 294.4,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Gas",
      amount: 22,
      date: new Date(2021, 3, 24),
    },
    {
      id: "e3",
      title: "Televison",
      amount: 175,
      date: new Date(2021, 1, 14),
    },
    {
      id: "e4",
      title: "Electricity",
      amount: 128,
      date: new Date(2020, 8, 17),
    },
];



const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
