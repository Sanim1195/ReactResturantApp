import React, { useEffect, useState } from "react";
import Input from "./Components/Input"
import Output from "./Components/Output";

document.addEventListener()

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


  useEffect(() => {
    console.log(data); // Verify if the data state is updated correctly
  }, [data]);

  return (
    <div className="App">
      <Input  dataHandler = {dataHandler} />
      <Output data = {data} deleteData={deleteData}/>
    </div>
  );
}

export default App;
