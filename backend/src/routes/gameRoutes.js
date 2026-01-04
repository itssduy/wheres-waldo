import express from 'express'

import { prisma } from '../lib/prisma.js';

const gameRouter = express.Router();

gameRouter.post('/:mapId', async(req, res)=>{
    try {
        const mapId = req.params.mapId;
        const {name, x, y} = req.body;
        const person = await prisma.person.findFirst({
            where: {
                mapid: mapId,
                name: name,
            }
        });
        if(person){
            const radius = 3
            if(Math.abs(x - person.x) <= radius && Math.abs(y - person.y) <= radius){
                return res.json({found: true, person});
            }
        }

        return res.json({found: false, msg: "not found"});

        
    } catch (err){
        console.log(err);
        return res.status(400).json({msg: "error"});
    }
    
});

gameRouter.post('/:mapId/add', async (req, res)=>{
    try {
        const mapId = req.params.mapId
        const {name, x, y} = req.body

        const person = await prisma.person.create({
            data: {
                mapid: mapId,
                name: name,
                x: x,
                y: y,
            }
        });

        return res.json(person)
    } catch (err){
        console.log(err);
        res.status(400).json({msg: "error"});
    }
});

gameRouter.delete('/:mapId', (req, res)=>{
    
});


export default gameRouter