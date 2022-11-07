import React from 'react';
import type {
  ColumnsType,
  ColumnType,
  Key,
  GetComponent,
  CustomizeComponent,
  TableComponents,
} from './interface';
import { DefaultRecordType } from './interface';
import { getPathValue } from './utils';

export interface TableProps<RecordType> {
  className?: string;
  columns?: ColumnType<RecordType>;
  components?: TableComponents<RecordType>;
}

function Table<RecordType extends DefaultRecordType>(props: TableProps<RecordType>) {
  const {
    className,
    components
  } = props;

  const getComponent = React.useCallback<GetComponent>(
    (path, defaultComponent) =>
      getPathValue<CustomizeComponent, TableComponents<RecordType>>(components || {}, path) ||
      defaultComponent,
    [components],
  );

  const TableComponent = getComponent(['table'], 'table');

  return (
    <TableComponent>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </TableComponent>
  );
}

export default Table;
