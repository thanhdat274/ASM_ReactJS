import instance from "./instance";


export const listCate = () =>{
    const url = '/categories'
    return instance.get(url);
}
export const listOneCate = (id: number) =>{
    const url = `/categories/${id}`
    return instance.get(url);
}
export const remove =(id:number)=>{
    const url = `/categories/${id}`
    return instance.delete(url)
}
export const add = (data: any) =>{
    const url = '/categories'
    return instance.post(url, data);
}
export const update = (data:any ) => {
    const url = `/categories/${data.id}` 
    return instance.put(url, data);
}