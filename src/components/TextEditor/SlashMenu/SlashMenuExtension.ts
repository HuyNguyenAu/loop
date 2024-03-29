import { mergeAttributes, Node, Editor, Range } from "@tiptap/core";
import { Node as ProseMirrorNode } from "@tiptap/pm/model";
import { EditorState, PluginKey, Transaction } from "@tiptap/pm/state";
import Suggestion, { SuggestionOptions } from "@tiptap/suggestion";
import { Command } from "./SlashMenu";
import { SlashMenuSuggestion } from "./SlashMenuSuggestion";

export type SlashMenuOptions = {
  HTMLAttributes: Record<string, any>;
  renderLabel: (props: {
    options: SlashMenuOptions;
    node: ProseMirrorNode;
  }) => string;
  suggestion: Omit<SuggestionOptions, "editor">;
};

export const SlashMenuPluginKey = new PluginKey("slashmenu");

export const SlashMenu = Node.create<SlashMenuOptions>({
  name: "slashmenu",
  addOptions() {
    return {
      HTMLAttributes: {},
      renderLabel({
        options,
        node,
      }: {
        options: SlashMenuOptions;
        node: ProseMirrorNode;
      }) {
        return `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`;
      },
      suggestion: {
        char: "/",
        pluginKey: SlashMenuPluginKey,
        command: ({
          editor,
          range,
          props,
        }: {
          editor: Editor;
          range: Range;
          props: any;
        }) => {
          editor.chain().focus().deleteRange(range).run();

          switch (props.command) {
            case Command.Heading1:
              editor.chain().focus().toggleHeading({ level: 1 }).run();
              break;

            case Command.Heading2:
              editor.chain().focus().toggleHeading({ level: 2 }).run();
              break;

            case Command.Heading3:
              editor.chain().focus().toggleHeading({ level: 3 }).run();
              break;

            case Command.Text:
              editor.chain().focus().clearNodes().run();

            case Command.Bold:
              editor.chain().focus().toggleBold().run();
              break;

            case Command.Italic:
              editor.chain().focus().toggleItalic().run();
              break;

            case Command.Underline:
              editor.chain().focus().toggleStrike().run();
              break;

            case Command.StrikeThrough:
              editor.chain().focus().toggleStrike().run();
              break;

            case Command.Code:
              editor.chain().focus().toggleCodeBlock().run();
              break;

            case Command.Table:
              break;

            case Command.CheckList:
              editor.chain().focus().toggleTaskList().run();
              break;

            case Command.BulletList:
              editor.chain().focus().toggleBulletList().run();
              break;

            case Command.NumberedList:
              editor.chain().focus().toggleOrderedList().run();
              break;

            default:
              break;
          }
        },
        allow: ({ state, range }: any) => {
          const $from = state.doc.resolve(range.from);
          const type: any = state.schema.nodes[this.name];
          const allow: any = !!$from.parent.type.contentMatch.matchType(type);

          return allow;
        },
      },
    };
  },

  group: "inline",

  inline: true,

  selectable: false,

  atom: true,

  // addAttributes() {
  //   return {
  //     id: {
  //       default: null,
  //       parseHTML: (element: HTMLElement) => element.getAttribute("data-id"),
  //       renderHTML: (attributes: Record<string, any>) => {
  //         if (!attributes.id) {
  //           return {};
  //         }

  //         return {
  //           "data-id": attributes.id,
  //         };
  //       },
  //     },

  //     label: {
  //       default: null,
  //       parseHTML: (element: HTMLElement) => element.getAttribute("data-label"),
  //       renderHTML: (attributes: Record<string, any>) => {
  //         if (!attributes.label) {
  //           return {};
  //         }

  //         return {
  //           "data-label": attributes.label,
  //         };
  //       },
  //     },
  //   };
  // },

  // parseHTML() {
  //   return [
  //     {
  //       tag: `span[data-type="${this.name}"]`,
  //     },
  //   ];
  // },

  renderHTML({
    node,
    HTMLAttributes,
  }: {
    node: ProseMirrorNode;
    HTMLAttributes: Record<string, any>;
  }) {
    return [
      "span",
      mergeAttributes(
        { "data-type": this.name },
        this.options.HTMLAttributes,
        HTMLAttributes
      ),
      this.options.renderLabel({
        options: this.options,
        node,
      }),
    ];
  },

  renderText({ node }: { node: ProseMirrorNode }) {
    return this.options.renderLabel({
      options: this.options,
      node,
    });
  },

  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        this.editor.commands.command(
          ({ tr, state }: { tr: Transaction; state: EditorState }) => {
            let isMention = false;
            const { selection } = state;
            const { empty, anchor } = selection;

            if (!empty) {
              return false;
            }

            state.doc.nodesBetween(
              anchor - 1,
              anchor,
              (node: ProseMirrorNode, pos: number) => {
                if (node.type.name === this.name) {
                  isMention = true;
                  tr.insertText(
                    this.options.suggestion.char || "",
                    pos,
                    pos + node.nodeSize
                  );

                  return false;
                }
              }
            );

            return isMention;
          }
        ),
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});

export const SlashMenuExtension = SlashMenu.configure({
  HTMLAttributes: {
    class: "",
  },
  suggestion: SlashMenuSuggestion,
});
