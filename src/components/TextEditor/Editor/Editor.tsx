import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { useEditor, EditorContent, Extensions } from "@tiptap/react";
import { Open_Sans } from "next/font/google";
import { SlashMenuExtension } from "../SlashMenu/SlashMenuExtension";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { BubbleMenu } from "../BubbleMenu/BubbleMenu";
import StarterKit from "@tiptap/starter-kit";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export const Editor = () => {
  const extensions: Extensions = [StarterKit, SlashMenuExtension];

  const editor = useEditor({
    enableInputRules: false,
    extensions: extensions,
    editorProps: {
      attributes: {
        class: "prose focus:outline-none",
      },
    },
    content: `
    <h1>This is a 1st level heading</h1>
    <h2>This is a 2nd level heading</h2>
    <h3>This is a 3rd level heading</h3>
    <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</h4>
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
