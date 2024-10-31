
export const retriveLocalStorage = <T,>(key:string) => {
    let obj = localStorage.getItem(key) || '';
    if(!obj){
        return {} as T;
    }
    const getEdItem = JSON.parse(obj);
    return getEdItem as T;
}