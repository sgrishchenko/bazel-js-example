import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
    plugins: [
        nodeResolve(),
        commonjs(),
        replace({
            preventAssignment: true,
            values: {
                'process.env.NODE_ENV': JSON.stringify('development'),
                // 'process.env.NODE_ENV': JSON.stringify('production'),
            }
        })
    ]
}
