<template>
  <div>
    <h1>Create an event</h1>
    <ElInstance
      v-model="outJsonString"
      input-type="dragNDrop"
      complexity="simple"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import IcInputs from '@explorelearning/ic-inputs'
import '@explorelearning/ic-inputs/dist/ic-inputs.css'
import draggable from 'vuedraggable'
import IcFormBuilder from '@explorelearning/ic-form-builder'
import '@explorelearning/ic-form-builder/dist/ic-form-builder.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(IcFormBuilder)
Vue.use(IcInputs)
Vue.component('draggable', draggable)

export default {
  head() {
    return {
      title: 'Create an Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'You can create a new event in your neighborhood'
        }
      ]
    }
  },
  data() {
    return {
      outJsonString: ''
    }
  }
}
</script>
