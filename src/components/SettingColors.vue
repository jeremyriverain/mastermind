<template>
  <div>
    <div class="flex items-center q-mb-sm">
      <p class="q-mb-none">{{$t('choose_color')}}</p>
      <colors-info></colors-info>
    </div>

    <slot name="error"></slot>

    <div class="flex">
      <colors-chip
        v-for="(color, index) in localColors"
        :key="index"
        :color="color"
        @input="save(index, $event)"
        @remove="remove(index)"
        :removable="localColors.length > 2"
      ></colors-chip>
    </div>

    <div
      class="q-mt-md"
      v-if="localColors.length < 8"
    >
      <q-btn
        class="q-ml-md"
        icon="add"
        :label="$t('add_color')"
        outline
        size="sm"
        @click="add"
      />
    </div>
  </div>
</template>

<script>
import ColorsChip from 'components/SettingColorsChip'
import ColorsInfo from 'components/SettingColorsInfo'

export default {
  name: 'SettingColors',
  components: {
    ColorsChip,
    ColorsInfo
  },
  props: {
    colors: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      localColors: null
    }
  },
  created () {
    this.localColors = Object.assign([], this.colors)
  },
  watch: {
    colors () {
      this.localColors = this.colors
    }
  },
  methods: {
    save (index, color) {
      this.localColors[index] = color
      this.$emit('input', this.localColors)
    },
    remove (index, color) {
      this.localColors.splice(index, 1)
      this.$emit('input', this.localColors)
    },
    add () {
      this.localColors.push('#ffffff')
      this.$emit('input', this.localColors)
    }
  }
}
</script>
