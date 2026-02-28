import { Router } from "express";
import type { Request, Response } from "express";
import prisma from "../client.js";

export const userRouter = Router();

userRouter.get('/', async (_req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        
        return res.status(200).json({
            message: "Bienvenue dans les routes 'user'",
            users
        });

    } catch (err) {
        return res.status(500).json({
            error: "[ERREUR] Erreur serveur"
        });
    }
});


userRouter.post('/create', async (req: Request, res: Response) => {
  const { lastname, firstname, pseudo, email, password } = req.body;

  try {
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({
        error: "[ERREUR] Email déjà utilisé"
      });
    }

    await prisma.user.create({
      data: {
        lastname,
        firstname,
        pseudo,
        email,
        password
      }
    });

    return res.status(201).json({
      message: "Utilisateur créé avec succès"
    });

  } catch (err) {
    return res.status(500).json({
      error: "[ERREUR] Erreur serveur"
    });
  }
});

userRouter.delete('/delete', async (req: Request, res: Response) => {
    const id = Number(req.query.id);
    
    try {

        if (!id) {
            return res.status(400).json({
                error: "[ERREUR] Id manquant"
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!user) {
            return res.status(400).json({
                error: "[ERREUR] Utilisateur introuvable"
            });
        }

        await prisma.user.delete({
            where: {id}
        })

        return res.status(200).json({
            message: "Utilisateur supprimé avec succès"
        });
    } catch (err) {
        return res.status(500).json({
            error: "[ERREUR] Erreur serveur"
        });
    }

});

