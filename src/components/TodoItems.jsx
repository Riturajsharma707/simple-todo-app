
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteItem }) => {

    //sending todo item one to print on the UI.
    return (
        <div className="conatainer item-contener">
            {todoItems.map((item) => (<TodoItem key={item.name} todoName={item.name} todoDate={item.todoItemDate} onDeleteItem={onDeleteItem}></TodoItem>))}

        </div>
    )
}


export default TodoItems;