import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../core/store/store';
import { setNewBag } from '../../../core/reducers/bagSlice';
import { updateBag } from '../../../core/utils/updateBag';

import appendImage from '../../../assets/bag.svg';


interface AddBtnI {
    id: number
}

const AddBtn: FC<AddBtnI> = ({id}) => {

    const dispatch = useDispatch();
    const {bag} = useSelector((state: RootState) => state.bag);

    const [bounce, setBounce] = useState(0);

    function addToBag(e: React.MouseEvent<HTMLButtonElement>) {
        setBounce(1);
        dispatch(setNewBag(updateBag(id, 'plus', bag)));
    }

    return (
        <button onClick={addToBag} onAnimationEnd={() => setBounce(0)} data-bounce={bounce} className="shoe__append">
            <img src={appendImage} alt="Append" />
        </button>
    );
};

export default AddBtn;