import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { useEditor, EditorContent, Extensions } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import { Open_Sans } from "next/font/google";
import { SlashMenuExtension } from "../SlashMenu/SlashMenuExtension";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { BubbleMenu } from "../BubbleMenu/BubbleMenu";

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
      <BubbleMenu editor={editor ?? undefined}>
        <ContextMenu />
      </BubbleMenu>
      <EditorContent editor={editor} />
    </ScrollArea>
  );
};
