//  all the code snippets stored in the file is to be used in the app.js file to make use of the todo app. The Inout.js and Output.js collectively serves as the elements that take the user inout and displays the list of items in the todo list
// The application further allows the users to delete the items on theor todo list by clicking on it. app.js handles that function as well.

function ToDoApp() {
    const [data, setData] = useState([]);

    // adds the user input to the existing list of user input which is stored as a state data
    function dataHandler(word) {
        setData((prevData) => [...prevData, word]);
        console.log("Handle data " + data);
    }

    //function that deletes the data on click  
    function deleteData(dataToDelete) {
        console.log(dataToDelete + " the data stored as to be deleted");
        const newList = data.filter((item) => item !== dataToDelete);
        setData(newList);
        console.log("Yes this data will be removed");
        console.log("The data to be deleted is " + newList);
    }

    useEffect(() => {
        console.log(data); // Verify if the data state is updated correctly
        // const apiData = fetch('https://fakestoreapi.com/products')
        //         .then(res=>res.json())
        //         .then(json=>console.log(json));
        // console.log(apiData)

    }, [data]);

    return (
        <>
            <Input  dataHandler = {dataHandler} />
      <Output data = {data} deleteData={deleteData}/>
        </>
    )
}