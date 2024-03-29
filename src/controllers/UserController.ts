import { Request, Response, json } from 'express';
import { UserModel } from '../database/models/UserModel';
import { AdressModel } from '../database/models/AdressModel';


export class UserController {
    async create(req: Request, res: Response,) {

        const { nome, telefone, email, enderecos } = req.body;

        if (!req.body.nome || !req.body.telefone || !req.body.email) {

            res.status(500).json({
                message: "Os campos Nome, Telefone e Email precisam estar preenchidos.",
            });
        }
        const user = await UserModel.create({
            nome,
            telefone,
            email
        });

        if (user['id']) {
            var userId = user['id']
            for (let endereco of enderecos) {
                endereco.userId = userId;

                await AdressModel.create(endereco)
            }

            AdressModel.create
        }
        res.status(200).json({
            message: "Usuário Criado com Sucesso.",
        });
    }

    async findAll(req: Request, res: Response) {
        const users = await UserModel.findAll();
        return users.length > 0
            ? res.status(200).json(users)
            : res.status(204).json();
    }
    
    async findOne(req: Request, res: Response) {
        const { userId } = req.params;
        const user = await UserModel.findOne({
            where: {
                id: userId
            },
            include: [
                "address"
            ]
        });
        return user ? res.status(200).json(user)
            : res.status(204).send();
    };
    
    async update(req: Request, res: Response) {
        const { userId } = req.params;
        await UserModel.update(req.body, {
            where: { id: userId }
        })
        const { AdressModel } = req.body;

        try {
            const user = await AdressModel.findByPk(userId);
            if (!user) {
                return res.status(404).send('Usuário não encontrado');
            }
            await AdressModel.map(async (AdressModel: any) => {
                if (AdressModel.id) {
                    await AdressModel.update(AdressModel, {
                        where: { id: AdressModel.id },
                        include: ["adress"]
                    });  
                }
            });
        } catch (err) {
            console.error(err);
            return res.status(500).send('Endereço não atualizado');
        }

        return res.status(204).json({ message: "Usuário Editado com Sucesso." });
    };

    async destroy (req: Request, res: Response) {
            const { id } = req.params;
          await UserModel.destroy({ where: { id: id } });
             await AdressModel.destroy({ where: { userId :id }});

            return res.json({
                message: "Usuário Deletado Com Sucesso."
            });
        }
    };
