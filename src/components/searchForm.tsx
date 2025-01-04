import React from "react";

const SearchForm = () => {
  return (
    <div className="-mt-12 z-50 mx-auto relative border-white/12 flex w-[92%] max-w-[68rem] flex-col gap-4 rounded-3xl border-0 bg-white p-6 shadow lg:w-auto lg:flex-row lg:rounded-full lg:p-10 dark:bg-gray-800 dark:border-gray-700">
      <div className="lg:flex-1">
        <button className="flex w-full items-center justify-between px-4 py-3 text-sm shadow rounded-full border border-white/12 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
          <span>Italy, Romania</span>
          <span>$</span>
        </button>
      </div>
      <div className="lg:flex-1">
        <input
          type="datetime-local"
          className="w-full cursor-pointer rounded-full border border-white/12 px-4 py-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        />
      </div>
      <div className="lg:flex-1">
        <input
          type="datetime-local"
          className="w-full cursor-pointer rounded-full border border-white/12 px-4 py-3 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
        />
      </div>
      <div className="lg:flex-1">
        <button className="flex w-full items-center justify-between px-4 py-3 text-sm shadow rounded-full dark:bg-gray-700 dark:text-gray-300">
          <span>1 Room, 2 Guests</span>
        </button>
      </div>
      <div className="lg:flex-1">
        <button className="w-full bg-blue-600 px-4 py-3 text-center text-sm text-white rounded-full shadow dark:bg-blue-500">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
