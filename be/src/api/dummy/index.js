import { Router } from 'express'
import { middleware as query } from 'querymen'
import { create, index, show } from './controller'

const router = new Router()

/**
 * @api {post} /dummies Create dummy
 * @apiName CreateDummy
 * @apiGroup Dummy
 * @apiSuccess {Object} dummy Dummy's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dummy not found.
 */
router.post('/',
  create)

/**
 * @api {get} /dummies Retrieve dummies
 * @apiName RetrieveDummies
 * @apiGroup Dummy
 * @apiUse listParams
 * @apiSuccess {Object[]} dummies List of dummies.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /dummies/:id Retrieve dummy
 * @apiName RetrieveDummy
 * @apiGroup Dummy
 * @apiSuccess {Object} dummy Dummy's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Dummy not found.
 */
router.get('/:id',
  show)

export default router
