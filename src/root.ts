import express from 'express'
import {User} from "./entity/User";
const router = express.Router();

router.get('/user',async(_, res) => {

    const user ={
        firstName : "Usuario sem conexão",
        lastName : "Lopes",
        age : 19
    }

    await User.create(user).save()

    const users = await User.find(User);
    res.send(users);
})

export default router;
