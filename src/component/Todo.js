import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Todo.css'

const Todo = () => {
    const [itemText, setItemText] = useState('');
    const [listItems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updateItemText, setUpdateItemText] = useState('');
    //add new todo item to database
    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5500/api/item', { item: itemText })
            /*    console.log(res); */
            setListItems(prev => [...prev, res.data])
            setItemText('')
        }
        catch (error) {
            console.log(error);
        }
    }

    //create function to fetch all todo items from database by using useEffect hook.

    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get('http://localhost:5500/api/items')
                setListItems(res.data);
                console.log('render')
            } catch (error) {
                console.log(error)
            }
        }
        getItemsList()
    }, []);


    //delete item when click on delete item
    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
            const newListItems = listItems.filter(item => item._id !== id)
            setListItems(newListItems);
            console.log(res.data);
        }
        catch (error) {
            console.log(error)
        }
    }


    //update item
    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, { item: updateItemText })

            const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating)
            const updatedItem = listItems[updatedItemIndex].item = updateItemText;
            setUpdateItemText('');
            setIsUpdating('');
            console.log(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    //before updating item we need to show input field
    const renderUpdateForm = () => (
        <form className='update-form' onSubmit={(e) => { updateItem(e) }} >
            <input className='update-new-input' type="text" placeholder='New Item' onChange={e => { setUpdateItemText(e.target.value) }} value={updateItemText} />
            <button class="btn btn-success" type='Submit'>Update</button>

            {/* <button class="btn btn-success">Success</button> */}
        </form>
    )


    return (

        <div>
            <div className="">
                <h1 className='heding'>Todo List</h1>
            </div>
            <form className='form' onSubmit={e => addItem(e)}>
                <input type="text" placeholder='Add Todo Item' onChange={e => { setItemText(e.target.value) }} value={itemText} />
                <button className='font-semibold' type='submit'>Add</button>
            </form>
            <div className="todo-listItems">
                {
                    listItems.map(item => {
                        return (
                            <div className="todo-item" key={item._id}>
                                {
                                    isUpdating === item._id
                                        ? renderUpdateForm()
                                        : <>
                                            <p className='item-content'>{item.item}</p>
                                            <button className='update-item' onClick={() => { setIsUpdating(item._id) }}>Update</button>
                                            <button className='delete-item' onClick={() => { deleteItem(item._id) }}>Delete</button>
                                        </>
                                }

                            </div>
                        )
                    })
                }




            </div>

        </div>
    );
};

export default Todo;