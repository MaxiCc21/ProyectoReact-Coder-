function Card({ data }) {
  let { img, price, name } = data;

  return (
    <div className="ShopGallery-card">
      <div>
        <img alt="Ropa" src={img}></img>
      </div>
      <div className="tittle-section">
        <span>${price}</span>
        <p>{name}</p>
        <p>Categoria </p>
      </div>
    </div>
  );
}

export default Card;
