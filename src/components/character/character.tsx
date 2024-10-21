import React, {FC, useEffect, useState} from 'react';
import {apiService} from "../../services/api.service";
import {ICharacter} from "../../models/ICharacter";
import "./character-styles.css"

type Props = {
    personLink: string;
}

const Character: FC<Props> = ({personLink}) => {

    const [person, setPerson] = useState<ICharacter>()

    useEffect(() => {
        apiService.characters.getOne(personLink).then(response => {
            setPerson(response);
            console.log(person);
        })
    }, []);

    return (
        <>
            <img src={person?.image} alt={person?.name} />
        </>
    );
};

export default Character;