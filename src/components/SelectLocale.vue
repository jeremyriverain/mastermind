<template>
  <q-select
    filled
    :value="value"
    :options="options"
    :label="$t('language')"
    @input="$emit('input', $event)"
    :display-value="value ? value.label : '*null*'"
    emit-value
    dense
  >
    <template slot="selected">
      <div v-if="value">
        {{displayLabel}}
      </div>
      <div v-else>{{$t('none')}}</div>
    </template>
  </q-select>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    }
  },
  computed: {
    options () {
      return [
        {
          label: this.$t('locale.french'),
          value: 'fr'
        },
        {
          label: this.$t('locale.english'),
          value: 'en-us'
        }
      ]
    },
    displayLabel () {
      return this.value ? this.options.find(el => el.value === this.value).label : ''
    }
  }
}
</script>
