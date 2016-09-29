module.exports = {
  dev: {
    appId: 'dev_appid',
  },
  production: {
    appId: 'prod_appid',
  },
}[NODE_ENV || 'dev'];
