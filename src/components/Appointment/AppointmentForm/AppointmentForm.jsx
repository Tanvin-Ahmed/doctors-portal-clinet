import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40rem"
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({appointmentOn, modalIsOpen, closeModal }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-brand text-center">appointmentOn</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" className="form-control my-2" {...register("name")} />
          {errors.name && <span className="text-danger">This field is required</span>}
          <input placeholder="Phone Number" className="form-control my-2" {...register("phone", { required: true })} />
          {errors.phone && <span className="text-danger">This field is required</span>}
          <input placeholder="Email" type="email" className="form-control my-2" {...register("email", { required: true })} />
          {errors.email && <span className="text-danger">This field is required</span>}

          <input type="submit" className="btn btn-color mt-5" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
