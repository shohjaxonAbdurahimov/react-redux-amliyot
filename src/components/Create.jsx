import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./UserReducer";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };
  return (
    <div className="container m-auto flex w-96  justify-center items-center pt-32">
      <div className="w-96 border bg-base-300 text-slate-500 p-5">
        <h3 className="text-3xl text-orange-800" >Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control  w-full max-w-xs ">
            <label className="label">
              <span className="label-text text-3xl">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              className="input text-2xl input-bordered w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-3xl">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              className="input text-2 input-bordered w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn mt-14  btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
