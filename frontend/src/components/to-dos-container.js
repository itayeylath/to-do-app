import { useState } from "react";
import ToDoAddForm from "./to-do-add-form";
import ToDo from "./to-do";

const ToDosContainer = () => {
    const [toDosData, setToDosData] = useState([]);

    // useEffect(() => {

    //   }, [toDosData]);

    const addTodo = element => {
        if (!element.text) {
            //console.log("Input Empty!")
            return;
        }
        setToDosData([element, ...toDosData])
        //console.log("newToDo: ", element)
    };

    const deleteTodo = index => {

        let newData = [];

        for (let i = 0; i < toDosData.length; i++) {
            console.log(index)
            if (i !== index) {
                newData.push(toDosData[i]);
            }
        }
        setToDosData(newData);
    };


    return (
        <div>
            <ToDoAddForm onAddSubmit={addTodo} />
            <ToDo toDosData={toDosData} deleteTodo={deleteTodo} />
        </div>
    );
};
export default ToDosContainer;