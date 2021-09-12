import ExpenseItem from "./components/ExpenseItem";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <h2>Let's Test </h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
};

export default App;
