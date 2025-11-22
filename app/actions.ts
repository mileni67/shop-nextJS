import { Product } from "./models/product.model"
import { Query } from "./models/query.model"

export const getData = async (query: Query) => {
    const response = await fetch("https://shop-6bb26-default-rtdb.firebaseio.com/goods.json")
    const data = await response.json()

    return data.filter((product: Product) => {

        if (query.category) {
            if (query.category !== product.category) {
                return false
            }
        }

        if (query.search) {
            const title = product.title.toLowerCase()
            const search = query.search.toLowerCase()

            if (!title.includes(search)) {
                return false
            }
        }

        return true
    })
}
