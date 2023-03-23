import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { Component } from "./Component";

export const Draggable = Node.create({
  name: "draggable",
  group: "block",
  content: "block",
  draggable: true,
  parseHTML() {
    return [
      {
        tag: 'div[data-type="draggable"]',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "draggable" }),
      0,
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
  addCommands() {
		return {
			setParagraph: () => ({ commands }) => {
				return commands.toggleNode('paragraphDiv', 'paragraphDiv')
			},
		}
	},
});