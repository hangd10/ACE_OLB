import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { stub } from './controller'

const router = new Router()

const email = '';
const zipCode = '';

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
  body({ email, zipCode }),
  stub)

export default router