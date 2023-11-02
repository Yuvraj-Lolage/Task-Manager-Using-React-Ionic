
interface ToDoItemProps{
    title:string;
}

const ToDoItem : React.FC<ToDoItemProps> = ({title}) =>{
    return (
        <div className="todo-item">
            <h3>{title}</h3>
        </div>

    );
};

export default ToDoItem;