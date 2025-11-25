import { getData } from "./actions"
import { Product } from "./models/product.model"
import { Query } from "./models/query.model"
import AddToCartButton from "./ui/AddToCartButton"
import PriceFilter from "./ui/PriceFilter"

export default async function Home({ searchParams }: { searchParams: Query }) {
  const query = await searchParams
  const products = await getData(query)

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-3 col-xl-2 d-none d-lg-block">
          <div className="filter">
            <div className="filter-title">
              <h5>Фильтр</h5>
            </div>

            <PriceFilter />

          </div>
        </div>

        {/* Product list */}
        <div className="col-12 col-lg-9 col-xl-10">
          <div className="container">
            <div className="row no-gutters goods">
              {products.map((product: Product) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.title}>
                    <div className="card" data-key="${goodsItem.id}">

                      {product.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : null}

                      <div className="card-img-wrapper">
                        <span className="card-img-top"
                          style={{ backgroundImage: `url(${product.img})` }}
                        ></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">{product.price} ₽</div>
                        <h5 className="card-title">{product.title}</h5>
                        <AddToCartButton product={product} />
                      </div>
                    </div>
                  </div>
                )
              })}



            </div>
          </div>
        </div>

      </div>
    </div >
  )
}