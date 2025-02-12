const babel = require('rollup-plugin-babel')
const { terser } = require('rollup-plugin-terser')

module.exports = (config) => {
  const { input, fileName, name } = config
  return {
    input: {
      input,
      external: [
        '@basemachina/dayjs'
      ],
      plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        terser()
      ]
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || '@basemachina/dayjs',
      globals: {
        '@basemachina/dayjs': '@basemachina/dayjs'
      },
      compact: true
    }
  }
}
