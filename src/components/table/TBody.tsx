import React from 'react';
import { BodyProps } from './interface';

function TBody<RecordType>(props: BodyProps<RecordType>): React.ReactElement {
  const { data, columns } = props;
  const dataProperties = columns ? columns.map((column) => column.name) : [];

  return (
    <tbody>
      {
        data?.map((record, index) => {

          return (
            <tr key={index}>
              {dataProperties.map((dataProperty, dataIndex) => {
                return <td key={`${index}-${dataIndex}`}></td>;
              })}
            </tr>
          )
        })
      }
    </tbody>
  );
}

export default TBody;
