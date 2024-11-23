import CategoryList from "./components/categorylist/CategoryList"
import ProductList from "./components/productlist/productlist"
import Slider from "./components/Slider/Slider"
import './page.scss'
const HomePage = () => {
  return (
    <div className='products'>
      <Slider />
      <div className="productItems">
        <h1>Featured Products</h1>
        <ProductList/>
      </div>
      <div className="productcategory">
        <h1>Categories</h1>
        <CategoryList/>
      </div>
      <div className="productItems">
        <h1>New Products</h1>
        <ProductList/>
      </div>
    </div>
  )
}

export default HomePage