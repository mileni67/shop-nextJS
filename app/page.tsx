export default function Home() {
  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-3 col-xl-2 d-none d-lg-block">
          <div className="filter">
            <div className="filter-title">
              <h5>Фильтр</h5>
            </div>

            <div className="filter-price">
              <div className="filter-price_title">Цена</div>

              <form>
                <div className="filter-price_range">
                  <div className="filter-price_input-wrapper">
                    <label htmlFor="min" className="filter-price_label">
                      от
                    </label>
                    <input id="min" className="filter-price_input" />
                  </div>

                  <div className="filter-price_input-wrapper">
                    <label htmlFor="max" className="filter-price_label">
                      до
                    </label>
                    <input id="max" className="filter-price_input" />
                  </div>
                </div>
              </form>
            </div>

            <div className="filter-check">
              <label className="filter-check_label">
                <input
                  type="checkbox"
                  className="filter-check_checkbox"
                  id="discount-checkbox"
                />
                <span className="filter-check_checkmark"></span>
                <span className="filter-check_label-text">Акция</span>
              </label>
            </div>
          </div>
        </div>

        {/* Product list */}
        <div className="col-12 col-lg-9 col-xl-10">
          <div className="container">
            <div className="row no-gutters goods">
              {/* --- PRODUCT CARDS --- */}
              {[
                {
                  price: "33990 ₽",
                  title: "Игровая приставка Sony PlayStation 4 Pro",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
                },
                {
                  price: "16499 ₽",
                  title: "Игровая приставка Sony PlayStation 3 Super Slim",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg",
                  sale: true,
                },
                {
                  price: "39990 ₽",
                  title: "Игровая приставка Xbox One X",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1024358491.jpg",
                },
                {
                  price: "23411 ₽",
                  title: "Игровая приставка Xbox One S",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg",
                  sale: true,
                },
                {
                  price: "24751 ₽",
                  title: "Игровая приставка Nintendo Switch",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1021386685.jpg",
                },
                {
                  price: "3624 ₽",
                  title: "Игровая приставка Sega Retro Genesis HD",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1024928305.jpg",
                  sale: true,
                },
                {
                  price: "1551 ₽",
                  title: "Игровая приставка Dendy Junior",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg",
                  sale: true,
                },
                {
                  price: "10445 ₽",
                  title: "Игровая приставка Sony PlayStation Classic",
                  img: "https://cdn1.ozone.ru/multimedia/c400/1025222877.jpg",
                },
              ].map((card, i) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={i}>
                  <div className="card">
                    {card.sale && <div className="card-sale">🔥Hot Sale🔥</div>}

                    <div className="card-img-wrapper">
                      <span
                        className="card-img-top"
                        style={{
                          backgroundImage: `url('${card.img}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></span>
                    </div>

                    <div className="card-body justify-content-between">
                      <div className="card-price">{card.price}</div>
                      <h5 className="card-title">{card.title}</h5>
                      <button className="btn btn-primary">В корзину</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}