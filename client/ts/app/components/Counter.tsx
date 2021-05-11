import  { useState } from 'react' ;

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    function onClick () {
      setCounter(counter+1)
    }
    return (
    <>
     <button onClick={onClick}>
         {counter}
     </button>
     
    </>
    )
}