// import React from 'react'
// // Your task is to explain why the console.log shows the older value of count
// // After updating the state, React will eventually re-render the component to reflect the new state. But this re-render doesn’t happen right away. It’s scheduled and managed by React's reconciliation process, which is why it seems asynchronous. So if you try to log the value of count right after calling setCount, you'll still see the old value, not the updated one. This is because the update to count hasn't been applied yet—it's scheduled to happen later. This process is known as batching.

// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log(count); // You will see the older value of count in console
//   };

//   return (
//     <div>
//       <p>Button is clicked {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App
import React from 'react'

// Your task is to explain why count value is not updated to 3 as expected
// React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.

// This might remind you of a waiter taking an order at the restaurant. A waiter doesn’t run to the kitchen at the mention of your first dish! Instead, they let you finish your order, let you make changes to it, and even take orders from other people at the table.
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is  clicked {count}   times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
