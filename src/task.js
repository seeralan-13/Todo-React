const Task = (props) =>{
    return (
        <div  className="task" style ={{backgroundColor: props.completed? '#b9f8f4ff' :'#eee'}}>
            <h1>{props.taskName}</h1>
            <div className="buttons">
                <button onClick={()=>props.completeTask(props.id)}>complete</button>
                <button onClick={()=>props.deleteTask(props.id)}>X</button>
            </div>

        </div>
    )
}

export default Task;