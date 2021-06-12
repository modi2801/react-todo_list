import React, {useState} from 'react'

export const AddToDo = (props) => {
    //creating default title and setTitle as blank
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    //on pressing submit button, the following function will run that will add title and todo to the screen
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert ("Title or Description cannot be blank !!!")
        }
        else {
        props.addTodo(title, desc);
        }

    }
    return (

        <div className="container my-3">
            <h3>Add Item</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter title of your ToDo" />
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter the description of your title" rows="3" />
            </div>
            <button type="submit"  className="btn btn-success btn-sm">Add ToDo</button>
            </form>
        </div>
 
    )
}
