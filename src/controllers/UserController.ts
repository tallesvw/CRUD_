import { Request, Response, json } from 'express';
import { UserModel } from '../database/models/UserModel';
import { Model } from 'sequelize';


class UserController {
    async findAll(req: Request, res: Response) {
        const users = await UserModel.findAll();
        return users.length > 0
        ? res.status(200).json(users)
        : res.status(204).json();
    }
    async findOne(req: Request, res: Response) {
        const { userId } = req.params;
        const user = await UserModel.findOne({
            where:{
                id: userId,
            },
        });
        return user ? res.status(200).json(user) 
                    : res.status(204).send();
    };
    async create(req: Request, res: Response)  {

        const { nome, telefone, email, cep, rua, bairro  } = req.body;
        const user = await UserModel.create({
            nome,
            telefone,
            email,
            cep,
            rua,
            bairro
        });
        
     const error = []

        if (!req.body.nome || !req.body.telefone  || !req.body.email ){
            return res.status(200).json({
                message: "Criado com Sucesso",
            })
            //console.log("Criado com Sucesso")
        } else{
            return res.status(500).json({
                message: error,
            });
        }
    }
    async update(req: Request, res: Response) {
        const { userId } = req.params;
        await UserModel.update(req.body, { where: { id: userId } });
        return res.status(204).send();
    }
    async destroy(req: Request, res: Response) {
        const { userId } = req.params;
        await UserModel.destroy({ where: { id: userId } });
        return res.status(204).send();
    }
}


export default new UserController();