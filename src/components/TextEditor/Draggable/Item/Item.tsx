import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";

export const Item = () => {
  return (
    <NodeViewWrapper className="my-2 flex p-2">
      <div
        className="drag-handle-parent relative top-[0.3rem] mr-[0.5rem] h-4 w-4 flex-none cursor-grab"
        contentEditable="false"
        draggable="true"
        data-drag-handle="true"
      >
        <DragHandleDots2Icon className="drag-handle text-transparent" />
      </div>
      <NodeViewContent className="flex-none" />
    </NodeViewWrapper>
  );
};
