import instance from "./instance";


export const getAll = () => {
    const url = "/products"
    return instance.get(url)
}
export const listOnePro = (id: string) =>{
    const url = `/products/${id}`
    return instance.get(url);
}
export const remove =(id:number)=>{
    const url = `/products/${id}`
    return instance.delete(url)
}
export const addPro = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}
export const editPro = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}