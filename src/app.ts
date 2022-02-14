import { libVar, libLog, libClass } from "./lib";

//sourcemap will show this coming from app.ts : 4
console.log(libVar);

//call library log to demonstrate sourcemap wokring
libLog("Hi from app.ts, via the library!");

let instance = new libClass('Hello from my libClass instance!');
console.log(instance.getProp());

