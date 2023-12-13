/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverDependenciesToBundle: ['@se360/identityserver-auth-strategy', 'mapbox-gl'],
    ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
    appDirectory: 'app',
    assetsBuildDirectory: 'public/build',
    serverBuildPath: 'build/index.js',
    publicPath: '/build/',
    serverModuleFormat: 'cjs'
};
