//时间选择器配置项*****************************************************
// 获取时间
function getDay(day){  			//2018-08-10
	var today = new Date();  
		
	var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;          

	today.setTime(targetday_milliseconds); //注意，这行是关键代码
		
	var tYear = today.getFullYear();  
	var tMonth = today.getMonth();  
	var tDate = today.getDate();  
	tMonth = doHandleMonth(tMonth + 1);  
	tDate = doHandleMonth(tDate);  
	return tYear+"-"+tMonth+"-"+tDate;  
}  
function doHandleMonth(month){  
	var m = month;  
	if(month.toString().length == 1){  
		 m = "0" + month;  
	}  
	return m;  
}





//快捷选择
var datePickLimit = {
	shortcuts: [{
		text: '最近12小时',
		onClick: function (picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 12);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近一天',
		onClick: function (picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近三天',
		onClick: function (picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近一周',
		onClick: function (picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近一个月',
		onClick: function (picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			picker.$emit('pick', [start, end]);
		}
	}, {
		text: '最近三个月',
		onClick: function (picker) {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			picker.$emit('pick', [start, end]);
		}
	}]
};

// 默认时间选择--最近七天
var dateDefault = [getDay(-7),getDay(0)];

export {
	datePickLimit,
	dateDefault
}




