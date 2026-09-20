import { useState } from "react"
function useSt() {
    const [name,setName]=useState<string>("Ramesh")
const  handle=()=>{
    setName("Veera")
}


    return (
    <>

<div>
<h2>{name}</h2>
    <button onClick={handle}>Click</button>
    
</div>
    </>
  )
}

export default useSt