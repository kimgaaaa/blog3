import {configureStore, createSlice} from '@reduxjs/toolkit';

let user = createSlice({
   name:'user',
   initialState:{id:0, name:'jee', age: 20},
   reducers: {
    changeName(state){
        state.name='hyun'
    },
    increase(state){
        state.age +=1
    }
   }
});
export let {changeName, increase} = user.actions
let cart = createSlice({
    name: 'cart',
    initialState: [
        {id:0, name:'버섯조명', count: 2}, 
        {id:1, name:'날씬한 몸매를 보여주는 거울', count: 1}, 
    ],
    reducers:{
        addCount(state, action){
            state[action.payload].count++
        }
    }
})
export let {addCount} = cart.actions

export default configureStore({
   reducer: {
      user: user.reducer,
      cart: cart.reducer
   }
})