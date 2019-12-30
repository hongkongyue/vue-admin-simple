// 表单校验规则
var rules = {
  validateAssetType:(rule, val, callback) => {
    if (val == '') {
      callback(new Error('此栏目不能为空'));
    } else {
      callback();
    }
  }
};

export default rules;


