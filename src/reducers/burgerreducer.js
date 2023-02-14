import { TOGGLE_BURGER } from "../actions/burgeractions";

const initialState = {
    burgerIsOpen: false,
};

function burgerreducer(state= initialState, action = {}) {
    switch (action.type){
        case TOGGLE_BURGER:
            return {
                ...state,
                burgerIsOpen: !state.burgerIsOpen,
            };
        default:
            return state;
    }
}

export default burgerreducer;