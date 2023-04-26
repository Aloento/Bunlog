import { ContextualMenu, IContextualMenuItem } from "@fluentui/react";
import { $createParagraphNode, $getRoot } from "lexical";
import { ICell, IRow, TableNode } from ".";
import { createUID } from "../../Utils/createUID";
import { SortOptions } from "./Component";

interface ITableActionMenu {
  cell: ICell;
  menuElem: HTMLElement;
  updateCellsByID: (ids: Array<string>, fn: () => void) => void;
  onClose: () => void;
  updateTableNode: (fn2: (tableNode: TableNode) => void) => void;
  cellCoordMap: Map<string, [number, number]>;
  rows: IRow[];
  setSortingOptions: (options: null | SortOptions) => void;
  sortingOptions: null | SortOptions;
}

export function TableActionMenu({
  cell, rows, cellCoordMap, menuElem, updateCellsByID, onClose, updateTableNode, setSortingOptions, sortingOptions,
}: ITableActionMenu) {
  const coords = cellCoordMap.get(cell.id);
  if (!coords)
    return null;

  const [x, y] = coords;

  //#region IContextualMenuItem

  const items: IContextualMenuItem[] = [
    {
      key: createUID(),
      text: cell.type === "normal" ? "Make header" : "Remove header",
      onClick: () => {
        updateTableNode((tableNode) => {
          tableNode.updateCellType(
            x, y,
            cell.type === "normal" ? "header" : "normal"
          );
        });
        onClose();
      }
    },
    {
      key: createUID(),
      text: "Clear cell",
      onClick: () => {
        updateCellsByID([cell.id], () => {
          const root = $getRoot();
          root.clear();
          root.append($createParagraphNode());
        });
        onClose();
      }
    },
    {
      key: createUID(),
      text: "-",
    }
  ];

  if (cell.type === "header" && y === 0) {
    if (sortingOptions && sortingOptions.x === x)
      items.push({
        key: createUID(),
        text: "Remove sorting",
        onClick: () => {
          setSortingOptions(null);
          onClose();
        }
      });

    if (!sortingOptions ||
      sortingOptions.x !== x ||
      sortingOptions.type === "descending")
      items.push({
        key: createUID(),
        text: "Sort ascending",
        onClick: () => {
          setSortingOptions({ type: "ascending", x });
          onClose();
        }
      });

    if (!sortingOptions ||
      sortingOptions.x !== x ||
      sortingOptions.type === "ascending")
      items.push({
        key: createUID(),
        text: "Sort descending",
        onClick: () => {
          setSortingOptions({ type: "descending", x });
          onClose();
        }
      }, {
        key: createUID(),
        text: "-",
      });
  }

  items.push(
    {
      key: createUID(),
      text: "Insert row above",
      onClick: () => {
        updateTableNode((tableNode) => {
          tableNode.insertRowAt(y);
        });
        onClose();
      }
    },
    {
      key: createUID(),
      text: "Insert row below",
      onClick: () => {
        updateTableNode((tableNode) => {

          tableNode.insertRowAt(y + 1);
        });
        onClose();
      }
    },
    {
      key: createUID(),
      text: "-",
    },
    {
      key: createUID(),
      text: "Insert column left",
      onClick: () => {
        updateTableNode((tableNode) => {
          tableNode.insertColumnAt(x);
        });
        onClose();
      }
    },
    {
      key: createUID(),
      text: "Insert column right",
      onClick: () => {
        updateTableNode((tableNode) => {
          tableNode.insertColumnAt(x + 1);
        });
        onClose();
      }
    },
    {
      key: createUID(),
      text: "-",
    },
  );

  if (rows[0].cells.length !== 1)
    items.push({
      key: createUID(),
      text: "Delete column",
      onClick: () => {
        updateTableNode((tableNode) => {
          tableNode.deleteColumnAt(x);
        });
        onClose();
      }
    });

  if (rows.length !== 1)
    items.push({
      key: createUID(),
      text: "Delete row",
      onClick: () => {
        updateTableNode((tableNode) => {
          tableNode.deleteRowAt(y);
        });
        onClose();
      }
    });

  items.push({
    key: createUID(),
    text: "Delete table",
    onClick: () => {
      updateTableNode((tableNode) => {
        tableNode.selectNext();
        tableNode.remove();
      });
      onClose();
    }
  });

  //#endregion

  return (
    <ContextualMenu
      items={items}
      target={menuElem}
    />
  );
}
