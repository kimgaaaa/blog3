import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {/* changeName, */increase, addCount} from '../store';

const Cart = () => {
   let state=useSelector((state)=>{return state});
   console.log(state.cart);
   let dispatch = useDispatch();
   return (
      <div className='cart'>
        {state.user.name}의 장바구니
        {/* <h5>{state.user.age}의 장바구니</h5>
        <button onClick={()=>{dispatch(increase())}}>버튼</button> */}
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경</th>
               </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((a, i)=>(
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td><button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button></td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
      </div>
   );
};

export default Cart;