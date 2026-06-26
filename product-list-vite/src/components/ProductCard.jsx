import TableBodyRow from "./TableBodyRow";
import TableHeadRow from "./TableHeadRow";

const tdStyle = "text-xs text-center border border-blue-500 px-4 py-2.5";

const ProductCard = ({ list }) => {
  return (
    <div className="mx-auto w-fit lin">
      <table>
        <thead>
          <TableHeadRow />
        </thead>
        <tbody>
          <TableBodyRow list={list} />
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;
