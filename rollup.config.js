import { type } from 'os';
import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';
//import {uglify} from 'rollup-plugin-uglify';

export default [
    {
        input: 'src/app.ts',
        externals: [], //any external scripts you'll have a cdn script tag for, eg 'marked'
        output: {
            name: "starter",
            file: pkg.browser,
            format: 'umd', //'cjs' and 'es' are also options
            sourcemap: true,
            globals: {
                //also put any external scripts here, they will be assumed as global variables, like: sourceNodeModule: "globalVarName"
            }
        },
        plugins:[
            resolve(),
            // commonjs(),
            typescript(),
            //uglify()
        ]
    }
]