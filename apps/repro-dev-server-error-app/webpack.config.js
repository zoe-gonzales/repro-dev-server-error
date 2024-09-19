const { composePlugins, withNx, withWeb } = require('@nx/webpack');
const { withReact } = require("@nx/react");

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withWeb(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
