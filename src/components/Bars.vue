<template>
<div class="bars-div">
  <svg xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       width="94mm"
       height="16mm"
       viewBox="0 0 94 16">
    <g transform="translate(0,-281)">
      <path v-for="(d, index) in d_array"
            :d="d"
            :key="index"
            :style="path_style"/>
    </g>
  </svg>
</div>
</template>

<script>

export default {
  name: "Bars",

  computed: {
    path_style() {
      return {
        "stroke":          "#000000",
        "stroke-width":    "0.26406649px",
        "stroke-linecap":  "butt",
        "stroke-linejoin": "miter",
        "stroke-opacity":  1
      }
    },

    d_array() {
      return [
        "M 0.134068,281.15126 H 93.872165",
        "M 0.134068,285.04599 H 93.927375",
        "M 0.133034,288.94186 H 93.926345",
        "M 0.133034,292.97106 H 93.926345",
        "m 0.132,281.0152 v 15.98139",
        "m 93.870105,281.01712 v 15.9824",
        "M 0.132,296.86797 H 93.925315",
      ]
    }
  }
};
</script>

<style scoped>
.bars-div {
  position: absolute;
  display: inline-block;
}
</style>
