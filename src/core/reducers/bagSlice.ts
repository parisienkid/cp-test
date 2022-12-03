import { createSlice } from "@reduxjs/toolkit";
import { shoesData } from '../data/shoesData';

let initialBag = shoesData.map(item => {
    return {
        id: item.id,
        url: item.url,
        name: item.name,
        price: item.price,
        count: 0
    }
});

export interface bagItemI {
    id: number,
    count: number,
    url: string,
    name: string,
    price: number
}

interface initialStateI {
    bag: Array<bagItemI>
}

interface addItemActionI {
    payload: bagItemI[],
    type: string,
}

const initialState: initialStateI = {
    bag: initialBag
}

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        setNewBag: (state, action: addItemActionI) => {
            state.bag = action.payload;
        },
    }
})

const {reducer, actions} = bagSlice;

export const {setNewBag} = actions;

export default reducer;