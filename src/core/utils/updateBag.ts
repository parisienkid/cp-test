import { bagItemI } from "../reducers/bagSlice";

interface updateBagI {
    ( 
        id: number,
        method: 'minus' | 'plus' | 'delete',
        bag: Array<bagItemI>
    ): bagItemI[]
}

export const updateBag: updateBagI = (id, method, bag) => {
    let newBag = JSON.parse(JSON.stringify(bag));
    newBag = newBag.map((item: bagItemI) => {
        if (item.id === id) {
            switch (method) {
                case 'minus': {
                    item.count -= 1;
                    break
                }
                case 'plus': {
                    item.count += 1;
                    break
                }
                case 'delete': {
                    item.count = 0;
                    break
                }
            }
            return item;
        } else return item;
    });
    return newBag;
};