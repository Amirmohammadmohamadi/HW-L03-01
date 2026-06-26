const tdStyle = "text-xs text-center border border-blue-500 px-4 py-2.5";

const TableBodyRow = ({ list }) => {
  return list.map((item) => (
    <tr key={`tr-${item.id}`}>
      <td className={tdStyle}>{item.id}</td>
      <td className={tdStyle}>{item.name}</td>
      <td className={tdStyle}>{item.price}</td>
      <td className={tdStyle}>{item.description}</td>
    </tr>
  ));
};

export default TableBodyRow;
