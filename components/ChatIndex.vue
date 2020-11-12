<template>
  <div class="chatindex--Box">
    <div class="chatindex--Name">{{name}}</div>
    <div class="chatindex--Message">{{message}}</div>
  </div>
</template>
<script>
export default {
  props: [
    'postedDate',
    'message',
    'name'
  ]
}
</script>

<style>
.chatindex--Box {
  background-color:#e6e6e6;
  margin-top: 16px;
  padding: 8px;
}
.chatindex--Name {
  color: #444;
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 8px;
}
.chatindex--Message {
  color: #444;
  font-weight: 600;
}
</style>