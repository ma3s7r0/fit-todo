import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Restclient from './RESTclient'
import TodoTable from './components/TodoTable'
import TodoForm from './components/TodoForm'
import Todo from './entities/Todo'
import { Button, Modal } from 'react-bootstrap'
import './App.scss'

function App(): JSX.Element {
    const [todos, setTodos] = useState<Todo[]>([])
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const todoClient = new Restclient(`http://${process.env.REACT_APP_REST_HOST}`, process.env.REACT_APP_REST_PORT)

    useEffect(() => {
        getTodosAndUpdateState()
    }, [])

    // Get the data from the REST interfacem sorty by id and update the local state
    function getTodosAndUpdateState() {
        todoClient
            .getAllTodos()
            .then((response) => {
                response.data.sort((a: Todo, b: Todo) => (a.id > b.id ? 1 : -1))
                setTodos([...response.data])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function createNewTodo(newTodo: Todo): void {
        todoClient
            .createTodo(newTodo)
            .then(getTodosAndUpdateState)
            .catch((error) => {
                console.log(error)
            })
    }

    function updateTodo(todo: Todo): void {
        todoClient
            .updateTodo(todo)
            .then(getTodosAndUpdateState)
            .catch((error) => {
                console.log(error)
            })
    }

    function deleteTodo(todoId: number): void {
        todoClient
            .deleteTodo(todoId)
            .then(getTodosAndUpdateState)
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="App">
            <header className="App-header"></header>
            <h1>TODO List</h1>
            <Button onClick={handleShow} className="createButton" variant="success">
                Create Todo
            </Button>
            <TodoTable data={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create TODO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TodoForm actionType="Create" submitFunction={createNewTodo} closeModal={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default App
