// Imports
import Router from 'koa-router'
import dataRoutes from './data'

// Init router
const router = new Router()

// @desc /api/films routes
router.use('/api/data', dataRoutes())

export function routes () { return router.routes() }
export function allowedMethods () { return router.allowedMethods() }
