/*
  Configurations needed for building and compiling the project
*/
const buildName = 'build';
const buildDir = `${__dirname}/${buildName}`;
const sourceDir = `${__dirname}/src`;

module.exports = {
  buildName: buildName,
  buildDir: buildDir,
  buildVendorDir: `${buildDir}/vendor`,
  sourceDir: sourceDir,
  sourceJSDir: `${sourceDir}/js`,
  sourcePublicDir: `${sourceDir}/public`
};