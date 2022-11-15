import React from 'react';
import { BodyProps } from './interface';

function TBody<RecordType>(props: BodyProps<RecordType>): React.ReactElement {
  const { data, columns } = props;
  const dataProperties = columns?.map((column) => column.name);

  return (
    <tbody>
      {
        data?.map((record, index) => {
          console.log(record);
          console.log(dataProperties);

          return (
            <tr key={index}>
              {/*{dataProperties?.map((dataProperty, dataIndex) => {
                return <td key={`${index}-${dataIndex}`}>{ (dataProperty && record && dataProperty in record) ? record[dataProperty] : '' }</td>;
              })}*/}
            </tr>
          )
        })
      }
    </tbody>
  );
}

export default TBody;
