// 域名配置
let windowHref = window.location.href;
let baseUrl = '';
if (windowHref.indexOf(".145") > 0) {
  baseUrl = 'http://192.168.1.145:8080';
} else if (windowHref.indexOf(".147") > 0) {
  baseUrl = 'http://192.168.1.147:8080';
} else if (windowHref.indexOf(".148") > 0) {
  baseUrl = 'http://192.168.1.148:8081';

} else if (windowHref.indexOf("zhecaijinfu") > 0) {
  baseUrl = 'https://finance.zhecaijinfu.com';
} else {
  // baseUrl = 'https://finance.zhecaijinfu.com';    //正式环境
  // baseUrl = 'http://192.168.1.147:8080';      //内网开发环境
  baseUrl = 'http://192.168.1.148:8081';      //内网测试环境
  // baseUrl = 'http://192.168.1.210:8086';      //大熊
  // baseUrl = 'http://192.168.1.213:8086';      //张艳
  // baseUrl = "http://124.160.43.66:18086";      //烈峰
  // baseUrl = "http://192.168.1.249:8086";      //大侠
  // baseUrl = 'http://192.168.1.210:8086';      //小龙
  // baseUrl = 'http://192.168.1.224:8086';      //吴振武
};

export {
  baseUrl,
  windowHref
}