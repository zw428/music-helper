<template>
<div class="notes" :style="notes_style">
  <bars/>
  <note :position="9"/>
</div>
</template>

<script>
import Bars from "@/components/Bars";
import Note from "@/components/Note";

export default {
  name: "Main",
  components: {Note, Bars},

  computed: {
    notes_style() {
      const scale = 1.5;
      const scale_str = "scale(" + scale + ")";

      return {
        "-ms-transform": scale_str,
        "-webkit-transform": scale_str,
        "transform": scale_str
      }
    }
  }
};
</script>

<style scoped>
.notes {
  transform-origin: top left;
  margin-top: 70px;
}
</style>
