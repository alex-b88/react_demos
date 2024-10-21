import React, {useEffect, useState} from 'react';
import Characters from "../components/characters/characters";
import PaginationComponent from "../components/pagination/PaginationComponent";
import {ICharacter} from "../models/ICharacter";
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";
import "../main.css"

const CharactersPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'})
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [nextPageFlag, setNextPageFlag] = useState<boolean>(false)
    const [prevPageFlag, setPrevPageFlag] = useState<boolean>(false)
    const [pagesCount, setPagesCount] = useState<number>(0)

    useEffect(() => {
        const page = query.get("page");
        if(page){
            apiService.characters.getAll(+page).then(response => {
                setCharacters(response.results)
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
    }, [query])


    return (
        <div className="content">
            <Characters charactersList={characters}/>
            <PaginationComponent nextPage={nextPageFlag} prevPage={prevPageFlag} totalPages={pagesCount}/>
        </div>
    );
};

export default CharactersPage;