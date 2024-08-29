// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from 'axios'
import { Link } from "react-router-dom";

function Course() {

  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log(error);        
      }
    }
    getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-48 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delightrd to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 w-[750px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nam reprehenderit cupiditate debitis maxime saepe eligendi, minus
            cumque aliquid repudiandae illum ipsam corrupti beatae. Similique
            dolorum consequuntur tempora aliquam itaque.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-3 py-2 rounded hover:bg-pink-800 transition-200">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
