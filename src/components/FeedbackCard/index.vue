<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    @click="handleToggle"
    class="flex flex-col px-8 py-6 rounded cursor-pointer bg-brand-gray">

    <div class="flex item-center justify-between w-full mb-8">
      <badge :type="feedback.type" />

      <span class="font-regular text-brand-graydark">
        {{ getDiffTimeBetweenCurrentDate(feedback.createdAt) }}
      </span>
    </div>

    <div class="text-lg font-meduim text-gray-800">
      {{ feedback.text }}
    </div>

    <div
      :class="{
        animate__fadeOutUp: state.isClosing
      }"
      class="flex mt-8 animate__animated animate__fadeInUp animate__faster"
      v-if="state.isOpen"
    >

      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">Página</span>
          <span class="font-bold text-gray-700 uppercase select-none">{{ feedback.page }}</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">Dispositivo</span>
          <span class="font-bold text-gray-700 uppercase select-none">{{ feedback.device }}</span>
        </div>
      </div>

      <div class="flex flex-col w-1/2">
        <div class="flex flex-col">
          <span class="font-bold text-gray-400 uppercase select-none">usuário</span>
          <span class="font-bold text-gray-700 uppercase select-none">{{ feedback.fingerprint }}</span>
        </div>
      </div>

    </div>

    <div class="flex justify-end mt-8" v-if="!state.isOpen">
      <icon name="chevron-down" size="24" :color="brandColors.graydark"/>
    </div>

  </div>
</template>
<script>
import Badge from './Badge'
import Icon from '../Icon'
import { getDiffTimeBetweenCurrentDate } from '../../utils/date'
import palette from '../../../pallete'
import { reactive } from '@vue/reactivity'
import { wait } from '../../utils/timeout'

export default {
  components: { Badge, Icon },
  props: {
    feedback: { type: Object, required: true },
    isOpended: { type: Boolean, default: false }
  },

  setup (props) {
    const state = reactive({
      isOpen: props.isOpended,
      isClosing: !props.isOpended
    })

    async function handleToggle () {
      state.isClosing = true

      await wait(250)

      state.isOpen = !state.isOpen
      state.isClosing = false
    }

    return {
      state,
      handleToggle,
      getDiffTimeBetweenCurrentDate,
      brandColors: palette.brand
    }
  }
}
</script>
