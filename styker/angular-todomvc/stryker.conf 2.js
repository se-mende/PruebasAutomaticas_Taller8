/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jasmine",
  transpilers: [],
  testFramework: "jasmine",
  coverageAnalysis: "perTest",
  jasmineConfigFile: "spec/support/jasmine.json",
};
