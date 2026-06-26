const thStyle = "border-2 py-2 px-4 text-center";
const oddtd = "bg-sky-500/25";

const headItems = ["ID", "NAME", "AGE", "CITY"];

const TableHeadRow = () => {
  return (
    <tr>
      {headItems.map((item) => (
        <th className={`${thStyle} ${oddtd}`}>{item}</th>
      ))}
    </tr>
  );
};

export default TableHeadRow;
