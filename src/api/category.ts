import { CateType } from './../type/category';
import instance from "./instance";


export const listCate = () => {
    const url = '/categories'
    return instance.get(url);
}
export const listOneCate = (id: string) => {
    const url = `/categories/${id}`
    return instance.get(url);
}
export const remove = (id: string) => {
    const url = `/categories/${id}`
    return instance.delete(url)
}
export const addCate = (data: CateType) => {
    const url = '/categories'
    return instance.post(url, data);
}
export const update = (data: CateType) => {
    const url = `/categories/${data.id}`
    return instance.put(url, data);
}