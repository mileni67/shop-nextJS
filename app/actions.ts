import { Product } from "./models/product.model"
import { Query } from "./models/query.model"

export const getData = async (query: Query) => {
    const response = await fetch(
        "https://shop-6bb26-default-rtdb.firebaseio.com/goods.json"
    );

    const data: Product[] = await response.json();

    return data.filter((product: Product) => {

        // Category
        if (query.category) {
            if (query.category !== product.category) return false;
        }

        // Search
        if (query.search) {
            const title = product.title.toLowerCase();
            const search = query.search.toLowerCase();
            if (!title.includes(search)) return false;
        }

        // Sale (new)
        if (query.sale === "true") {
            if (product.sale !== true) return false;
        }

        // Min price (new)
        if (query.minPrice) {
            if (product.price < Number(query.minPrice)) return false;
        }

        // Max price (new)
        if (query.maxPrice) {
            if (product.price > Number(query.maxPrice)) return false;
        }

        return true;
    });
};

