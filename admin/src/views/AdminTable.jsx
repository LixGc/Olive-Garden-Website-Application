import { useDispatch, useSelector } from "react-redux";
import { AdminRow } from "../components/AdminRow";
import { useEffect, useState } from "react";
import { fetchAdmins } from "../store/actions/actionCreators";
import { Loader } from "../components/Loader";
export const AdminTable = () => {
  const { admins } = useSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAdmins());
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <section className="w-100">
      <h1 style={{ textAlign: "center" }}>Admin's List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {!loading ? (
            admins.map((el, index) => {
              return <AdminRow admin={el} key={index} idx={index} />;
            })
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </section>
  );
};
