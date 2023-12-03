<template>
  <el-input v-bind="$attrs" :placeholder="placeholder" :clearable="clearable">
     <template #[slotName] v-for="(slot, slotName) in $slots" >
      <slot :name="slotName" />
    </template>
  </el-input>
</template>

<script setup>
defineProps({
  clearable: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '请输入'
  }
})
</script>

<style lang="scss" scoped></style>