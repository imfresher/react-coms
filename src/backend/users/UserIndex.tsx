import BackendLayout from 'layouts/BackendLayout' ;
// import TableHTML from 'components/table/TableHTML';
import Table from 'components/table';

const columns = [
  {
    name: 'resort',
    data: '',
    title: '',
  },
  {
    name: 'check',
    data: '',
    title: '',
  },
  {
    name: 'id',
    data: 'id',
    title: 'ID',
  },
  {
    name: 'name',
    data: 'name',
    title: 'Name',
  },
  {
    name: 'position',
    data: 'position',
    title: 'Position',
  },
  {
    name: 'department',
    data: 'department',
    title: 'Department',
  },
  {
    name: 'email',
    data: 'email',
    title: 'E-mail',
  },
  {
    name: 'experience',
    data: 'experience',
    title: 'Experience',
  },
  {
    name: 'status',
    data: 'status',
    title: 'Status',
  },
  {
    name: 'actions',
    data: '',
    title: 'Actions',
  },
];

const data = [
  { id: 1, name: 'Perfect Day Foods', position: 'Developer IOS', department: 'D-Tech', email: 'demo@domain.com', experience: '1 year' },
  { id: 2, name: 'Perfect Day Foods 2', position: 'Developer IOS', department: 'D-Tech', email: 'demo@domain.com', experience: '1 year' },
  { id: 3, name: 'Perfect Day Foods 3', position: 'Developer IOS', department: 'D-Tech', email: 'demo@domain.com', experience: '1 year' },
  { id: 5, name: 'Perfect Day Foods 5', position: 'Developer IOS', department: 'D-Tech', email: 'demo@domain.com', experience: '1 year' }
];

function UserIndex() {
  return (
    <BackendLayout>
      <Table
        columns={columns}
        data={data}
      />
    </BackendLayout>
  );
}

export default UserIndex;
