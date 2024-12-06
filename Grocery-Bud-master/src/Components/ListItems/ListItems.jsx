import React from "react";
import SingleItem from "../SingleItems/SingleItem.jsx";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../../utils.js";
import { MagnifyingGlass } from "react-loader-spinner";
import { useFetchAllTasks } from "../../reactQueryHooks.jsx";

export default function ListItems() {
  const  {isLoading, data, error, isError } = useFetchAllTasks();
  console.log(error);
  console.log(data);
  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center">
        <MagnifyingGlass
          visible={true}
          height="90"
          width="90"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-20 bg-red-200/70 flex justify-center items-center mt-3 rounded-lg">
        <p className="text-red-600 font-bold">{error.response.data}</p>
      </div>
    );
  }
  return (
    <div className=" mt-4">
      {data?.taskList?.map((product) => {
        return (
          <SingleItem
            key={product.id}
            id={product.id}
            isDone={product.isDone}
            title={product.title}
          />
        );
      })}
    </div>
  );
}
