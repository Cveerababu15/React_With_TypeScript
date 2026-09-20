interface User {
  name:string,
  age:number
}
type user={
  name:string,
  age?:number
}
function StatciCompo({name,age=23}:user) {
  return (
   <>
   
   <div>
      <h2>name:{name}</h2>
      <h3>age:{age}</h3>
    </div>
   </>
  )
}

export default StatciCompo