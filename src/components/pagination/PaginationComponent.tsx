import React, {FC} from 'react';
import "./pagination-styles.css"
import {useSearchParams} from "react-router-dom";

type PaginationComponentProps = {
    nextPage: boolean;
    prevPage: boolean;
    totalPages: number;
}

const PaginationComponent: FC<PaginationComponentProps> = ({nextPage, prevPage, totalPages}) => {

    const [query, setQuery] = useSearchParams({page:'1'})
    const pageCounter = query.get("page");

    const onClickPrevHandler = () => {
        const page = query.get("page");
        if(page && +page>1){
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    }

    const onClickNextHandler = () => {
        const page = query.get("page");
        if(page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    }


    return (
        <div className={"buttons-section"}>
                <button onClick={onClickPrevHandler} disabled={prevPage}>Prev</button>
                <span>{pageCounter} of {totalPages}</span>
                <button onClick={onClickNextHandler} disabled={nextPage}>Next</button>
        </div>
    );
};

export default PaginationComponent;