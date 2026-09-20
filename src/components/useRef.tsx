import React, { useRef } from 'react'

function UseR() {
const myref=useRef<HTMLInputElement>(null)
// ButtonRef
const buttonref=useRef<HTMLButtonElement>(null)



console.log(typeof myref);
// useRef is mainly used for accessing the DOM elements directly in React. It allows you to create a reference to a DOM element and interact with it without causing re-renders. In this example, we are using useRef to get the value of an input field when a button is clicked.
// useRef is Replacement of useState in React. It is used to store a mutable value that does not cause a re-render when updated. In this example, we are using useRef to store the reference to the input field and access its value without causing a re-render of the component.
const handleclick=()=>{
    console.log(myref);
    console.log(myref.current);
console.log("This is value: ",myref.current?.value);
}


// buttonref
const handlefun=()=>{
    buttonref.current?.focus()
}
  return (
    <>
    
    <div style={{marginTop:"30px"}}>
        <h2>Here We are Going to Learning UseRef</h2>

        <div>
            <input type="text" ref={myref}  name="" id="" placeholder='Enter Something' />
            <button ref={buttonref}  onClick={handleclick}>Click</button>

            <h2>ButtonRef</h2>
            <button ref={buttonref} onClick={handlefun}>Cick ButtonRef</button>
        </div>
    </div>

    </>
  )
}

export default UseR