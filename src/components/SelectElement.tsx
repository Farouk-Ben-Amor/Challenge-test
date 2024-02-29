import React from "react";

type ValidOption = { id: string; name: string };
const SelectElement = ({ label, register, options, handleSubmit }) => (
  <div className="flex flex-col">
    <label className="font-light text-secondaryDarkGrey p-2" htmlFor={label}>
      {label}
    </label>
    <select
      {...register}
      onChange={handleSubmit}
      name={label}
      className="mx-2 p-2 border bg-bgPrimary border-primaryDark max-w-full md:max-w-none rounded-md cursor-pointer"
    >
      {options.map((option: ValidOption) => (
        <option
          className="font-normal text-secondaryDarkGrey bg-bgPrimary"
          key={option.id}
          value={option.id}
        >
          {option.name}
        </option>
      ))}
    </select>
  </div>
);

export default SelectElement;
