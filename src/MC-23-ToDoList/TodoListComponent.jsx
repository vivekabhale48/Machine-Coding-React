import { useState } from "react"
import { Modal } from "./Modal";

export const TodoListComponent = () => {

    let todoItemsData = [
        {
            id: 1,
            title: 'List1',
            description: 'Get the Vegetables from the market.',
            status: false
        },
        {
            id: 2,
            title: 'List2',
            description: 'Get the Fruits from the bypass.',
            status: true
        },
    ]

    const [todoItems, setTodoItems] = useState(todoItemsData);
    const [openModal, setOpenModal] = useState(false);

    const [addItem, setAddItem] = useState({
        id: '',
        title: '',
        description: '',
        status: false,
    })


    function onSubmitTask(e) {
        e.preventDefault();
        todoItems.push(addItem);
        setAddItem((prev) => ({
            ...prev,
            title: '',
            description: '',
        }))
        setOpenModal(false);
    }

    function onChangeValue(e) {
        setAddItem({
            ...addItem, id: todoItems.length + 1,
            [e.target.name]: e.target.value,
            status: false,
        })
    }

    function markComplete(e, i) {
        let newArray = todoItems.map((ele) => {
            if(ele.id === (i+1)) {
                return ({...ele, status: true})
            }
            return(ele);
        })
        setTodoItems(newArray);
    }
    function deleteTodo(i) {
        let deletedArray = todoItems.filter((ele) => (i+1) !== ele.id);
        setTodoItems(deletedArray);
    }
    return (
        <div>
            <div>
                <button onClick={() => setOpenModal(true)} type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded text-sm px-4 py-2.5 focus:outline-none">Add Items</button>
            </div>
            <div>
                <Modal openModal={openModal} closeModal={() => setOpenModal(false)} >
                    <h1 className="text-md font-bold">
                        Add details of Task
                    </h1>
                    <form onSubmit={(e) => onSubmitTask(e)} className="mt-5">
                        <input onChange={(e) => onChangeValue(e)} value={addItem.title} name='title' placeholder="Task Title . . . " className="p-1 w-full color-[#ccc] focus:outline-none rounded-lg border border-grey-300 focus:ring-2 focus:ring-blue-500 text-sm" type="text" />
                        <textarea onChange={(e) => onChangeValue(e)} value={addItem.description} name='description' placeholder="Task details . . . " className="p-1 w-full color-[#ccc] focus:outline-none rounded-lg border border-grey-300 focus:ring-2 focus:ring-blue-500 mt-5 text-sm" type="text" />
                        <button type="submit" className="mt-3 p-2 rounded-lg bg-blue-500 w-20 text-white hover:bg-blue-400 hover:translate-y-1 hover:scale-110 hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out">Add</button>
                    </form>
                </Modal>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                marginTop: '20px',
                gap: '15px'
            }}>
                {
                    todoItems.map((ele, i) => (
                        <div style={{boxShadow: 'rgba(0, 0, 0, 0.19) 0px 5px 15px'}} className='bg-[#ccc] p-2' key={i}>
                            <div className="flex justify-between items-center">
                                <h1 className="text-[16px] font-bold">
                                    {ele.title}
                                </h1>
                                <span onClick={() => deleteTodo(i)} className="hover:translate-y-1 hover:scale-150 cursor-pointer transition delay-150 duration-300">
                                    ❌
                                </span>
                            </div>
                            <h2 className="mb-4">
                                {ele.description}
                            </h2>
                            <span style={{
                                backgroundColor: `${ele.status ? '#2bbf05' : '#fb3e3e'}`
                            }}
                            onClick={(e) => markComplete(e,i)}
                            className="cursor-pointer text-white rounded-lg text-[14px] p-1">
                                {ele.status ? 'COMPLETED ✔️' : 'INCOMPLETE ✖️'}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}