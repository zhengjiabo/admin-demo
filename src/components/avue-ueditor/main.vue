<template>
  <div class="editor—wrapper">
    <Toolbar class="toolbar-container"
             :editor="editorRef"
             :defaultConfig="toolbarConfig" />
    <Editor :style="styleName"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            @onChange="onChange"
            @onCreated="handleCreated" />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const emit = defineEmits();
const props = defineProps({
  placeholder: String,
  modelValue: String,
  minRows: [String, Number]
})
const styleName = computed(() => {
  return {
    height: props.minRows * 50 + 'px'
  }
})
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref(props.modelValue)

onMounted(() => {
  valueHtml.value = props.modelValue
})
const toolbarConfig = {}
const editorConfig = { placeholder: props.placeholder }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
watch(() => props.modelValue, (val) => {
  console.log(val)
  valueHtml.value = val
})
const onChange = (editor) => {
  emit('update:modelValue', valueHtml.value)
}
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style>
.editor—wrapper {
  border: 1px solid #ccc;
}
.toolbar-container {
  border-bottom: 1px solid #ccc;
}
</style>