import * as React from 'react';

function Cell(props, ref) {
  const componentProps = {...props, name: 'cell'};
  console.log('Cell');
  return (
    <td {...componentProps}>{ props.value }</td>
  );
}

const RefCell = React.forwardRef(Cell);

const MemoCell = React.memo(RefCell);
const WrapperCell = React.forwardRef((props, ref) => {
  console.log('WrapperCell');
  return (
    <MemoCell
      {...props}
      ref={ref}
    />
  );
});

export default WrapperCell;
