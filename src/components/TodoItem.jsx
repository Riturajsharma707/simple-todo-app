import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

function TodoItem({ todoName, todoDate, onDeleteItem }) {

    //Handling complete an uncompleted task
    const [checked, setChecked] = useState(false);
    const handleChecked = (event) => {
        console.log(event)
        setChecked(true);

        if (checked === true) {
            setChecked(false)
        }


    }


    return (
        // Repaint the todo List
        <div className="row kg-row mx-5">
            <div className="col-5">
                {todoName}
            </div>
            <div className="col-3">
                {todoDate}
            </div>

            <div className="col-4">
                <button type='button' className="btn mx-3" onClick={(event) => handleChecked(event)}>{checked ? <FaCircleCheck /> : <FaRegCircle />}</button>
                <button type="button" className='btn btn-danger kg-button' onClick={() => (onDeleteItem(todoName))}><RiDeleteBinLine /> </button>

            </div>
        </div>
    )
}


export default TodoItem;