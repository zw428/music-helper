<template>
<div>
  <div class="notes">
    <bars/>
    <note :vert_position="1"
          :horiz_fraction="1"/>
  </div>

  <router-link to="/">home</router-link>
</div>
</template>

<script>
import Bars from "@/components/Bars";
import Note from "@/components/Note";

export default {
  name: "Main",
  components: {Note, Bars}
};
</script>

<style scoped>
.notes {
  height: 200px;
}
</style>
