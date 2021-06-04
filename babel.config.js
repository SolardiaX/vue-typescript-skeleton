module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    'lodash',
    [
      'import',
      {
        libraryName: 'Antd',
        libraryDirectory: 'es',
        style: 'css',
      }
    ],
  ],
}
