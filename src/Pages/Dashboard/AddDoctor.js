import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const imageStorageKey = "b51df7d4eadb3251568d934ed07cdd04";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            img: img,
          };

          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log(inserted);
              if (inserted.success) {
                toast("data added");
              } else {
                toast("data added");
              }
            });

          console.log(doctor);
        }
      });

    console.log(data);
  };

  return (
    <div className="text-start">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs mx-auto"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-xs mx-auto mb-8">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select
            class="select w-full input-bordered max-w-xs"
            {...register("speciality")}
          >
            {services?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs mx-auto">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Your Name"
            className="input w-full max-w-xs mx-auto"
            {...register("image", {
              required: {
                value: true,
                message: "Photo is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
