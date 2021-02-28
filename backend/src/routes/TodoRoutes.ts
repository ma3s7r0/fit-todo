import { Router } from 'express'
import TodoController from '../controller/TodoController'

const router = Router()

// Get all users
router.get('/', TodoController.getAll)

// Get one user
router.get('/:id([0-9]+)', TodoController.findById)

// Create a new user
router.post('/', TodoController.create)

// Edit one user
router.put('/:id([0-9]+)', TodoController.update)

// Delete one user
router.delete('/:id([0-9]+)', TodoController.delete)

export default router
