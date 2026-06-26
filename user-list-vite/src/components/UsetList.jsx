import { Fragment } from "react";
import TableHeadRow from "./TableHeadRow";
import TableBodyRow from "./TableBodyRow";

const UserList = ({ user_list }) => {
  return (
    <Fragment>
      <table className="border">
        <thead>
          <TableHeadRow />
        </thead>
        <tbody>
          <TableBodyRow user_list={user_list} />
        </tbody>
      </table>
    </Fragment>
  );
};

export default UserList;
