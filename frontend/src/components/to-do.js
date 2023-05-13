import { useState } from "react";

const ToDo = (props) => {

    return (
        <div>
            {
                props.toDosData.map((element, index) => {

                    return (
                        <div key={element.id}>
                            {element.text}
                            <button onClick={() => { props.deleteTodo(index) }}>Delete</button>
                        </div>
                    )
                })
            }

        </div>
    );
};
export default ToDo;