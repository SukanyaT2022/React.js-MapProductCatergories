import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Test2 = () => {

  const [jewelery,setJewelry] = useState([])
  const [womenClothes,setWomenClothes] = useState([])
  const [electronics,setElectronics] = useState([])
  const categoryArray = ["jewelery","women's clothing","electronics" ] // have to be the same key valu on api

  useEffect(() => {
    categoryArray && categoryArray.map((cat)=>{
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
    .then((res)=>res.json())
    .then((data)=>{
   console.log(data)
  //if else 'jewelry' inside '' have to be the same like key value pair in api
  cat === "jewelery"?setJewelry(data.slice(0,4)):
  cat === "electronics"?setElectronics(data.slice(0,4)):
  cat === "women's clothing"&&setWomenClothes(data.slice(0,4))
  }
  )  
})//close map tag 
  },[]);

return(
  <>
  {/* wrppaer */}
 <div className=" w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-1 lg:space-x-2 md:space-y-2 mt-20">
  {/* mainbox smallbox */}
        <div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
          {/* box1 */}
   
    {jewelery && jewelery.map((val)=>(
      <div key = {val.id}className='m-auto text-center'>
              <Link to={`/detail/${val.id}`}>
              <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' />
              <p className='pb-2'>{val.title}</p>
                <p className='md:mb-2'>{val.price}</p>
            </Link>
            </div>
      ))}
    
      </div>

{/* box2 */}
<div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
   
    {womenClothes && womenClothes.map((val)=>(
            <div key = {val.id} className='m-auto text-center'>
                     <Link to={`/detail/${val.id}`}>
              <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' />
              <p className='pb-2'>{val.title}</p>
                <p className='md:mb-2'>{val.price}</p>
                </Link>
            </div>
      ))}
  
      </div>

{/* box3 */}
<div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">

    {electronics && electronics.map((val)=>(
            <div key = {val.id}  className='m-auto text-center'>
               <Link to={`/detail/${val.id}`}>
              <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' />
              <p className='pb-2'>{val.title}</p>
                <p className='md:mb-2'>{val.price}</p>
                </Link>
            </div>
      ))}
 
      </div>
      </div>
  
  </>
)
};

export default Test2;


// import React, { useEffect, useState } from 'react';

// const Test2 = () => {
//   const [jewelry, setJewelry] = useState([]);
//   const [womenClothes, setWomenClothes] = useState([]);
//   const [electronics, setElectronics] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/category/jewelery')
//       .then((res) => res.json())
//       .then((data) => setJewelry(data.slice(0, 4)));

//     fetch('https://fakestoreapi.com/products/category/electronics')
//       .then((res) => res.json())
//       .then((data) => setElectronics(data.slice(0, 4)));

//     fetch("https://fakestoreapi.com/products/category/women's clothing")
//       .then((res) => res.json())
//       .then((data) => setWomenClothes(data.slice(0, 4)));
//   }, []);

//   return (
//     <>
//       <div className="w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-1 lg:space-x-2 md:space-y-2 mt-20">
//         {/* box1 */}
//         <div className="bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
//           {jewelry.map((val) => (
//             <div key={val.id} className='m-auto text-center'>
//               <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' alt={val.title} />
//               <p className='pb-2'>{val.title}</p>
//               <p className='md:mb-2'>{val.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* box2 */}
//         <div className="bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
//           {electronics.map((val) => (
//             <div key={val.id} className='m-auto text-center'>
//               <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' alt={val.title} />
//               <p className='pb-2'>{val.title}</p>
//               <p className='md:mb-2'>{val.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* box3 */}
//         <div className="bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
//           {womenClothes.map((val) => (
//             <div key={val.id} className='m-auto text-center'>
//               <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' alt={val.title} />
//               <p className='pb-2'>{val.title}</p>
//               <p className='md:mb-2'>{val.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Test2;

