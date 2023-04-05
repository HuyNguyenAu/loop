import { Extension } from '@tiptap/core'

export const Clipboard = Extension.create({
  name: 'clipboard',
  addCommands() {
    return {
      paragraph: () => ({ commands }) => {
        return commands.setNode('paragraph')
      },
    }
  },
})