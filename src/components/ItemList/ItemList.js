import Item from "../Item/Item"

const ItemList = ({dataProducts}) =>{
    return(
        <div className="d-flex">
            {dataProducts.map( (product) =>{
                return <Item key={product.id} data={product}/>
            })}
        </div>
    )
}

export default ItemList