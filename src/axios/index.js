let baseUrl = "";
let env = process.env.VUE_APP_TITLE === 'alpha' ? 'alpha' : 'production';
switch (env) {
  case 'production':
    baseUrl = "http://localhost:4000"
    break;
  case 'alpha':
    // baseUrl = "https://dcms.zast.org.cn/zj_api"
    break;
}
export default baseUrl;
