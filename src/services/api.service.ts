import {axiosInstance} from "./instance";
import {IResponse} from "../models/IResponse";
import {ICharacter} from "../models/ICharacter";
import {ILocation} from "../models/ILocation";
import {IEpisode} from "../models/IEpisode";
import axios from "axios";


export const apiService = {

    characters: {
        getAll: async (page:number): Promise<IResponse & {results: ICharacter[]}> => {
            const response = await axiosInstance.get<IResponse & {results: ICharacter[]}>('character', {
            params: {
            page: page
            },
        });
        return response.data;
        },
        getOne: async (link:string): Promise<ICharacter> => {
            console.log(link);
            const axiosInstanceForCharacter = axios.create({
                baseURL: link,
                headers: {"Content-Type": "application/json"},
            })
            const response = await axiosInstanceForCharacter.get<ICharacter>("")
            return response.data;
        }
    },

    locations: {
        getAll: async (page:number): Promise<IResponse & {results: ILocation[]}> => {
            const response = await axiosInstance.get<IResponse & {results: ILocation[]}>('location', {
                params: {
                    page: page
                }
            });
            return response.data;
        }
    },

    episodes: {
        getAll: async (page:number): Promise<IResponse & {results: IEpisode[]}> => {
            const response = await axiosInstance.get<IResponse & {results: IEpisode[]}>('episode', {
                params: {
                    page: page
                }
            });
            return response.data
        }
    }
}