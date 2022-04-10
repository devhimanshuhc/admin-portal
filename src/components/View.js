import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export default function View({ userData, deleteData, access }) {
  return userData.map((data) => (
    <tr key={data.age}>
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.age}</td>
      <td>{data.bloodGroup}</td>
      {access === "super admin" ? (
        <td className="delete-btn" onClick={() => deleteData(data.age)}>
          <Icon icon={trash} />
        </td>
      ) : null}
    </tr>
  ));
}
