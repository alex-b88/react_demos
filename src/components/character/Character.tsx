import React, {FC, ReactNode} from 'react';
import './character-styles.css'

type IType = {
    name: string,
    type: string,
    gender: string,
    status: string,
    img: string,
    children?: ReactNode
}


const Character:FC<IType> = ({name, status, type, gender, img, children}) => {
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>type: {type}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={img} alt={name}/>
            {children}
        </div>
    );
};

export default Character;