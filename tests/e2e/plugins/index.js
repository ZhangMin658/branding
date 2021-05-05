/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')
const path = require('path')
const fs = require('fs')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    'tests',
    'e2e',
    'config',
    `${file}.json`
  )
  return JSON.parse(fs.readFileSync(pathToConfigFile))
}
module.exports = (on, config) => {
  // accept a configFile value or use development by default
  const file = config.env.configFile || 'development'
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))
  // on('before:browser:launch', (browser, options) => {
  //   const downloadDirectory = path.join(__dirname, '..', 'downloads')
  //   if (browser.family === 'chrome' && browser.name !== 'electron') {
  //     console.log(options)
  //     console.log(browser)
  //     // options.preferences.default.download = {
  //     //   default_directory: downloadDirectory,
  //     // }
  //     return options
  //   }
  //
  //   if (browser.family === 'firefox') {
  //     options.preferences['browser.download.dir'] = downloadDirectory
  //     options.preferences['browser.download.folderList'] = 2
  //     // needed to prevent download prompt for text/csv files.
  //     options.preferences['browser.helperApps.neverAsk.saveToDisk'] = 'text/csv'
  //     return options
  //   }
  // })
  return { ...config, ...getConfigurationByFile(file) }
}
