import { randomChars } from "./utils";

type Template =
  | "image_top"
  | "image_left"
  | "image_right"
  | "image_bottom"
  | "image_center";
type Choice = any;
type Row = {
  id?: string;
  title?: string;
  debug_title?: string;
  text?: string;
  image?: string;
  template?: Template;
  allowed_choice?: number;
  selected_choice?: number;
  deselect_choice?: boolean;
  requires?: any;
  objects?: Choice[];
};

export default class Project {
  rows: Row[] = [];
  points: any[] = [];

  constructor() {}

  addRow(param: Row) {
    const row = {
      id: param.id || randomChars(),
      title: param.title || "title",
      debug_title: param.debug_title || "debug_title",
      text: param.text || "text",
      image: param.image || "image_url",
      template: param.template || ("image_top" as Template),
      allowed_choice: param.allowed_choice || 0,
      selected_choice: 0,
      deselect_choice: false,
      requires: [],
      objects: [],
    };

    this.rows.push(row);
  }
}

export class Requires {}
