import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { Item } from "./Item/Item";

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
  renderHTML({ HTMLAttributes }: { HTMLAttributes: Record<string, any> }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "draggable" }),
      0,
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(Item);
  },
});
