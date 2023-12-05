
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ProductResults({ getDetails }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");



  const fetchProducts = async () => {
    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    const modifiedData = data.map((product) => {
      const modifiedProduct = { ...product };
      modifiedProduct.price = Math.trunc(modifiedProduct.price * 40);
      return modifiedProduct;
    });
    setProducts(modifiedData.filter((product) => !selectedCategory || product.category === selectedCategory));
  };
  
  useEffect(() => {
    fetchProducts();
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    console.log("Selected category:", event.target.value);
  setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <div className="mb-4">
  <label className="mr-2 font-bold text-gray-700 dark:text-gray-400" htmlFor="category-select">
    Category:
  </label>
  <div className="select">
    <select
      id="category-select"
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500 w-full py-2 pr-7 pl-2 text-base leading-6 text-gray-700 dark:text-gray-400 bg-white dark:bg-gray-900 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5"
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    <div className="select__arrow"></div>
  </div>
</div>

      <div className="grid grid-cols-1 gap-12 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {products.map((product) => (
          <div className="card w-96 bg-base-100 shadow-xl image-full" key={product.id}>
            <figure>
              <img src={product.image} alt="Product" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.category}</h2>
              <p>{product.title}</p>
              <div className="card-actions justify-end">
                <Link to="/details" className="btn btn-primary" onClick={() => getDetails(product)}>
                  get Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

