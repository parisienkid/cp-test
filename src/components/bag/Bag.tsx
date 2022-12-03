import { FC } from 'react';
import Basket from '../basket/Basket';
import Total from '../total/Total';


import './bag.scss';

const Bag: FC = () => {
    return (
        <aside className='bag'>
            <Basket/>
            <Total/>
        </aside>
    );
};

export default Bag;