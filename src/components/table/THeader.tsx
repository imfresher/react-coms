import React from 'react';
import {
  HeaderProps,
  CellType,
  ColumnsType
} from './interface';

function THeader<RecordType>({ columns }: HeaderProps<RecordType>): React.ReactElement | null {
  return (
    <thead>
      <tr>
        {columns?.map((column, index) => {
          return (
            <th key={column.name}>{column.title}</th>
          );
        })}
      </tr>
    </thead>
  );
}

export default THeader;
