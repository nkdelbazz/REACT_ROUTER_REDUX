import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : ( (localStorage["todo_user_react_token"]) ? localStorage.getItem('todo_user_react_token') : '')
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        /** METODO PER AGGIORNARE IL TOKEN DI AUTENTICAZIONE */
        updateState : (state,action) => {
          state.token = action.payload
        },
        /** METODO PER RIMUOVERE IL TOKEN DI AUTENTICAZIONE */
        removeState : (state) => {
            localStorage.removeItem('todo_user_react_token') 
            state.token = ''
          }
    }
})

export const {updateState,removeState} = userSlice.actions 
export default userSlice.reducer