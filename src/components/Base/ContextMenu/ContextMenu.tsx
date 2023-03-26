import { PropsWithChildren, ReactNode } from "react";
import * as RadixContextMenu from "@radix-ui/react-context-menu";

export type ContextMenuProps = {
  trigger?: ReactNode;
};

export const ContextMenu = (props: PropsWithChildren<ContextMenuProps>) => {
  return (
    <RadixContextMenu.Root>
      <RadixContextMenu.Trigger>{props.trigger}</RadixContextMenu.Trigger>
      <RadixContextMenu.Portal>
        <RadixContextMenu.Content
          alignOffset={5}
          className="pl-4 py-4 shadow-lg rounded-xl bg-white"
        >
          {props.children}
        </RadixContextMenu.Content>
      </RadixContextMenu.Portal>
    </RadixContextMenu.Root>
  );
};

export default ContextMenu;
