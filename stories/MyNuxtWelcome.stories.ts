import type { Meta, StoryObj } from '@storybook/vue3'

import MyNuxtWelcome from './MyWelcome.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Example/NuxtWelcome',
  component: MyNuxtWelcome,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof MyNuxtWelcome>

export default meta

export const NuxtWelcomeStory: StoryObj<typeof meta> = {
  args: {},
}
