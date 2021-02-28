import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { Todo } from '../entity/Todo'
import { validate } from 'class-validator'

export class TodoController {
    //retrieves all todos
    static async getAll(req: Request, res: Response, next: NextFunction) {
        const todoRepository = getRepository(Todo)

        try {
            const result = await todoRepository.find()
            return res.send(result)
        } catch (error) {
            next(error)
        }
    }

    //creates a new todo
    static async create(req: Request, res: Response, next: NextFunction) {
        const todoRepository = getRepository(Todo)
        try {
            const result = await todoRepository.insert(req.body)
            return res.send(result)
        } catch (error) {
            next(error)
        }
    }
    //find a todo by an id given as URL Parameter
    static async findById(req: Request, res: Response, next: NextFunction) {
        const todoRepository = getRepository(Todo)
        try {
            const result = await todoRepository.findOneOrFail(req.params.id)
            return res.send(result)
        } catch (error) {
            next(error)
        }
    }

    //update a todo, found by id given as URL parameter
    static async update(req: Request, res: Response, next: NextFunction) {
        const todoRepository = getRepository(Todo)
        const { title, note, duedate } = req.body
        let todo

        try {
            //try to find user in database
            todo = await todoRepository.findOneOrFail(req.params.id)
        } catch (error) {
            //send 404 if not found
            res.status(404).send('Todo not found')
            return
        }

        todo.title = title
        todo.note = note
        todo.duedate = duedate
        //validate inputs
        const errors = await validate(todo)
        if (errors.length > 0) {
            res.status(400).send(errors)
            return
        }

        try {
            const result = await todoRepository.save(todo)
            return res.send(result)
        } catch (error) {
            next(error)
        }
    }
    // delete a user by an id given as URL Parameter
    static async delete(req: Request, resp: Response, next: NextFunction) {
        const todoRepository = getRepository(Todo)
        let todoToRemove = await todoRepository.findOneOrFail(req.params.id)
        await todoRepository.remove(todoToRemove)
        return resp.send(`Deleted Todo with id=${req.params.id}`)
    }
}

export default TodoController
