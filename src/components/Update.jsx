import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div>
    
      <div className="container text-3xl mx-auto flex w-96 rounded-full ustify-center items-center pt-32">
        <div className="w-96 border bg-base-300 text-slate-500 p-5">
          <h3 className="text-3xl text-amber-950 items-center flex justify-center">Update User</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full mb-4">
              <label htmlFor="name" className="mt-6 text-2xl mb-1">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="enter name"
                className="input input-bordered w-full from-control"
                value={uname}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full mb-4">
              <label htmlFor="name" className="text-2xl mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                className="input input-bordered w-full from-control"
                value={uemail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className="btn btn-primary  ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
