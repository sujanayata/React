import { useState } from "react";

export function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
      <ChildC count={count}></ChildC>
    </>
  );
}

function ChildA({ count }) {
  return <h1>Count: {count}</h1>;
}

function ChildB({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Increment Count
    </button>
  );
}
function ChildC({count}){
    return(
        <>
         <h1> count : {count}</h1>
        </>
    )
}