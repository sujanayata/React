// import { useState } from "react";

// export default function EventBinding() {
//   const [count, setCount] = useState(0);
// //   const decrement=()=>{
// //     setCount(count-1);
// //   }

// const greet = (name)=>alert(`Hello, ${name}`)

//   return (
//     <>
//       <h1>The Count : {count}</h1>
//       {/* <button onClick={() => setCount(count + 1)}>
//         Click Here
//       </button> */}
//       {/* <button onClick={decrement}>Decrement</button> */}
//       <h1>The name is {name}</h1>
//       <button onClick={()=>{greet("puppy")}}>Display</button>
//     </>
//   );
// }


export default function EventBinding() {

  const greet = (name) => {
    alert(`Hello, ${name}`);
  };

  return (
    <>
      <h1>Event Binding Example</h1>
      <button onClick={() => greet("puppy")}>
        Display
      </button>
    </>
  );
}
