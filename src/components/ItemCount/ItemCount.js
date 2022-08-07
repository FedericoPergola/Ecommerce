import {useState} from 'react'

const ItemCount = ({stock}) =>{
    const [count, setCount] = useState(1)
    
    const addNumber = () =>{
        if (stock !== count) {
        setCount(count + 1)
        }
    }

    const restNumber = () =>{
        if (count !== 1) {
            setCount(count - 1)
        }
    }

    return(
        <>
        <div class="stock mt-1 d-flex ">
            <button onClick={restNumber}>-</button>
            <p>{count}</p>
            <button className='button2' onClick={addNumber}>+</button>
        </div>
        <p>Unidades diponibles {stock}</p>
        </>
    )
}

export default ItemCount