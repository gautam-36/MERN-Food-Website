import React from "react";
import { CiForkAndKnife } from "react-icons/ci";

<<<<<<< HEAD
const FilterProduct = ({ category, onClick, isActive }) => {
=======
const FilterProduct = ({category,onClick,isActive}) => {
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5  rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`}>
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};

<<<<<<< HEAD
export default FilterProduct;
=======
export default FilterProduct;
>>>>>>> e6e82dc8f6524e4c16e3aa266baecb4a77dee8d7
