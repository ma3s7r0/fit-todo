import axios, { AxiosResponse } from 'axios'
import Todo from './entities/Todo'

class Restclient {
    private readonly baseURL
    private readonly port

    constructor(baseURL: string, port: string | undefined) {
        this.baseURL = baseURL
        this.port = port
    }

    getAllTodos(): Promise<any> {
        return axios.get(`${this.baseURL}:${this.port}/todos`)
    }

    createTodo(newTodo: Todo): Promise<AxiosResponse<any>> {
        return axios.post(`${this.baseURL}:${this.port}/todos`, newTodo)
    }

    updateTodo(todo: Todo): Promise<AxiosResponse<any>> {
        return axios.put(`${this.baseURL}:${this.port}/todos/${todo.id}`, todo)
    }

    deleteTodo(todoId: number): Promise<AxiosResponse<any>> {
        return axios.delete(`${this.baseURL}:${this.port}/todos/${todoId}`)
    }
}

export default Restclient
