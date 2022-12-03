import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';

import logoSvg from '../../assets/Logo.svg';
import bagSvg from '../../assets/bag.svg';

import './header.scss';


const Header: FC = () => {

    const {bag} = useSelector((state: RootState) => state.bag);
    const [bounce, setBounce] = useState(0);
    const [counter, setCounter] = useState<number | string>(0);

    useEffect(() => {
        let counter = 0;
        bag.forEach(item => {
            if (item.count) {
                counter += item.count;
            }
        });
        if (counter > 9) {
            setCounter('9+')
        } else {
            setCounter(counter)
        }
        setBounce(1);
    }, [bag]);

    
    const toggleBag = () => {
        document.querySelector('.bag')?.classList.toggle('bag_active');
    }


    return (
        <header className="header">
            <div className="header__content">
                <a href="/"><img src={logoSvg} alt="Main logo" /></a>
                <button className="header__bag" onClick={toggleBag}>
                    <img className="header__bag" src={bagSvg} alt="Bag" />
                    <span data-bounce={bounce} onAnimationEnd={() => setBounce(0)}>{counter}</span>
                </button>
            </div>
        </header>
    );
};

export default Header;