import {   useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast} from "react-toastify";
import customFetch from "../../utils";
import { useCreateTask } from "../../reactQueryHooks";

export default function AddForm() {
  const [item, setItem] = useState("");
  const {AddTask,isPending} = useCreateTask();
  const handleSubmitItem = (e) => {
    e.preventDefault();
    AddTask(item,{
      onSuccess: ()=>{
        setItem("")
      }
    })
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl py-7">Grocery Bud</h1>
        <form className="w-full" onSubmit={handleSubmitItem}>
          <input
            type="text"
            className="border-2 rounded-md border-gray-200 w-9/12 h-11 px-4"
            value={item}
            onChange={(e) => {
              setItem(e.target.value)
              
            }
            }
          />
          <button
            type="submit"
            className="w-3/12 xs:px-0.5 sm:px-3 text-white font-normal rounded-r-lg -ms-1"
            disabled={isPending}
            style={{backgroundColor:isPending?"#374151":"#60a5fa"}}
          >
            Add Item
          </button>
        </form>
      </div>
    </>
  );
}
