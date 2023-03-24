import ScrollArea from "../../Base/ScrollArea/ScrollArea";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import { Open_Sans } from "next/font/google";
import { SlashMenuExtension } from "../SlashMenu/SlashMenuExtension";

const font = Open_Sans({ weight: "400", subsets: ["latin"] });

export const Editor = () => {
  const extensions = [
    StarterKit,
    Focus.configure({
      className: "has-focus",
    }),
    SlashMenuExtension,
  ];

  const editor = useEditor({
    extensions: extensions,
    content: `
    <div data-type="draggable">Hi everyone! Don't forget the daily stand up at 8 AM.</div>
    <p  data-type="draggable"><span data-type="mention" data-id="Jennifer Grey"></span> Would you mind to share what you've been working on lately? We fear not much happened since Dirty Dancing.
    <p><span data-type="mention" data-id="Winona Ryder"></span> <span data-type="mention" data-id="Axl Rose"></span> Let's go through your most important points quickly.</p>
    <p>I have a meeting with <span data-type="mention" data-id="Christina Applegate"></span> and don't want to come late.</p>
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
