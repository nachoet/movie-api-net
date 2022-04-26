import express from "express";
import {CommonRoutesConfig} from "../common/common.routes.config";


export class UsersRoutes extends CommonRoutesConfig{

    constructor(app: express.Application){
        super(app, 'UsersRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route('/users')
        .get((req:express.Request, res: express.Response) => {
            res.status(200).send('List of ssers')
        })
        .post((req: express.Request, res: express.Response) => {
            res.status(200).send('Post to users')
        })

        this.app.route('/users/:userId/')
        .all((req:express.Request, res: express.Response, next: express.NextFunction) => {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })

        .get((req:express.Request, res: express.Response)=>{
            res.status(200).send(`GET requested id ${req.params.userId}`)
        })
        .put((req:express.Request, res: express.Response)=>{
            res.status(200).send(`PUT request with id ${req.params.userId}`)
        })
        .patch((req:express.Request, res: express.Response)=> {
            res.status(200).send(`PATCH request with id ${req.params.userId}`)
        })
        .delete((req:express.Request, res: express.Response)=>{
            res.status(200).send(`DELETE request with id ${req.params.userId}`)
        })

        return this.app
    }
}

