import React from 'react';
import {
  HeaderProps
} from './interface';

function THeader<RecordType>(props: HeaderProps<RecordType>): React.ReactElement {
  const { columns } = props;

  console.log(columns);

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
