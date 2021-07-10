// rollup.config.js fuer Speech-Vue

import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';


// Speech-Angular Version

import * as frameworkVersion from './node_modules/speech-framework/speech-version.json';
import * as vueVersion from './config/speech-vue-version.json';


const speechVersion = frameworkVersion.SPEECH_VERSION_NUMBER + '.' + frameworkVersion.SPEECH_VERSION_BUILD + ' (' + frameworkVersion.SPEECH_VERSION_TYPE + ') vom ' + frameworkVersion.SPEECH_VERSION_DATE;
const serviceVersion = vueVersion.SPEECHVUE_VERSION_NUMBER + '.' + vueVersion.SPEECHVUE_VERSION_BUILD + ' (' + vueVersion.SPEECHVUE_VERSION_TYPE + ') vom ' + vueVersion.SPEECHVUE_VERSION_DATE;


console.log('');
console.log('*******************************************************************');
console.log('**                                                               **');
console.log('**  Speech-Framework VERSION: ' + speechVersion + ' **');
console.log('**        Speech-Vue VERSION: ' + serviceVersion + ' **');
console.log('**                                                               **');
console.log('*******************************************************************');
console.log('');


// Parameter fuer die Erzeugung der speech-vue.js Datei

let readableSourceCode = true; // true, wenn Code lesbar sein soll, false sonst (uglify/minify)
let preambleText =
`/**
 * Speech-Framework
 * 
 * Version: ${frameworkVersion.SPEECH_VERSION_NUMBER}
 * Build:   ${frameworkVersion.SPEECH_VERSION_BUILD}
 * TYPE:    ${frameworkVersion.SPEECH_VERSION_TYPE}
 * Datum:   ${frameworkVersion.SPEECH_VERSION_DATE}
 *
 * Speech-Vue
 *
 * Version: ${vueVersion.SPEECHVUE_VERSION_NUMBER}
 * Build:   ${vueVersion.SPEECHVUE_VERSION_BUILD}
 * TYPE:    ${vueVersion.SPEECHVUE_VERSION_TYPE}
 * Datum:   ${vueVersion.SPEECHVUE_VERSION_DATE}
 * 
 * Autor:   LinguaLogic Team
 * Lizenz:  MIT
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
`;


let typescriptDefaults = { compilerOptions: { declaration: true } };
let typescriptOverride = { compilerOptions: { declaration: false } };


export default {
    input: './src/speech/index.ts',
    output: {
        file: './build/speech-vue.js',
        format: 'umd',
        name: 'speech-vue',
        sourcemap: false,
        globals: {
            'rxjs': 'rxjs',
            'speech-framework': 'speech-framework'
        }

    },
    external: [
        'rxjs',
        'speech-framework'
    ],
    plugins: [
        typescript({
            tsconfigDefaults: typescriptDefaults,
            tsconfig: './src/speech/tsconfig.build.json',
            tsconfigOverride: typescriptOverride
        }),

        json(),

        terser({ output: {
            beautify: readableSourceCode,
            preamble: preambleText,
            quote_style: 3
        }}),

        nodeResolve({
            mainFields: ['module', 'main']
        }),

        commonjs({
            // non-CommonJS modules will be ignored, but you can also
            // specifically include/exclude files
            include: [
                './src/speech/**',
                './node_modules/**'],
            // Default: undefined
            // exclude: ['node_modules/**'], // Default: undefined
            // these values can also be regular expressions
            // include: /node_modules/

            // search for files other than .js files (must already
            // be transpiled by a previous plugin!)
            extensions: ['.js', '.ts'], // Default: [ '.js' ]

            // if true then uses of `global` won't be dealt with by this plugin
            ignoreGlobal: false, // Default: false

            // if false then skip sourceMap generation for CommonJS modules
            sourceMap: false, // Default: true

            // explicitly specify unresolvable named exports
            // (see below for more details)
            /*
            namedExports: {
                'node_modules/rxjs/Observable.js': [ 'Observable' ],
                'node_modules/rxjs/Subject': [ 'Subject' ] }  // Default: undefined
            */
            // sometimes you have to leave require statements
            // unconverted. Pass an array containing the IDs
            // or a `id => boolean` function. Only use this
            // option if you know what you're doing!
            //ignore: [ 'conditional-runtime-dependency' ]
        })
    ],

};
