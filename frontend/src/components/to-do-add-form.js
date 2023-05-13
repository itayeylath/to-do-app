import { useState } from "react";

const ToDoAddForm = (props) => {
    const [input, setInput] = useState("");

    const handelChangeAdd = event => {
        setInput(event.target.value)
    }

    const handelSubmitAdd = event => {
        event.preventDefault();

        props.onAddSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        
        setInput("")
    }

    return (
        <div>
            <form onSubmit={handelSubmitAdd}>
                <input
                    type="text"
                    placeholder="Write a new ToDo"
                    value={input}
                    name="text"
                    onChange={handelChangeAdd}
                />
                <button>Add</button>
            </form>
        </div>
    );
};
export default ToDoAddForm;