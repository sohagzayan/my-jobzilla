import React from "react";

const SolutionWriting = () => {
  return (
    <div className="md:w-[60%] w-[90%] mx-auto mt-6">
      <div className="bg-white shadows w-[300px] p-3 rounded-md ">
        <h3 className="text-[#D16136] font-semibold mb-3">Solution Writing</h3>
        <textarea
          name=""
          id=""
          cols="33"
          rows="6"
          placeholder="Write Solution"
          className="border-[1px] border-[#d162364b] rounded-md p-2 outline-[#D16136]"
        ></textarea>
      </div>
    </div>
  );
};

export default SolutionWriting;
