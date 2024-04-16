import React, { useState } from 'react';
import { FaClinicMedical } from "react-icons/fa";
import Order from './order';

const showOrder = (props) =>{
  return(
    <div>
      {props.order.map(el => (<Order key={el.id} item={el}/>))}
    </div>
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>
        Товаров нет
      </h2>
    </div>
  )
}

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false); 

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaClinicMedical onClick={() => setCartOpen(!cartOpen)} className={`ShopButton ${cartOpen ? 'action' : ''}`} />
            {cartOpen && (
              <div className='shop-card'>
                {props.order.length > 0 ? showOrder(props) : showNothing()} {/* Added parentheses after showNothing */}
              </div>
            )}
        </div>
        <div className='presentation'>

        </div>
    </header>
  );
}
