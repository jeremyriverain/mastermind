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
        <q-icon
          :name="'img:statics/' + valueObject.icon"
          class="q-mr-xs"
        />
        {{valueObject.label}}
      </div>
      <div v-else>{{$t('none')}}</div>
    </template>

    <template v-slot:option="scope">
      <q-item
        v-bind="scope.itemProps"
        v-on="scope.itemEvents"
      >
        <q-item-section avatar>
          <q-icon :name="'img:statics/' + scope.opt.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label v-html="scope.opt.label" />
        </q-item-section>
      </q-item>
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
          value: 'fr',
          icon: 'fr.svg'
        },
        {
          label: this.$t('locale.english'),
          value: 'en-us',
          icon: 'gb.svg'
        }
      ]
    },
    valueObject () {
      return this.value ? this.options.find(el => el.value === this.value) : null
    }
  }
}
</script>
