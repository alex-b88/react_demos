
import React, {FC} from 'react';
import {ILocation} from "../../models/ILocation";
import "./locations-styles.css"
import Characters from "../characters/characters";
import Character from "../character/character";

type Props = {
    locationList: ILocation[];
}

const Locations: FC<Props> = ({locationList}) => {

    return (
        <div className={"locations-container"}>
            {
                locationList.map((object: ILocation) => (
                    <div key={object.id} className={"one-location-box"}>
                        <h4>{object.name}</h4>
                        <span><b>Type:</b> {object.type}</span>
                        <span><b>Dimension:</b> {object.dimension}</span>
                        {/*<span><b>Residents:</b></span>*/}
                        {/*<div className={"persons-img-container"}>*/}
                        {/*    {object.residents.map(personLink => (*/}
                        {/*        <Character personLink={personLink}/>*/}
                        {/*    ))}*/}
                        {/*</div>*/}
                    </div>
                ))
            }
        </div>
    );
};

export default Locations;