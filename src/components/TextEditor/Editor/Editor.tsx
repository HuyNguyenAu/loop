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
import TextAlign from "@tiptap/extension-text-align";

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
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    SlashMenuExtension,
  ];

  const editor =
    useEditor({
      enableInputRules: false,
      extensions: extensions,
      editorProps: {
        attributes: {
          class: "prose max-w-full focus:outline-none",
        },
      },
      content: `
    <p>
      I like lists. Let's add one:
    </p>
    <ul>
      <li>This is a bullet list.</li>
      <li>And it has three list items.</li>
      <li>Here is the third one.</li>
    </ul>
    <p>
      Do you want to see one more? I bet! Here is another one:
    </p>
    <ol>
      <li>That's a different list, actually it's an ordered list.</li>
      <li>It also has three list items.</li>
      <li>And all of them are numbered.</li>
    </ol>
    <p>
      Lists would be nothing without list items.
    </p>
  `,
    }) ?? undefined;

  return (
    <ScrollArea className={`h-screen ${font.className}`}>
      <BubbleMenu editor={editor}>
        <ContextMenu editor={editor} />
      </BubbleMenu>
      <EditorContent editor={editor ?? null} />
    </ScrollArea>
  );
};
