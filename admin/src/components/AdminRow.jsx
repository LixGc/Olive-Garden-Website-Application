export const AdminRow = ({ admin, idx }) => {
  return (
    <tr>
      <td scope="row">{idx + 1}.</td>
      <td scope="row">{admin.username}</td>
      <td scope="row">{admin.email}</td>
      <td scope="row">{admin.phoneNumber}</td>
      <td scope="row">{admin.address}</td>
      <td scope="row">{admin.createdAt}</td>
    </tr>
  );
};
