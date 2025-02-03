import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductList = () => {
  const searchData = useSelector((state) => state.logged.searchData);
  const products = [
    {
      name: "Printing & Packaging   Plastic Pallets, Roto Molded",
      company: "Swift Technoplast Private Limited",
      location: "Navi Mumbai, Maharashtra",
      price: 3200,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Scrap Plastic Pallets",
      company: "Sri Wari Enterprises",
      location: "Coimbatore, Tamil Nadu",
      price: 1100,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Plain Top Plastic Pallets",
      company: "Beeco Manufacturing & Trading Corporation",
      location: "New Delhi, Delhi",
      price: 1600,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Heavy Duty Pallet",
      company: "Croma Plast Private Limited",
      location: "New Delhi, Delhi",
      price: 2500,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      name: "Cardboard Recycling Bins",
      company: "GreenCycle Solutions",
      location: "Pune, Maharashtra",
      price: 850,
      image: "https://via.placeholder.com/150?text=Cardboard+Bins",
    },
    {
      name: "Used Glass Bottles",
      company: "EcoBottles Inc.",
      location: "Hyderabad, Telangana",
      price: 30,
      image: "https://via.placeholder.com/150?text=Used+Glass+Bottles",
    },
    {
      name: "Excess Steel Scrap",
      company: "Metal ReSource",
      location: "Ahmedabad, Gujarat",
      price: 2200,
      image: "https://via.placeholder.com/150?text=Steel+Scrap",
    },
    {
      name: "Lightly Used Wooden Pallets",
      company: "Pallet Hub",
      location: "Kolkata, West Bengal",
      price: 500,
      image: "https://via.placeholder.com/150?text=Wooden+Pallets",
    },
    {
      name: "Old Newspapers and Magazines",
      company: "Paper Drive Recycling",
      location: "Chennai, Tamil Nadu",
      price: 5,
      image: "https://via.placeholder.com/150?text=Paper+Recycling",
    },
    {
      name: "Discarded Electronic Devices",
      company: "E-Waste Management",
      location: "Bangalore, Karnataka",
      price: 2200,
      image: "https://via.placeholder.com/150?text=E-Waste",
    },
    {
      name: "Used Cooking Oil",
      company: "Biofuel Solutions",
      location: "Delhi, National Capital Territory",
      price: 25,
      image: "https://via.placeholder.com/150?text=Used+Cooking+Oil",
    },
    {
      name: "Excess Fabric Remnants",
      company: "Textile Reuse Center",
      location: "Jaipur, Rajasthan",
      price: 2200,
      image: "https://via.placeholder.com/150?text=Fabric+Remnants",
    },
    {
      name: "Broken or Expired Plastic Items",
      company: "Responsible Recycling",
      location: "Mumbai, Maharashtra",
      price: 2200,
      image: "https://via.placeholder.com/150?text=Broken+Plastic",
    },
    {
      name: "Used Tires",
      company: "Tire Retreading Services",
      location: "Lucknow, Uttar Pradesh",
      price: 2200,
      image: "https://via.placeholder.com/150?text=Used+Tires",
    },
    {
      name: "Heavy Duty Plastic Pallet for Racking",
      company: "Bhagavati Wooden Works",
      location: "Ahmedabad, Gujarat",
      price: 2500,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];
  const [productList, setProductList] = useState(products);
  useEffect(() => {
    if (searchData != "") {
      let list = products.filter((item) => {
        let result = item.name.split(/\s+/).filter((item) => {
          return item.toLocaleLowerCase().startsWith(searchData.toLowerCase());
        });
        return result.length > 0;
        // .includes(searchData.toLowerCase());
      });
      setProductList(list);
      console.log("prodddd", productList);
    } else {
      setProductList(products);
    }
  }, [searchData]);
  console.log(" Product List ", productList);
  return (
    <div className="container my-4">
      <h3 className="mb-4">Products You May Like</h3>
      <div className="row">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
