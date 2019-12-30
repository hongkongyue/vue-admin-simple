<template>
  <div id="home">
    这是首页呀
  </div>
</template>
<script>
   import tool from 'deal-array-property'
   let arr=[{id:12,name:'洪坤越',age:26},{id:13,name:'张三',age:27},{id:15,name:'李四',age:29},] 
    console.log(tool.getProperty(arr,'age',27, 'name'     ))  //根据id查询age     返回的age值是26
    console.log(tool.getProperty(arr,'name', '李四', 'age')) //根据name查询age  返回的age值是29
</script>



