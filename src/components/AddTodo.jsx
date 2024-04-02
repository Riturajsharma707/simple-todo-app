import { useRef } from 'react'
import { RiAddCircleLine } from "react-icons/ri";

function AddTodo({ onNewItem }) {
    const itemNameElement = useRef();
    const itemDateElement = useRef();

    //Adding New todo's
    const handleNewTodo = (event) => {
        event.preventDefault();
        if (itemNameElement.current.value == "" && itemDateElement.current.value == "") {
            window.alert("Please entered todo's!");

        }
        else {

            const itemDate = itemDateElement.current.value;
            const itemName = itemNameElement.current.value;
            onNewItem(itemName, itemDate);
            itemNameElement.current.value = ""
            itemDateElement.current.value = ""
        }
    }


    //Getting input(todo's) from the user
    return (
        <form onSubmit={handleNewTodo} className='row kg-row'>
            <div className='col-6 px-4'>
                <input type='text' ref={itemNameElement} placeholder='Enter todo here' />
            </div>
            <div className='col-4 px-3'>
                <input type='date' ref={itemDateElement} />
            </div>
            <div className='col-2'>
                <button type='submit' className='btn btn-success kg-button'><RiAddCircleLine /></button>
            </div>
        </form>
    )


}


export default AddTodo;