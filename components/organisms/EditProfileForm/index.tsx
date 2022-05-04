import Image from "next/image";
import React from "react";
import Input from "../../atoms/Input";

export default function EditProfileForm() {
  return (
    <form action="">
      <div className="photo d-flex">
        <div className="position-relative me-20">
          <img
            src="/img/avatar-1.png"
            width="90"
            height="90"
            className="avatar img-fluid"
          />
          <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
            <Image src="/icon/ic-delete.svg" width={24} height={24} />
          </div>
        </div>
        <div className="image-upload">
          <label htmlFor="avatar">
            <Image src={"/icon/ic-upload.svg"} width={95} height={95} />
          </label>
          <input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <Input
        type="text"
        id="name"
        name="name"
        htmlFor="name"
        title="Full Name"
        placeholder="Enter your name"
      />

      <Input
        type="email"
        id="Email"
        name="Email"
        htmlFor="Email"
        title="Full Email"
        placeholder="Enter your Email"
      />

      <Input
        type="text"
        id="Phone"
        name="Phone"
        htmlFor="Phone"
        title="Full Phone"
        placeholder="Enter your Phone"
      />

      <div className="button-group d-flex flex-column pt-50">
        <button
          type="submit"
          className="btn btn-save fw-medium text-lg text-white rounded-pill"
          role="button"
        >
          Save My Profile
        </button>
      </div>
    </form>
  );
}
