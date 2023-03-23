import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Focus from '@tiptap/extension-focus';
import { Open_Sans } from "next/font/google";
import { Draggable } from "./Draggable";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Focus.configure({
        className: "has-focus",
      }),
      Draggable,
    ],
    content: `
    <div data-type="draggable">
      <p>Followed by a fancy draggable item.</p>
    </div>
    <div data-type="draggable">
      <p>And another draggable item.</p>
      <div data-type="draggable">
        <p>And a nested one.</p>
        <div data-type="draggable">
          <p>But can we go deeper?</p>
        </div>
      </div>
    </div>
  `,
  });

  return (
    <ScrollArea className={`h-screen ${font.className}`}>
      <div className="flex flex-col">
        <EditorContent editor={editor} />
      </div>
    </ScrollArea>
  );
};
