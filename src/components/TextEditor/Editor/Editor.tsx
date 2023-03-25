import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import {
  useEditor,
  EditorContent,
  Extensions,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import { Open_Sans } from "next/font/google";
import { SlashMenuExtension } from "../SlashMenu/SlashMenuExtension";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export const Editor = () => {
  const extensions: Extensions = [
    StarterKit,
    Focus.configure({
      className: "has-focus",
    }),
    SlashMenuExtension,
  ];

  const editor = useEditor({
    enableInputRules: false,
    extensions: extensions,
    content: `
    <p>Thanks, your big boss</p>
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
