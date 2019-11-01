<template>
  <div>
    <q-chip
      clickable
      v-model="show"
      @click="onClick"
      :style="'background:' + localColor"
      :class="[darkClass, removable ? 'q-pr-xs': '']"
    >
      {{localColor}}
      <q-btn
        round
        icon="close"
        flat
        size="xs"
        class="q-ml-sm"
        @click.stop="$emit('remove')"
        v-if="removable"
      />
    </q-chip>

    <q-dialog v-model="showColorPicker">
      <q-card
        class="bg-transparent"
        flat
      >
        <q-card-section>
          <q-color
            v-model="localColor"
            default-view="palette"
            @input="$emit('input', $event)"
          />
        </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
export default {
  name: 'SettingColorsChip',
  props: {
    color: {
      type: String,
      required: true
    },
    removable: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      show: true,
      showColorPicker: false,
      localColor: null
    }
  },
  computed: {
    darkClass () {
      var r = parseInt(this.localColor.slice(1, 3), 16),
        g = parseInt(this.localColor.slice(3, 5), 16),
        b = parseInt(this.localColor.slice(5, 7), 16)
      // http://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? 'dark'
        : 'light'
    }
  },
  methods: {
    onRemove () {
      console.log('on remove')
      this.$emit('remove')
    },
    onClick () {
      console.log('on click')
      this.showColorPicker = true
    }
  },
  created () {
    this.localColor = this.color
  },
  watch: {
    color () {
      this.localColor = this.color
    }
  }
}
</script>

<style lang="stylus" scoped>
>>> .light {
  &, & .q-chip__icon {
    color: white;
  }
}
</style>
