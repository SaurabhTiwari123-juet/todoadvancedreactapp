export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {
 

const handleDelete = (id) => {
    const updateTasklist = tasklist.filter(task  => task.id !== id);
    setTasklist(updateTasklist);
}

const handleEdit = (id) => {
    const seletedTask = tasklist.find(task => task.id ===id)
    setTask(seletedTask);
}




    return (
      <section className="showTask">
<div className="head">
    <div>
        <span className="title">Todo</span>
        <span className="count">{tasklist.length}</span>
    </div>
    <button className="clearAll" onClick={()=>{setTasklist([])}}>Clear All</button>
</div>
<ul>
    {tasklist.map((task)  =>(<li key={task.id}>
        <p>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
        </p>
        <i onClick={()=> handleEdit(task.id)}   className="bi bi-pencil-square"></i>
        <i onClick={()=> handleDelete(task.id)}    className="bi bi-trash"></i>
    </li>
    ))
}
    
</ul>
</section>
    )
  }
  