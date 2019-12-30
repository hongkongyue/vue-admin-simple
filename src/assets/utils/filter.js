// vue全局过滤器
var vFilter = {
  formatterNumPoint: function (val) {				//保留两位小数  如果是空，则返回0.00
    if (!val) {
      return '0.00';
    } else {
      var resF = parseFloat(val).toFixed(4);
      var res = parseFloat(resF).toFixed(2);
      return res;
    }
  },
  formatterNumPoint1: function (val) {				//保留一位小数  如果是空，则返回0.0
    if (!val) {
      return '0.0';
    } else {
      var res = parseFloat(val).toFixed(1);
      return res;
    }
  },
  formatterPhone: function (val) {				//手机号  显示前三后二
    var strLength = val.length;
    var star = '';
    var strRel = '';
    //星号部分
    var hideSec = val.substring(3, strLength - 2);
    for (var i = 0; i < hideSec.length; i++) {
      star += "*";
    };
    strRel = val.substring(0, 3) + star + val.substr(val.length - 2);
    return strRel;
  },
};

export default vFilter;