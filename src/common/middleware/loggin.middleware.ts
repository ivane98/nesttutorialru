
import { NextFunction, Request, Response } from "express";


export function logger(req: Request, res: Response, next: NextFunction) {

    console.log(`Method: ${req.method}, path: ${req.path}`)
    next()

}