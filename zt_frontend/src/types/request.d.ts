/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Originid = string;
export type Id = string;
export type Code = string;
export type Celltype = "code" | "markdown" | "text";
export type Cells = CodeRequest[];

export interface Request {
  originId: Originid;
  cells: Cells;
  components: Components;
  [k: string]: unknown;
}
export interface CodeRequest {
  id: Id;
  code: Code;
  cellType: Celltype;
  [k: string]: unknown;
}
export interface Components {
  [k: string]: string | boolean | number | unknown[] | null;
}
