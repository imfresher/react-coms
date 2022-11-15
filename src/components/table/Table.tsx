import React from 'react';
import THeader from './THeader';
import TBody from './TBody';
import {
  TableProps
} from './interface';

function Table<RecordType>(props: TableProps<RecordType>): React.ReactElement {
  const { columns, data } = props;

  return <div className="table__wrapper table-responsive">
    <table className="table">
      <THeader columns={ columns } />
      <TBody columns={columns} data={data} />
    </table>
  </div>;
}

export default Table;
