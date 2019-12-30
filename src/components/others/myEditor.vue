<template>
    <div class="quill_box">
      <quill-editor 
        v-model="content" 
        ref="myQuillEditor" 
        :options="editorOption" 
        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
    </div>
    
</template> 
<script>
import Bus from "../../assets/utils/eventBus";



export default {
  data() {
    return {
      content:'',
      editorOption: {
        placeholder: "请编辑内容",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            [ "image"]
          ]
        }
      }
    };
  },
  props:[
    'contentDefault'
  ],
  watch:{
    contentDefault:function(){
      this.content = this.contentDefault;
    }
  },
  mounted:function(){
    this.content = this.contentDefault;
  },
  methods: {
    onEditorBlur() {
      //失去焦点事件
      // console.log('失去焦点');
    },
    onEditorFocus() {
      //获得焦点事件
      // console.log('获得焦点事件');
    },
    onEditorChange() {
      //内容改变事件
      // console.log('内容改变事件');
      Bus.$emit('getEditorCode',this.content)
    }
  }
};
</script> 

<style lang="less">
  .quill_box{
    .ql-toolbar.ql-snow{border-color:#dcdfe6;}
    .ql-container{height:200px !important;border-color:#dcdfe6;}
    .ql-snow .ql-picker-label::before {
      position: relative;
      top: -10px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg, .ql-snow .ql-icon-picker .ql-picker-label svg{position: relative;top:-6px;}
  }
</style>
