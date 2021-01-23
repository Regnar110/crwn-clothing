import { UserActionTypes } from  './user.types'

const INITIAL_STATE = { // obiekt reprezentujący początkowy stan tego reducera
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { // state to stan w momencie wywołania akcji przekazany przez STORE. state=INITIAL_STATE to nowość w es6, która pozwala na ustawienie state na initial_state w przypadku gdyby state był undefined
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return { // zwravccamy nowy obiekt reprezentujący nowy stan 
                ...state, // rozporzestrzeinamy cały stan
                currentUser: action.payload // zmieniamyw wartośc właściwości, która nas interesuje w rozprzestrzenionym stanie.
            }
        
        default: // zwracamy stan jeżeli typ akcji nie jest zgodny z tym reducerem. Zwrócenie poprzedniego stanu nie spowoduje wyrenderowania komponentu na nowo
            return state;
    }
}

export default userReducer;

//Powodem, dla którego znajduje się tu swich jest to że nieważne jaka akcja zostanie wykonana to o tej akcji zostaną powiadomone wszystkie reducery.
// Switch pozwala nam określić, który reducer ma się zainteresować konkretnymi typami akcji.