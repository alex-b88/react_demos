import React, {FC} from 'react';
import {IEpisode} from "../../models/IEpisode";
import "./episodes-styles.css"

type Props = {
    episodesList: IEpisode[];
}

const Episodes: FC<Props> = ({episodesList}) => {

    return (
        <div className={"episodes-container"}>
            {
               episodesList.map((object: IEpisode) => (
                   <div key={object.id} className={"one-episode-box"}>
                       <h4>{object.name}</h4>
                       <span><b>Air date: </b>{object.air_date}</span>
                       <span><b>Episode: </b>{object.episode}</span>
                   </div>
               ))
            }
        </div>
    );
};

export default Episodes;