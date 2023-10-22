import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div>
      <div className=" container mx-auto w-[1000px] pt-10 justify-center items-center ">
        <h2 className=" flex justify-center mb-10 text-4xl drop-shadow-sm">CRUD APP</h2>

        <table className="table">
          <thead>
            <tr className="text-3xl ">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            <br/>
            <br/>
            <br/>
          </thead>
         
          <tbody className="mt-10">
            {users.map((user, index) => (
              <tr key={index} className="text-2xl">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="mr-9">
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-secondary ms-4"
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
              
            ))}
            <br />
            <br /><br />
                    <Link to="/create">
          <button className="btn btn-primary my-3">Create+</button>
        </Link>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
