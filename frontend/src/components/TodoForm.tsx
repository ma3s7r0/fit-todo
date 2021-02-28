import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import Todo from '../entities/Todo'

/**
 * Interface defining the props passed to the TodoForm
 */
interface TodoFormProps {
    submitFunction: (todo: Todo) => void
    payload?: Todo
    actionType: string
    closeModal?: () => void
}

/**
 *
 * @param props
 */
function TodoForm(props: TodoFormProps): JSX.Element {
    // registers and validates the requirements of the textfields
    const { register, errors, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: { ...props.payload },
    })

    // submits form and resets all field
    const onSubmit = (data: Todo) => {
        const todo = new Todo()
        todo.title = data.title
        todo.duedate = data.duedate
        todo.note = data.note
        todo.id = props.payload !== undefined ? props.payload.id : -1
        props.submitFunction(todo)
        if (props.closeModal !== undefined) props.closeModal()
    }

    return (
        <div>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formTitle">
                    <Form.Label>TODO</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter TODO-title"
                        ref={register({ required: true, minLength: 1 })}
                        name="title"
                    />
                    {errors.title && <p className="fieldError">Please proivde a title.</p>}
                </Form.Group>
                <Form.Group controlId="formDueDate">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={new Date().toLocaleDateString()}
                        ref={register({ required: true, minLength: 8, maxLength: 10 })}
                        name="duedate"
                    />
                    {errors.duedate && <p className="fieldError">Please proivde a Due Date with 6-8 characters.</p>}
                </Form.Group>
                <Form.Group controlId="formNote">
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" name="note" ref={register()} rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {props.actionType}
                </Button>
            </Form>
        </div>
    )
}

export default TodoForm
