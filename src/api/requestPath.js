
export const requestPath = {
    register: "/users/user/",
    auth: "/token/",
    products: "/products/product/",
    favorites: "/favorites/",
    favoriteWithId: (id) => `/favorites/${id}/`,
    baskets: "/baskets/",
    basketsWithId: (id) => `/baskets/${id}`
}