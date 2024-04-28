import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLoaderData } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const allData = useLoaderData();
  const onlyMyListData = allData.filter((item) => item.email === user.email);
  const [myListData, setMyListData] = useState(onlyMyListData);

  // handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5050/touristspot/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            // Now Update State
            const reaminingMyListData = myListData.filter(
              (item) => item._id !== id
            );
            setMyListData(reaminingMyListData);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  return (
    <>
      <div className="my-8 text-center max-w-4xl mx-auto space-y-4 p-4">
        <h2 className="text-2xl font-oswald">My Tourists-Spots List Table</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL-No</th>
              <th>Tourist-Spot-Name</th>
              <th>Country</th>
              <th>Location</th>
              <th>Seasonality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myListData.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.country_name}</td>
                <td>{item.location}</td>
                <td>{item.season}</td>
                <td className="flex gap-2">
                  <Link
                    to={`/touristspot/details/${item._id}`}
                    className="btn btn-info btn-sm text-white"
                  >
                    <IoEyeOutline />
                  </Link>
                  <Link
                    to={`/touristspot/update/${item._id}`}
                    className="btn btn-warning btn-sm text-white"
                  >
                    <FaRegEdit />
                  </Link>
                  <Link
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-error btn-sm text-white"
                  >
                    <MdDelete />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyList;
