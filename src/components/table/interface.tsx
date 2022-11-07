import type * as React from 'react';

export type Key = React.Key;

export type DataIndex = string | number | readonly (string | number)[];

export type SortOrder = 'desc' | 'asc' | null;

export type FilterValue = (Key | boolean)[];

export type DefaultRecordType = Record<string, any>;

interface ColumnSharedType<RecordType> {
  title?: React.ReactNode;
  key?: Key;
  className?: string;
}

export interface ColumnGroupType<RecordType> extends ColumnSharedType<RecordType> {
  children: ColumnsType<RecordType>;
}

export interface ColumnType<RecordType> extends ColumnSharedType<RecordType> {
  colSpan?: number;
}

export type ColumnsType<RecordType = unknown> = readonly (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[];

export type GetComponentProps<DataType> = (
  data: DataType,
  index?: number,
) => React.HTMLAttributes<any> | React.TdHTMLAttributes<any>;

type Component<P> =
  | React.ComponentType<P>
  | React.ForwardRefExoticComponent<P>
  | React.FC<P>
  | keyof React.ReactHTML;

export type CustomizeComponent = Component<any>;

export type GetComponent = (
  path: readonly string[],
  defaultComponent?: CustomizeComponent,
) => CustomizeComponent;

export type CustomizeScrollBody<RecordType> = (
  data: readonly RecordType[],
  info: {
    scrollbarSize: number;
    ref: React.Ref<{ scrollLeft: number }>;
    onScroll: (info: { currentTarget?: HTMLElement; scrollLeft?: number }) => void;
  },
) => React.ReactNode;

export interface TableComponents<RecordType> {
  table?: CustomizeComponent;
  header?: {
    wrapper?: CustomizeComponent;
    row?: CustomizeComponent;
    cell?: CustomizeComponent;
  };
  body?:
    | CustomizeScrollBody<RecordType>
    | {
        wrapper?: CustomizeComponent;
        row?: CustomizeComponent;
        cell?: CustomizeComponent;
      };
}

