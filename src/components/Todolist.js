import React, { useState } from "react";

const Todolist = () => {
    const [state, setState] = useState({
        todo: '',
        todolist: [],

        indexToEdit: '',
        valueToEdit: ''
    });

    const { todo, todolist, indexToEdit, valueToEdit } = state;
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name]: value});
    }

    const addTodo = () => {
        const list = todolist;
        list.push(todo);
        setState({...state, todo: '', todolist: list});
    }

    const deleteTodo = (index) => {
        const list = todolist;
        list.splice(index, 1);
        setState({...state, todolist: list});
    }

    const toggleEdit = (index, value) => {
        setState({...state, indexToEdit: index, valueToEdit: value});
    }

    const updateTodoList = () => {
        const list = todolist;
        list[indexToEdit] = valueToEdit;
        setState({...state, todolist: list, indexToEdit: '', valueToEdit: ''});
    }

    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(todolist)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";
        link.click();
    }

    const importData = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setState({...state, todolist: JSON.parse(e.target.result)})
        };
        
        e.target.value = '';
    }

    return (
        <>
            <div className="container">
                <h1>Todolist Page</h1>
                <p>
                    Simple add, edit, delete of data using useState.
                </p>
                
                <div className="main-todolist">
                    <div className="import-form-wrapper">
                        <div>Import JSON file</div>
                        <input type='file' onChange={importData} />
                    </div>

                    <div className="form-wrapper">
                        <input 
                            type='text'
                            name='todo'
                            placeholder='input to do..'
                            value={todo}
                            onChange={handleOnChange} />
                        <button onClick={addTodo}>Add</button>
                    </div>

                    <div className="table">
                        <div className="table-header">
                            <span>To Do</span>
                            <span>Action</span>
                        </div>
                        <div className="table-body">
                            {
                                todolist.length ? 
                                    todolist.map((value, index) => (
                                        <div className="table-row" key={index}>
                                            <div className="table-column">
                                                <span>{value}</span>
                                            </div>
                                            <div className="table-column">
                                                <button onClick={() => toggleEdit(index, value)}>Edit</button>
                                                <button onClick={() => deleteTodo(index)}>Delete</button>
                                            </div>
                                        </div>
                                    ))
                                : <div className="table-row empty">No Records Found</div>
                            }
                        </div>
                    </div>
                        
                    {
                        valueToEdit !== '' ?
                        <div className="form-wrapper">
                            <input 
                                type='text'
                                name='valueToEdit'
                                placeholder='input to do..'
                                value={valueToEdit}
                                onChange={handleOnChange} />
                            <button onClick={updateTodoList}>Save</button>
                        </div>
                        : ''
                    }
                    
                    {
                        todolist.length ?
                            <div className="export-form-wrapper">
                                <button onClick={exportData}>Export</button>
                            </div>
                        : ''
                    }
                    
                </div>
                
            </div>
        </>
    ); 
}


export default Todolist;