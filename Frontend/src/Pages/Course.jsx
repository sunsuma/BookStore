import { useEffect, useState } from "react";
// import list from '../../public/list.json'
import Card from "../components/Card";
import { Link } from "react-router-dom";
import axios from 'axios'


function Course() {
  const [book, setBook] = useState([])

  useEffect(()=>{
   const getBook = async() => {
    try {
      const res = await axios('http://localhost:3000/book');
      console.log(res);
      setBook(res.data);
    } catch (error) {
      console.log(error)
    }
   }
   getBook();
  },[])
  
  return (
    <div className="max-h-screen-2xl container mx-auto md:px-20 px-4">
      <div className="justify-center items-center text-center mt-5">
        <h1 className="font-semibold text-xl pb-2 mt-5">We're delighted to have you <span className="text-pink-500">Here!:)</span></h1>
        <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ad! Officia earum possimus numquam tempore ad aspernatur at quas facere sint nam alias voluptas minus illum eaque iusto distinctio dolore consequatur officiis qui, provident ut corporis. Odit labore minus officiis cum eos sapiente dolore iure pariatur repellendus. Obcaecati, fuga nisi?</p>
        <Link to={'/'}>
        <button className="bg-pink-500 rounded-md px-4 py-2 mt-6">Back</button>
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 m-auto">
          {book.map(item=>(
            <Card item={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Course;
