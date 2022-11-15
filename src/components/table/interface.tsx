import type * as React from 'react';

export type Key = React.Key;

export type DataProperty = string | number | readonly (string | number)[];

export interface CellType<RecordType> {
  key?: Key;
  className?: string;
}

export interface RenderedCell<RecordType> {
  props?: CellType<RecordType>;
  children?: React.ReactNode;
}

export interface ColumnType<RecordType> {
  name?: string;
  data?: string;
  title?: string;
  // render?: (value: any, record: RecordType, index: number) => React.ReactNode | RenderedCell<RecordType>;
};

export type ColumnsType<RecordType = unknown> = readonly (ColumnType<RecordType>)[];

export interface TableProps<RecordType = unknown> {
  data?: readonly RecordType[];
  columns?: ColumnsType<RecordType>;
};

export interface HeaderProps<RecordType = unknown> {
  columns?: ColumnsType<RecordType>;
}

export interface BodyProps<RecordType = unknown> extends TableProps {};
