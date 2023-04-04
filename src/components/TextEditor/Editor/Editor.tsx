import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { useEditor, EditorContent, Extensions } from "@tiptap/react";
import { Open_Sans } from "next/font/google";
import { SlashMenuExtension } from "../SlashMenu/SlashMenuExtension";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { BubbleMenu } from "../BubbleMenu/BubbleMenu";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import CodeBlock from "@tiptap/extension-code-block";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export const Editor = () => {
  const extensions: Extensions = [
    Document,
    Text,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Strike,
    CodeBlock,
    ListItem,
    BulletList,
    OrderedList,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    SlashMenuExtension,
  ];

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
