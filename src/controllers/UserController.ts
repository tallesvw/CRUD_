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

        if (!req.body.nome || !req.body.telefone || !req.body.email) {

                res.status(500).json({
                message: "Os campos Nome, Telefone e Email precisam estar preenchidos.",
            });
        } 
        const user = await UserModel.create({
            nome,
            telefone,
            email,
            cep,
            rua,
            bairro
        });

            res.status(200).json({
                
                message: "Usuário Criado com Sucesso.",
            });          
    }
    async update(req: Request, res: Response) {
        const { userId } = req.params;
        await UserModel.update(req.body, { where: { id: userId } });
        return res.status(204).json({
            message: "Usuário Editado com Sucesso.",
        });
    }
    async destroy(req: Request, res: Response) {
        const { userId } = req.params;
        await UserModel.destroy({ where: { id: userId } });
        return res.json({
            message: "Usuário Deletado Com Sucesso."
        });
    }
}


export default new UserController();

function then(arg0: (user: any) => Response<any, Record<string, any>>) {
    throw new Error('Function not implemented.');
}


export { UserController };




const telefone = document.querySelector('telefone')
const email = document.querySelector('email')
const cep = document.querySelector('cep')