<template>
  <div
    class="flex flex-center"
    style="width:15px;height:15px"
  >
    <div class="circle">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRowResolutionItem',
  props: {
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.circle {
  border-radius: 50%;
  background: white;
  width: 10px;
  height: 10px;
}
</style>
