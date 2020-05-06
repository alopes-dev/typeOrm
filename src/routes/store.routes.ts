import { getRepository } from 'typeorm';

import express from 'express'

import * as responseFormat from '../utils/responseFormat'

import Store from '../entity/Store';

const routes = express.Router();

routes.get('/',async (_, res)=>{
    const storeRepository = getRepository(Store)
    const stores = await storeRepository.find({relations:["products"]})

    return res.json(responseFormat.success({message:"Lojas carregadas com sucesso!", data:stores}))
})

routes.get('/:id',async (req, res)=>{
    const storeRepository = getRepository(Store)
    const store = await storeRepository.findOne({where:{id: req.params.id}});

    return res.json(responseFormat.success({message:"Loja carregada com sucesso!", data:store}))
})

routes.delete('/:id',async (req, res)=>{
    const storeRepository = getRepository(Store)
    const store = await storeRepository.findOne({where:{id: req.params.id}});

    await storeRepository.remove(store);

    return res.json(responseFormat.success({message:"Loja eliminada com sucesso!", data:store}))
})

routes.post('/',async (req, res)=>{
    const storeRepository = getRepository(Store)

    const store =  storeRepository.create(req.body);

    await storeRepository.save(store)

    return res.json(responseFormat.success({message:"Loja inserida com sucesso!", data:store}))
})

routes.put('/:id',async (req, res)=>{
    const storeRepository = getRepository(Store)
    let store = await storeRepository.findOne({where:{id: req.params.id}});
    store = {...store,...req.body}

    await storeRepository.save(store);

    return res.json(responseFormat.success({message:"Loja atualizada com sucesso!", data:store}))
})

export default routes;