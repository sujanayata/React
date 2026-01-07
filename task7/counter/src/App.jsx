import CounterPanel from "./Components/counter";

function App() {
  return (
    <div>
      {/* With initial value */}
      <CounterPanel initialValue={5} />
    </div>
  );
}

export default App;
