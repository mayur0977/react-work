import { INPUT_GETDATA, INPUT_SETDATA } from "../Actions/InputActions";
import { InputResponse } from "../Model/Input.model";


let defaultState= new InputResponse();

const InputReducer = (state = defaultState , action: any): InputResponse => {
    switch (action.type) {
        case INPUT_SETDATA:
            let listCopy: string[] = [...state.list]
            listCopy.push(action.payload)
            return { ...state, list : listCopy };
        case INPUT_GETDATA:
            return { ...state };
        default:
            return state;
    }
}

export default InputReducer;