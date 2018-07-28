<template>
<div class="note-div"
     :style="note_style">
  <svg xmlns:svg="http://www.w3.org/2000/svg"
       xmlns="http://www.w3.org/2000/svg"
       width="3.588mm"
       height="12.238mm"
       viewBox="0 0 3.688 12.238"
       :transform="svg_transform" >
    <g>
      <ellipse :style="ellipse_style"
               class="ellipse"
               cx="1.7929119"
               cy="11.0765"
               rx="1.6835371"
               ry="1.0521128"/>
      <path v-if="stem_needed"
            class="stem"
            d="M 3.4559171,11.08479 V -0.04322" />
    </g>
  </svg>
</div>
</template>

<script>
const note_y_start = 18.7;
const note_increment_scale = 7.46;
const flipped_translate_y = -36.8;

export default {
  name: "Note",
  props: {
    fraction: {
      type: Number,
      required: false,
      default: 4
    },

    position: {
      type: Number,
      required: true
    }
  },

  computed: {
    ellipse_style() {
      var fill_opacity = 1

      if ( this.fraction <= 2 ) {
        fill_opacity = 0;
      }

      return {
        "fill-opacity":      fill_opacity,
      }
    },

    svg_transform() {
      if (this.stem_needed && this.position > 4) {
        return "scale(1,-1) translate(0," + flipped_translate_y + ")";
      }

      return "";
    },

    note_style() {
      return {
        top: String(note_y_start - (this.position-1)*note_increment_scale) + "px"
      }
    },

    stem_needed() {
      return (this.fraction >= 2);
    }
  }
};
</script>

<style scoped>
.note-div {
  position: absolute;
  display: inline-block;
}

.stem {
  stroke:          #000000;
  stroke-width:    0.26458332px;
  stroke-linecap:  butt;
  stroke-linejoin: miter;
}

.ellipse {
  fill:              #000000;
  stroke:            #000000;
  stroke-width:      0.21874945;
  stroke-miterlimit: 4;
}
</style>
