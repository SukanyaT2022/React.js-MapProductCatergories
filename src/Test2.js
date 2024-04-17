import React, { useEffect, useState } from 'react';

const Test2 = () => {

const [jewelery, setJewelery] = useState([])
const [electronic, setElectronic] = useState([])
const [womenClothes, setWomenClothes] = useState([])
const catergoryArray =["jewelery", "electronics", "women's clothing"]
//have to be the same as api key value pair

    useEffect(() => {
        catergoryArray && catergoryArray.map((cat)=>(
          fetch(`https://fakestoreapi.com/products/category/${cat}`)
        .then(res=>res.json())
        .then(json=>console.log(json))
        ))
      },[]);

  return (
    <div>
      {/* <div className="bg-green-300 w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-1 lg:space-x-2 md:space-y-2 mt-20">
        <div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
          <div className="m-auto text-center">
            <img src={} className="w-[150px] h-[150px] "/>
            <p>{}</p>
            <p>{}</p>
          </div>
        </div>
      </div>


      <div className="bg-green-300 w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-1 lg:space-x-2 md:space-y-2 mt-20">
        <div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
          <div className="m-auto text-center">
            <img src={} className="w-[150px] h-[150px] "/>
            <p>{}</p>
            <p>{}</p>
          </div>
        </div>
      </div>

      <div className="bg-green-300 w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-1 lg:space-x-2 md:space-y-2 mt-20">
        <div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
          <div className="m-auto text-center">
            <img src={} className="w-[150px] h-[150px] "/>
            <p>{}</p>
            <p>{}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Test2;
