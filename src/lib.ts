export let libVar:string = "Hello from the library";

export function libLog(logText: string):void{
    //sourcemap will show this log came from lib.ts : 5    
    console.log(logText);
}

/**
 * This is an example of a class with a property. 
 * Also an example of Mermaid diagrams working in Typedoc
 * ```mermaid
 * classDiagram
    class libClass
    libClass : -String owner
    libClass : +getProp()
    libClass : +setProp(newValue~string~)
 * ```
 */
export class libClass{
    private prop: string;
    constructor(text: string){
        this.prop = text;
        console.log('libClass instance created. Initilaized with prop = ' + this.prop);
    }
    /**
     * A basic getter example.
     * @returns the prop value
     */
    public getProp(): string{
        return this.prop;
    }
    /**
     * A basic setter example.
     * @param newVal the value to set
     * @returns the newly set property value
     */
    public setProp(newVal: string): string{
        this.prop = newVal;
        return this.prop;
    }
}