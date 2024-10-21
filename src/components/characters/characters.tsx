import React, {FC} from 'react';
import {ICharacter} from "../../models/ICharacter";
import "./characters-styles.css"

type Props = {
    charactersList: ICharacter[]
}

const Characters: FC<Props> = ({charactersList}) => {

    return (
        <div className={"characters-container"}>
            {
                charactersList.map((object: ICharacter) => (
                    <div key={object.id} className={"one-character-box"}>
                        <img className={"object-image"} src={object.image} alt={object.name} />
                        <div className={"character-info"}>
                            <h4>{object.name}</h4>
                            <span>{object.status} - {object.species}</span>
                            <span className={"text-grey"}>Last known location:</span>
                            <span>{object.location.name}</span>
                            <span className={"text-grey"}>First seen in:</span>
                            <span>{object.origin.name}</span>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Characters;