import express from 'express'

import store from './store.routes'
import product from './product.routes'

const routes = express.Router()

routes.use('/stores',store)

routes.use('/products',product)

export default routes