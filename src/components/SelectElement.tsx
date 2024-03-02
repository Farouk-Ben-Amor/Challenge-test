import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type ValidOption = { id: string; name: string };

const SelectElement = ({ label, register, options, handleSubmit }) => (
  <div className="flex flex-col relative">
    <label className="font-light text-secondaryDarkGrey p-2" htmlFor={label}>
      {label}
    </label>
    <div className="relative w-full">
      <select
        {...register}
        onChange={handleSubmit}
        name={label}
        className="w-full p-2 border bg-bgPrimary border-primaryDark rounded-md cursor-pointer appearance-none"
      >
        <option value="" className="font-normal text-secondaryDarkGrey bg-bgPrimary">Select</option>
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
      <IoMdArrowDropdown className="absolute top-1/2 transform -translate-y-1/2 right-2 text-primaryDark pointer-events-none z-10" />
    </div>
  </div>
);

export default SelectElement;
