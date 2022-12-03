import {FC, ReactNode} from 'react';
import './container.scss';

interface ContainerI {
    children: ReactNode 
}
 
const Container: FC<ContainerI> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;