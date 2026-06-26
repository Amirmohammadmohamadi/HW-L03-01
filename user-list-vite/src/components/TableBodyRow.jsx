const tdStyle = "border-2 py-2 px-4 text-center";
const oddtd = "bg-sky-500/25";

const TableBodyRow = ({ user_list }) => {
  return user_list.map((item) => (
    <tr key={`tr-${item.id}`} className={item.id % 2 === 0 ? oddtd : ""}>
      {Object.values(item).map((value) => (
        <td className={tdStyle}>{value}</td>
      ))}
    </tr>
  ));
};

export default TableBodyRow;
