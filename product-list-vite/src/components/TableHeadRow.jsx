const thStyle = "text-[18px] text-center border border-blue-500 px-4 py-2.5 ";

const TableHeadRow = () => {
  return (
    <tr>
      <th className={thStyle}>ID</th>
      <th className={thStyle}>NAME</th>
      <th className={thStyle}>PRICE</th>
      <th className={thStyle}>DESCRIPTION</th>
    </tr>
  );
};

export default TableHeadRow;
