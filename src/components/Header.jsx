import React from 'react';
import { CgProfile } from 'react-icons/cg';

export default function Header({ setOpenModal }) {
  return (
    <div className="flex justify-center items-center gap-x-5">
      <div>
        <label className="text-2xl font-semibold m-2 text-slate-800">
          Create a new Poll :
        </label>
        <button
          className="px-4 py-2 bg-teal-600 rounded-lg text-white font-bold hover:bg-teal-500"
          onClick={() => setOpenModal(true)}
        >
          Add New Poll
        </button>
      </div>
      <div>
        <CgProfile size={30} className="cursor-pointer" />
      </div>
    </div>

  );
}
