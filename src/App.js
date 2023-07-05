import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import Card from "./Components/shopping/Card";
import CartProvider from "./Store/CartProvider";


const TEMP_PRODUCT_DATA = [
  {
    id: 1,
    productName: "Camera",
    description: "This camera is a retro version of the product and is very good.",
    price: 99.99,
    category: "Electronics",
  },
  {
    id: 2,
    productName: "Book",
    description: "This Book is a retro version of the product and is very good.",
    price: 29.99,
    category: "Books",
  },
  {
    id: 3,
    productName: "Laptop",
    description: "Powerful and portable laptop for all your computing needs.",
    price: 899.99,
    category: "Electronics",
  },
  {
    id: 4,
    productName: "Shoes",
    description: "High-quality shoes for casual and sports activities.",
    price: 79.99,
    category: "Fashion",
  },
  {
    id: 5,
    productName: "Headphones",
    description: "Wireless headphones with noise-cancellation feature for immersive audio experience.",
    price: 149.99,
    category: "Electronics",
  },
  {
    id: 6,
    productName: "Sunglasses",
    description: "Trendy sunglasses to protect your eyes from the sun.",
    price: 39.99,
    category: "Fashion",
  },
  {
    id: 7,
    productName: "Smartphone",
    description: "The latest smartphone with advanced features and powerful performance.",
    price: 699.99,
    category: "Electronics",
  },
  {
    id: 8,
    productName: "Backpack",
    description: "Spacious and durable backpack for carrying your essentials.",
    price: 59.99,
    category: "Fashion",
  },
  {
    id: 9,
    productName: "Gaming Console",
    description: "Gaming console for an immersive gaming experience.",
    price: 399.99,
    category: "Electronics",
  },
  {
    id: 10,
    productName: "Watch",
    description: "Elegant and stylish watch for both men and women.",
    price: 149.99,
    category: "Fashion",
  },
  {
    id: 11,
    productName: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 12,
    productName: "T-shirt",
    description: "Comfortable and trendy t-shirt for everyday wear.",
    price: 24.99,
    category: "Fashion",
  },
  {
    id: 13,
    productName: "Digital Camera",
    description: "High-resolution digital camera for capturing stunning photos and videos.",
    price: 299.99,
    category: "Electronics",
  },
  {
    id: 14,
    productName: "Laptop Bag",
    description: "Stylish and protective bag for carrying your laptop and accessories.",
    price: 49.99,
    category: "Fashion",
  },
  {
    id: 15,
    productName: "Wireless Earbuds",
    description: "True wireless earbuds with excellent sound quality and long battery life.",
    price: 129.99,
    category: "Electronics",
  },
  {
    id: 16,
    productName: "Jeans",
    description: "Classic jeans for a comfortable and stylish look.",
    price: 59.99,
    category: "Fashion",
  },
  {
    id: 17,
    productName: "Smart TV",
    description: "High-definition smart TV with a wide range of entertainment options.",
    price: 799.99,
    category: "Electronics",
  },
  {
    id: 18,
    productName: "Dress",
    description: "Elegant and fashionable dress for special occasions.",
    price: 89.99,
    category: "Fashion",
  },
  {
    id: 19,
    productName: "Tablet",
    description: "Versatile tablet for productivity and entertainment on the go.",
    price: 249.99,
    category: "Electronics",
  },
  {
    id: 20,
    productName: "Hoodie",
    description: "Comfortable hoodie for a casual and cozy look.",
    price: 39.99,
    category: "Fashion",
  },
  {
    id: 21,
    productName: "Fitness Tracker",
    description: "Smart fitness tracker to monitor your health and fitness activities.",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 22,
    productName: "Sneakers",
    description: "Stylish sneakers for a trendy and sporty look.",
    price: 69.99,
    category: "Fashion",
  },
  {
    id: 23,
    productName: "Portable Power Bank",
    description: "Compact and portable power bank for charging your devices on the go.",
    price: 29.99,
    category: "Electronics",
  },
  {
    id: 24,
    productName: "Jacket",
    description: "Warm and fashionable jacket for cold weather.",
    price: 89.99,
    category: "Fashion",
  },
  {
    id: 25,
    productName: "Wireless Mouse",
    description: "Ergonomic wireless mouse for comfortable and precise cursor control.",
    price: 19.99,
    category: "Electronics",
  },
  {
    id: 26,
    productName: "Swimsuit",
    description: "Stylish swimsuit for enjoying your time at the beach or pool.",
    price: 49.99,
    category: "Fashion",
  },
  {
    id: 27,
    productName: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with built-in virtual assistant.",
    price: 129.99,
    category: "Electronics",
  },
  {
    id: 28,
    productName: "Wallet",
    description: "Sleek and functional wallet to keep your cards and cash organized.",
    price: 39.99,
    category: "Fashion",
  },
  {
    id: 29,
    productName: "Wireless Headphones",
    description: "Wireless headphones with high-fidelity sound and comfortable fit.",
    price: 99.99,
    category: "Electronics",
  },
  {
    id: 30,
    productName: "Tote Bag",
    description: "Stylish and spacious tote bag for carrying your essentials in style.",
    price: 49.99,
    category: "Fashion",
  },
  {
    id: 31,
    productName: "Smartwatch",
    description: "Feature-packed smartwatch for staying connected and tracking your fitness.",
    price: 199.99,
    category: "Electronics",
  },
  {
    id: 32,
    productName: "Sweater",
    description: "Warm and cozy sweater for a comfortable and fashionable look.",
    price: 59.99,
    category: "Fashion",
  },
  {
    id: 33,
    productName: "Bluetooth Earphones",
    description: "Bluetooth earphones with great sound quality and long battery life.",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 34,
    productName: "Socks",
    description: "Soft and comfortable socks for everyday wear.",
    price: 9.99,
    category: "Fashion",
  },
  {
    id: 35,
    productName: "External Hard Drive",
    description: "High-capacity external hard drive for storing your files and data.",
    price: 129.99,
    category: "Electronics",
  },
  {
    id: 36,
    productName: "Sweatpants",
    description: "Relaxed and comfortable sweatpants for lounging or workouts.",
    price: 34.99,
    category: "Fashion",
  },
  {
    id: 37,
    productName: "Digital Watch",
    description: "Digital watch with various useful features and stylish design.",
    price: 49.99,
    category: "Electronics",
  },
  {
    id: 38,
    productName: "Handbag",
    description: "Fashionable handbag for carrying your essentials with style.",
    price: 79.99,
    category: "Fashion",
  },
  {
    id: 39,
    productName: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with powerful sound and long battery life.",
    price: 59.99,
    category: "Electronics",
  },
  {
    id: 40,
    productName: "Scarf",
    description: "Warm and stylish scarf for a fashionable winter look.",
    price: 24.99,
    category: "Fashion",
  },
  {
    id: 41,
    productName: "Desktop Computer",
    description: "High-performance desktop computer for all your computing needs.",
    price: 1299.99,
    category: "Electronics",
  },
  {
    id: 42,
    productName: "Blouse",
    description: "Elegant blouse for a sophisticated and stylish look.",
    price: 49.99,
    category: "Fashion",
  },
  {
    id: 43,
    productName: "Wireless Keyboard",
    description: "Wireless keyboard for comfortable and convenient typing experience.",
    price: 39.99,
    category: "Electronics",
  },
  {
    id: 44,
    productName: "Shorts",
    description: "Stylish shorts for a cool and casual summer outfit.",
    price: 29.99,
    category: "Fashion",
  },
  {
    id: 45,
    productName: "Smart Home Security Camera",
    description: "Wireless security camera with advanced features for home surveillance.",
    price: 149.99,
    category: "Electronics",
  },
  {
    id: 46,
    productName: "Sweatshirt",
    description: "Cozy and comfortable sweatshirt for a laid-back and trendy look.",
    price: 39.99,
    category: "Fashion",
  },
  {
    id: 47,
    productName: "Wireless Charger",
    description: "Fast and convenient wireless charger for your compatible devices.",
    price: 29.99,
    category: "Electronics",
  },
  {
    id: 48,
    productName: "Hat",
    description: "Stylish hat for adding a fashionable touch to your outfits.",
    price: 19.99,
    category: "Fashion",
  },
  {
    id: 49,
    productName: "Wireless Router",
    description: "High-speed wireless router for reliable internet connectivity.",
    price: 79.99,
    category: "Electronics",
  },
  {
    id: 50,
    productName: "Belt",
    description: "Classic and versatile belt for completing your outfits.",
    price: 24.99,
    category: "Fashion",
  },

];


function App() {
  // const [cartItemList, setcartItemList] = useState([]);

  

  // adds the product to the state list cartItemList which contains the list of items in the cart
  // function addToCartHandler(productInfo) {
  //   setcartItemList(prevState => [
  //     ...prevState, productInfo
  //   ])
  //   console.log("Your list state length is: ", cartItemList.length)
  //   console.log(cartItemList)
  // }

  // function displayCartItems() {

  // }
  

  return (
    <CartProvider>
      {/* <Nav numberOfCartItems={cartItemList.length} showCartItems={cartItemList} /> */}
      <Nav />
      {/* <Card addToCartHandler={addToCartHandler} products={TEMP_PRODUCT_DATA} /> */}
      <Card  products={TEMP_PRODUCT_DATA} />
    </CartProvider>
  );
}

export default App;
