/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Id = string;
export type Code = string;
export type Output = string;
/**
 * Unique id for a component
 */
export type Id1 = string;
/**
 * Optional variable name associated with a component
 */
export type VariableName = string;
export type Components = ZTComponent[];
export type Celltype = "code" | "markdown";

export interface Notebook {
  cells: Cells;
  [k: string]: unknown;
}
export interface Cells {
  [k: string]: CodeCell;
}
export interface CodeCell {
  id: Id;
  code: Code;
  output: Output;
  components: Components;
  cellType?: Celltype;
  [k: string]: unknown;
}
export interface ZTComponent {
  id: Id1;
  variable_name?: VariableName;
  [k: string]: unknown;
}
