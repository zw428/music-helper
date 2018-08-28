<template>
<div>
  <div class="notes">
    <bars/>
    <note :vert_position="current_note"
          :flat="is_flat"
          :horiz_fraction="0.1"/>
  </div>

  <div>
    <button v-for="(str, index) in note_list"
            @click="guess_note(index)">
      {{str}}
    </button>
  </div>

  <div>
    {{correct_count}} / {{correct_count + incorrect_count}}
  </div>

  <router-link to="/">home</router-link>
</div>
</template>

<script>
import Bars from "@/components/Bars";
import Note from "@/components/Note";

const max_note = 8;

export default {
  name: "Main",
  components: {Note, Bars},

  data () {
    return {
      correct_count: 0,
      incorrect_count: 0,
      current_note: 0,
      is_flat: null
    }
  },

  created: function() {
    this.set_random_note();
  },

  methods: {
    set_random_note() {
      var current_note = this.current_note;

      while (current_note == this.current_note) {
        this.current_note = Math.floor(Math.random() * max_note) + 1;
      }

      this.is_flat = false;
    },

    guess_note(index) {
      if (index == this.correct_answer) {
        this.correct_count += 1;
      } else {
        this.incorrect_count += 1;
      }

      this.set_random_note();
      console.log(index);
      console.log(this.correct_answer);
    }
  },

  computed: {
    note_list() {
      return ["E b", "E", "F b", "F", "G b", "G", "A b", "A", "B b", "B", "C b", "C", "D b", "D"];
    },

    correct_answer() {
      return (this.current_note*2 + 1 - Number(this.is_flat)) % (this.note_list.length);
    }
  }
};
</script>

<style scoped>
.notes {
  height: 200px;
}
</style>
