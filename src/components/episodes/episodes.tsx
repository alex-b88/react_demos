import React, {FC} from 'react';
import {IEpisode} from "../../models/IEpisode";

type Props = {
    episodesList: IEpisode[];
}

const Episodes: FC<Props> = ({episodesList}) => {

    return (
        <div className={"episodes-container"}>
            {
               episodesList.map((object: IEpisode) => (
                   <div key={object.id} className={"one-episode-box"}>{object.name}</div>
               ))
            }
        </div>
    );
};

export default Episodes;