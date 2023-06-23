import "./Output.css";
import {v4 as uuidv4} from "uuid";


function Output(props) {

    const itemClickedHandler = (id) => {
        console.log(id);
        props.deleteData(id);
    }

    const data = props.data;
    const dataList = data.map((item) => {
        // generating a unique Id
        const id = uuidv4();
        return (
           
                <li
                    key={id}
                    onClick={() =>{
                        itemClickedHandler(item);
                    } }
                >
                    {item}
                </li>

            
        )
    }

    )


    return (
        <div className="outputContainer">
            <ul>
                {dataList}
            </ul>
        </div>
    )
}

export default Output;