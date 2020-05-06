import { getRepository } from 'typeorm';

import express from 'express'

import * as responseFormat from '../utils/responseFormat'

import Product from '../entity/Product';

const routes = express.Router();

routes.get('/',async (_, res)=>{
    const ProductRepository = getRepository(Product)
    const products = await ProductRepository.find({relations:["store"]})

    return res.json(responseFormat.success({message:"Produtos carregadas com sucesso!", data:products}))
})

routes.get('/:id',async (req, res)=>{
    const ProductRepository = getRepository(Product)
    const product = await ProductRepository.findOne({where:{id: req.params.id}});

    return res.json(responseFormat.success({message:"Produto carregada com sucesso!", data:product}))
})

routes.delete('/:id',async (req, res)=>{
    const ProductRepository = getRepository(Product)
    const product = await ProductRepository.findOne({where:{id: req.params.id}});

    await ProductRepository.remove(product);

    return res.json(responseFormat.success({message:"Produto eliminada com sucesso!", data:product}))
})

routes.post('/',async (req, res)=>{
    const ProductRepository = getRepository(Product)

    const product =  ProductRepository.create(req.body);

    await ProductRepository.save(product)

    return res.json(responseFormat.success({message:"Produto inserida com sucesso!", data:product}))
})

routes.put('/:id',async (req, res)=>{
    const ProductRepository = getRepository(Product)
    let product = await ProductRepository.findOne({where:{id: req.params.id}});
    product = {...Product,...req.body}

    await ProductRepository.save(product);

    return res.json(responseFormat.success({message:"Produto atualizada com sucesso!", data:product}))
})

export default routes;