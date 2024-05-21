import React, { useContext } from 'react'
import { BasketContext } from '../../context/basketContext'

const Basket = () => {
  const{basket,setBasket}=useContext(BasketContext);

  return (
    <div style={{padding:'100px 0'}}>
      <ul>
        {basket && basket.map((basketItem)=>{
          return <li>
            <span>{basketItem.title} | <b>{basketItem.count}</b></span>
            <button onClick={()=>{
                const currentItem=basket.find((x)=>x._id==basketItem._id)
              if (currentItem.count>1) {
                currentItem.count-=1;
                setBasket([...basket]);
                localStorage.setItem("basket",JSON.stringify("basket",basket))
              } else {
                const uptadeProduct=basket.filter((x)=>x._id!=basketItem._id);
                setBasket([...uptadeProduct]);
                localStorage.setItem("basket",JSON.stringify("basket",uptadeProduct));
              }
           
            
            }}>-</button>
            <button onClick={()=>{
              const currentItem=basket.find((x)=>x._id==basketItem._id)
              currentItem.count+=1;
              setBasket([...basket]);
              localStorage.setItem("basket",JSON.stringify("basket",basket))
            }}>+</button>
            <button onClick={()=>{
              const uptadeProduct=basket.filter((x)=>x._id!=basketItem._id);
              setBasket([...uptadeProduct]);
              localStorage.setItem("basket",JSON.stringify("basket",uptadeProduct));
            }}
            >remove</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Basket