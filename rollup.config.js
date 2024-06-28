import alias from '@rollup/plugin-alias';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js', // Ajusta esto según el punto de entrada de tu proyecto
    output: {
        file: 'public/bundle.js', // Ajusta esto según tu configuración de salida
        format: 'iife', // Puedes cambiar esto según tu necesidad (e.g., 'cjs', 'es')
    },
    plugins: [
        resolve(),
        commonjs(),
        alias({
            entries: [
                { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
                { find: '@icons', replacement: path.resolve(__dirname, 'src/icons') }
            ]
        }),
        terser()
    ]
};