<template>
<div>
  <bars/>
  <note :position="4"/>
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
