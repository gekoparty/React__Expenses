import Expenses from './components/Expenses/Expenses';


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
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
