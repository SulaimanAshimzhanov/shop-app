import { instance } from "../configs/config";
import { requestPath } from "./requestPath";


export const createUser = (data) => instance.post(requestPath.register, data);

export const authUser = (data) => instance.post(requestPath.auth, data);

export const getProducts = () => instance.get(requestPath.products);

export const addFavorite = (data) => instance.post(requestPath.favorites, data);

export const getFavorite = () => instance.get(requestPath.favorites);

export const deleteFavorite = (id) => instance.delete(requestPath.favoriteWithId(id));

export const addBasket = (data) => instance.post(requestPath.baskets, data);

export const getBaskets = () => instance.get(requestPath.baskets);

export const deleteBaskets = (id) => instance.delete(requestPath.basketsWithId(id))
