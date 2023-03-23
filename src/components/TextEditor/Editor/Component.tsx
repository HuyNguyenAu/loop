import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export const Component = (props: NodeViewProps) => {
  return (
    <NodeViewWrapper className="flex p-2 my-2">
      <div
        className="drag-handle-parent h-4 w-4 flex-none relative top-[0.3rem] mr-[0.5rem] cursor-grab"
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
