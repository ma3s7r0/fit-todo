import Todo from '../entities/Todo'
import Table from 'react-bootstrap/Table'
import { Button, Dropdown, Modal } from 'react-bootstrap'
import { useState } from 'react'
import TodoForm from './TodoForm'

/**
 * Creates a Table out of the given data with the edit, delete and view notes actions (calling functions passed via props)
 * @param props
 */
function TodoTable(props: {
    data: Todo[]
    updateTodo: (todo: Todo) => void
    deleteTodo: (id: number) => void
}): JSX.Element {
    const [selectedTodo, setSelectedTodo] = useState(new Todo())

    // State to save the status of the Modal for the view note dialog (true visible, false invisible)
    const [showNoteModal, setShowNoteModal] = useState(false)
    const handleNoteModalClose = () => setShowNoteModal(false)
    const handleNoteModalShow = (todo: Todo) => {
        setSelectedTodo(todo)
        setShowNoteModal(true)
    }

    // State to save the status of Modal for the update dialog (true visible, false invisible)
    const [showUpdateModal, setShowUpdateModal] = useState(false)
    const handleUpdateModalClose = () => setShowUpdateModal(false)
    const handleUpdateModalShow = (todo: Todo) => {
        setSelectedTodo(todo)
        setShowUpdateModal(true)
    }

    return (
        <>
            <Table responsive hover size="sm">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>ID</th>
                        <th>TODO</th>
                        <th>Due Date</th>
                        <th className="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/*Create a line for every entry in the dabase*/}
                    {props.data.map((todo) => (
                        <tr key={todo.id}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.duedate}</td>
                            <td align="right">
                                {/*Actions*/}
                                <Dropdown>
                                    <Dropdown.Toggle split={false} variant="none" className="actionDropDownToggle">
                                        ...
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleNoteModalShow(todo)}>
                                            View Note
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleUpdateModalShow(todo)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => props.deleteTodo(todo.id)} id="DropDownDelete">
                                            Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/*Modal to view notes*/}
            <Modal show={showNoteModal} onHide={handleNoteModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedTodo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedTodo.note}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleNoteModalClose} className="modalCloseBtn">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Modal to edit todos*/}
            <Modal show={showUpdateModal} onHide={handleUpdateModalClose}>
                <Modal.Header closeButton>
                    {/*shouldn't it better be "Update TODO"*/}
                    <Modal.Title>{selectedTodo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TodoForm
                        submitFunction={props.updateTodo}
                        actionType="Update"
                        payload={selectedTodo}
                        closeModal={handleUpdateModalClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TodoTable
