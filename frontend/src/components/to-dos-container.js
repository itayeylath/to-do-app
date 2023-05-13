import { useState } from "react";
import ToDoAddForm from "./to-do-add-form";

const ToDosContainer = () => {
    const [todos, setToDosData] = useState([]);

    const addTodo = newToDo => {
        if (!newToDo.text) {
            //console.log("Input Empty!")
            return;
        }
        setToDosData([newToDo, ...todos])
        //console.log("newToDo: ",newToDo)
    };

    return (
        <div>
            <ToDoAddForm onAddSubmit={addTodo} />
        </div>
    );
};
export default ToDosContainer;