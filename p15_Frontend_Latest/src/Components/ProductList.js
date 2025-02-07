import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState(products);
  useEffect(() => {
    fetch("http://localhost:8082/api/getCompanyProducts") // Adjust API URL
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setProductList(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  console.log("Products arare , ", products);
  let dispro = products.filter((val) => {
    return val.compProdId == 52;
  });
  console.log("dispro : ", dispro);

  const searchData = useSelector((state) => state.logged.searchData);

  useEffect(() => {
    if (searchData.trim() !== "") {
      let list = products
        .map((item) => {
          let nameWords = item.product.product_name.toLowerCase().split(/\s+/);
          let searchWords = searchData.toLowerCase().split(/\s+/);

          // Count how many words match
          let matchCount = searchWords.reduce(
            (count, word) =>
              count + nameWords.filter((w) => w.includes(word)).length,
            0
          );

          return { item, matchCount };
        })
        .filter(({ matchCount }) => matchCount > 0) // Remove non-matching items
        .sort((a, b) => b.matchCount - a.matchCount) // Sort by best match
        .map(({ item }) => item); // Extract back the products

      setProductList(list);
    } else {
      setProductList(products);
    }
  }, [searchData, products]);

  return (
    <div className="container my-4">
    <h3 className="mb-4 text-center text-primary">Products You May Like</h3>
    <div className="row g-4">
      {productList.map((product, index) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
  
  
  );
};

export default ProductList;
