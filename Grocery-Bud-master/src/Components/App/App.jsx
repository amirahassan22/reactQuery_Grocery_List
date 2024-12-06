import { useState } from "react";
import "./App.css";
import AddForm from "../AddForm/AddForm";
import { nanoid } from "nanoid";
import ListItems from "../ListItems/ListItems";
import { ToastContainer, toast, Bounce } from "react-toastify";


function App() {

  return (
    <>
      <section className="bg-white xs:w-full xl:w-5/12  mt-12 px-7 pb-12 rounded-md hover:shadow-xl">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          icon={true}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <AddForm />
        <ListItems
        />
      </section>
    </>
  );
}

export default App;
