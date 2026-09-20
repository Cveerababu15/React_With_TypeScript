import React, { useState } from 'react'

function Event() {
    const [value,setValue]=useState<string>("")

    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    // Onlcick Event in React with Typescript
    const handlleclick=(event:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Button Clicked");
    }


// HandleSumbmit in React with Typescript

const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log("Form Submitted");
}



  return (
  <>
    <div>
        <h2>Here We Are Working with onChange Event</h2>
        <input type="text" placeholder='Enter Something' onChange={handlechange} />
        <h1>{value}</h1>
    </div>

    <div>
        <h2>we are Performing OnClick Eeven Here</h2>
        <button onClick={handlleclick}>Click Here</button>
    </div>
  
  <div>
    <h3>We Are Performing onSubmit Here</h3>
    <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your name' />
        <button type='submit'>Submit</button>
    </form>
  </div>
  </>
  )
}

export default Event

// onChange => React.ChangeEvent<HTMLInputElement>
// onClick => React.MouseEvent<HTMLButtonElement>
// onSubmit => React.FormEvent<HTMLFormElement>