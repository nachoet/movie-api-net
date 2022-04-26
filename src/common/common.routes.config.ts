import express from "express";

// implement abstraction to have similar functionality between classes
export abstract class CommonRoutesConfig {
    app: express.Application
    name: string

constructor(app: express.Application, name:string){
    this.app = app;
    this.name = name;
    //calling abstract function forces any class extending CommonRoutesConfig to 
    // provide an implementation matching that signature
    this.configureRoutes(); 
}

getName(){
    return this.name;
}
abstract configureRoutes():express.Application;
}
