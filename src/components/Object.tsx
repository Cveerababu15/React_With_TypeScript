interface product{
    name:String,
    price:number,
    model:String

}

interface ProductArray  {
    products:product[]
}
function Object({products}:ProductArray) {
  return (
    <>
    
    <div>
        Objects in Typescript
        <div>
        {
            products.map((p)=>(
                <div>
                <h2>Product Name: {p.name}</h2>
                <h2>Product Price: {p.price}</h2>
                <h2>Product Model: {p.model}</h2>
                </div>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default Object