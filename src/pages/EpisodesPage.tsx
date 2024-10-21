import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {ILocation} from "../models/ILocation";
import {apiService} from "../services/api.service";
import PaginationComponent from "../components/pagination/PaginationComponent";
import Locations from "../components/locations/locations";
import {IEpisode} from "../models/IEpisode";
import Episodes from "../components/episodes/episodes";

const EpisodesPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'})
    const [episodes, setEpisodes] = useState<IEpisode[]>([])
    const [nextPageFlag, setNextPageFlag] = useState<boolean>(false)
    const [prevPageFlag, setPrevPageFlag] = useState<boolean>(false)
    const [pagesCount, setPagesCount] = useState<number>(0)

    useEffect(() => {
        const page = query.get("page");
        if(page){
            apiService.episodes.getAll(+page).then(response => {
                setEpisodes(response.results)
                setPagesCount(response.info.pages);
                if(+page === response.info.pages){
                    setNextPageFlag(true);
                }
                else{
                    setNextPageFlag(false);
                }
                if(+page === 1){
                    setPrevPageFlag(true);
                }
                else{
                    setPrevPageFlag(false);
                }

            })
        }
    }, [query]);


    return (
        <div className="content">
            <Episodes episodesList={episodes}/>
            <PaginationComponent nextPage={nextPageFlag} prevPage={prevPageFlag} totalPages={pagesCount}/>
        </div>
    );
};

export default EpisodesPage;