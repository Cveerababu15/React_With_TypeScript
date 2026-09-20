import ApiI from "./components/ApiI"
import Event from "./components/Event"
import Object from "./components/Object"
import StatciCompo from "./components/StatciCompo"
import Array from "./components/array"
import UseR from "./components/useRef"
import useSt from "./components/useSt"
import { useState } from "react"


// Object Internface
interface User2 {
  name:string,
  roll:number,
  pass:boolean
}


// Array of Object Interface
interface ArrayObject {
  name:String,
  age:number
}
function App() {
// in this tume we used the Generic types in UseState 
  const [name,setName]=useState<string | number>("Ramesh")
  const [obj,setObj]=useState<User2>({
    name:"Veerababu",
    roll:22,
    pass:true
  })

  // Arrays in Usestate
  const [arrs,setArrs]=useState<string[]>(["Veerababu","Rajesh","Kumar","Mohan Reddy"])
  const [arrn,setArrn]=useState<number[]>([1,2,3,4,5,6,7,8,9])
// Arrays of Objecys
const [arrb,setArrb]=useState<ArrayObject[]>([
  {
    name:"Veerababu",
    age:22
  },
  {
    name:"Rajesh",
    age:23
  },
  {
    name:"Kumar",
    age:24
  }
])




const  handle=()=>{
    setName(100)
}
  return (
    <>
    <div>
      <h2>WelCome to TypeScript In React</h2>
    </div>
    
{/* <StatciCompo name={"veerababu"} age={22}/>
<StatciCompo name={"Rajesh"}/> */}


{/* <Array names={["veerababu","Rajesh","Kumar","Mohan Reddy"]}/> */}

{/* <Object products={
  [
    {
      name:"Mobile",
      price:20000,
      model:"Samsung"
    },
    {
      name:"Laptop",
      price:50000,
      model:"Dell"
    },
    {
      name:"Tablet",
      price:15000,
      model:"Lenovo"
    }
  ]
}/> */}


<h2>{name}</h2>
<button onClick={handle}>Click</button>




<div>
  <h2>Object in React with TypeScript</h2>
  <h2>{obj.name}</h2>
  <h2>{obj.roll}</h2>
  <h2>{obj.pass}</h2>
</div>

// Array of Objects
<div>
  
    <h2>Array of Objects in React with TypeScript</h2>
    {
      arrb.map((item,index)=>{
        return(
          <div key={index}>
            <h2>{item.name}</h2>
            <h2>{item.age}</h2>
          </div>
        )
      })
    }
</div>



// Events in React with TypeScript
<Event/>


{/* 
UseRef in Reactwith TypeScript */}
<UseR/>






{/* API INTEGRATION IN REACT WITH TYPESCRIPT */}


<ApiI/>




    </>
  )
}

export default App