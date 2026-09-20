interface User{
    names:string[]
}
function Array({names}:User) {
  return (
    <div>
        {
            names.map(name => (
                <h2>{name}</h2>
            ))
        }
    </div>
  )
}

export default Array