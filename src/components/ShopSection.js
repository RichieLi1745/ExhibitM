

const ShopSection = ({shop}) => {
  return (
    <div className="shop-image-container">
        <img className="shop-image" src={shop} alt=""/>
        <div className="shop-text-container">
          <div className="shop-text-one">SHOP</div>
          <div className="shop-text-two">CURATE YOUR STYLE</div>
        </div>
      </div>
  );
}
export default ShopSection;