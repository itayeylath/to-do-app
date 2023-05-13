import { useState } from "react";

const ToDoForm = () => {
    const [input, setInput] = useState("");

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Write new ToDo"
                    value={input}
                    name="text"
                />
                <button>Add</button>
            </form>
        </div>
    );
};
export default ToDoForm;