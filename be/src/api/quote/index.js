import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Quote, { schema } from './model'

const router = new Router()
const { email, zipCode } = schema.tree

/**
 * @api {post} /quotes Create quote
 * @apiName CreateQuote
 * @apiGroup Quote
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam email Quote's email.
 * @apiParam zipCode Quote's zipCode.
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ email, zipCode }),
  create)

/**
 * @api {get} /quotes Retrieve quotes
 * @apiName RetrieveQuotes
 * @apiGroup Quote
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of quotes.
 * @apiSuccess {Object[]} rows List of quotes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 master access only.
 */
router.get('/',
  master(),
  query(),
  index)

/**
 * @api {get} /quotes/:id Retrieve quote
 * @apiName RetrieveQuote
 * @apiGroup Quote
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /quotes/:id Update quote
 * @apiName UpdateQuote
 * @apiGroup Quote
 * @apiParam email Quote's email.
 * @apiParam zipCode Quote's zipCode.
 * @apiSuccess {Object} quote Quote's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Quote not found.
 */
router.put('/:id',
  body({ email, zipCode }),
  update)

/**
 * @api {delete} /quotes/:id Delete quote
 * @apiName DeleteQuote
 * @apiGroup Quote
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Quote not found.
 */
router.delete('/:id',
  destroy)

export default router
