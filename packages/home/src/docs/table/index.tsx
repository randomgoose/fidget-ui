import { Table, TableCell, TableRow, TableHeader, TableBody, TableHead } from 'fidget-ui';
import { docStyle } from '../styles';

const { AutoLayout } = figma.widget;

const data = [
  {
    id: 'INV001',
    status: 'Paid',
    method: 'Credit Card',
    amount: '$250.00',
  },
  {
    id: 'INV002',
    status: 'Pending',
    method: 'PayPal',
    amount: '$150.00',
  },
  {
    id: 'INV003',
    status: 'Unpaid',
    method: 'Bank Transfer',
    amount: '$350.00',
  },
  {
    id: 'INV004',
    status: 'Paid',
    method: 'Credit Card',
    amount: '$450.00',
  },
  {
    id: 'INV005',
    status: 'Paid',
    method: 'PayPal',
    amount: '$550.00',
  },
  {
    id: 'INV006',
    status: 'Pending',
    method: 'Bank Transfer',
    amount: '$200.00',
  },
  {
    id: 'INV007',
    status: 'Unpaid',
    method: 'Credit Card',
    amount: '$300.00',
  },
];

export default function TableDoc() {
  return (
    <AutoLayout {...docStyle}>
      <Table width={'fill-parent'}>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((datum) => (
            <TableRow key={datum.id}>
              <TableCell>{datum.status}</TableCell>
              <TableCell>{datum.method}</TableCell>
              <TableCell>{datum.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AutoLayout>
  );
}
