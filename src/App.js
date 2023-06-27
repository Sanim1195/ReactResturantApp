import React, { useEffect, useState } from "react";
import Input from "./Components/Input"
import Output from "./Components/Output";
import Nav from "./Components/Nav";
import Card from "./Components/shopping/Card";

// document.addEventListener()

function App() {
  const[data,setData] = useState([]);


  function dataHandler(word){
    setData((prevData) => [...prevData, word]);
    console.log("Handle data " + data);
  }

  function deleteData(dataToDelete) {
    console.log(dataToDelete + " the data stored as to be deleted");
    const newList = data.filter((item) => item !== dataToDelete);
    setData(newList);
    console.log("Yes this data will be removed");
    console.log("The data to be deleted is " + newList);
  }

  function addToCartHandler(productInfo){
    console.log(productInfo)
  }

  function displayCartItems(cartItems){
    console.log(cartItems)
  }
  useEffect(() => {
    console.log(data); // Verify if the data state is updated correctly
  }, [data]);

  return (
    <div className="App">
      <Nav/>
      <Input  dataHandler = {dataHandler} />
      <Output data = {data} deleteData={deleteData}/>
      <Card addToCartHandler= {addToCartHandler}  />
    </div>
  );
}

export default App;
