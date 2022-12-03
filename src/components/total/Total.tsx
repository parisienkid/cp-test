import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';

const Total: FC = () => {

    const {bag} = useSelector((state: RootState) => state.bag);

    const countTotal = () => {
        let counter = 0;
        bag.forEach(item => {
            if (item.count > 0) {
                counter += item.price * item.count;
            }
        });
        return counter;
    }

    const renderTotal = () => {
        if (bag.every(item => item.count === 0)) {
            return null;
        } else {
           return (
                <>
                    <div><span>Subtotal</span><span>{countTotal()} $</span></div>
                    <div><span>Tac</span><span>100 $</span></div>
                    <div><span>Shipping</span><span>150 $</span></div>
                    <div><span className='total__main'>Total</span><span>{countTotal() + 250} $</span></div>
                </>
           )
        }
    }

    return (
        <div className="total">
            {renderTotal()}
        </div>
    );
};

export default Total;