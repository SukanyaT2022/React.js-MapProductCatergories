import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [womenClothes,setWomenClothes] = useState([]);
const [jewelery,setJewelery] = useState([]);
const [electronics,setElectronics] = useState([]);

const catergoryArray = ["electronics", "jewelery", "women's clothing"]
//inside [] have to come from api catergory section

useEffect(()=>{
  catergoryArray && catergoryArray.map((cat)=>{
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      // if else modern
        cat === "electronics"?setElectronics(data.slice(0,4)):
        cat === "jewelery"?setJewelery(data.slice(0,4)):
        cat === "women's clothing"&&setWomenClothes(data.slice(0,4))
      }
      )
    })    //Map close bracket here
},[]);


  
  return (
    <div>
      <div className=" w-[80%] m-auto grid lg:grid-cols-3 md:grid-cols-1 lg:space-x-2 md:space-y-2 mt-20">
        <div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
    {womenClothes && womenClothes.map((val)=>(
          <Link to={`detail/${val.id}`}>
            {/* `detail/${val.id} detail comfrom path on route on home page */}
            <div className='m-auto text-center'>
                <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2'/>
                <p className='pb-2'>{val.title}</p>
                <p className='md:mb-2' >{val.price}</p>
              </div>
          </Link>
        ))}
          {/* <div className='m-auto text-center'>
            <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHwxfDB8fHww" className='w-[150px] h-[150px]   ' />
            <p className=''>Product Name</p>
            <p className='pb-2'>$10</p>
          </div>
       
          <div className='m-auto text-center'>
            <img src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWlufGVufDB8MXwwfHx8MA%3D%3D" className='w-[150px] h-[150px] '  />
            <p>Product Name</p>
            <p>$10</p>
          </div>
   
          <div className='m-auto text-center'>
            <img src="https://images.unsplash.com/photo-1580436541340-36b8d0c60bae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8MXwwfHx8MA%3D%3D"  className='w-[150px] h-[150px] '/>
            <p>Product Name</p>
            <p>$10</p>
          </div>

           */}
        </div>

        {/* middle box2 */}
      <div className="  grid grid-cols-2 grid-row-2 py-5">
        {jewelery && jewelery.map((val)=>(
          <Link to="detail/5">
            <div className='m-auto text-center'>
              <img src={val.image} className='lg:w-[120px] lg:h-[120px] md:w-[200px] md:h-[200px] m-auto object-contain md:mb-2' />
              <p className=''>{val.title}</p>
              <p className='pb-2'>{val.price}</p>
            </div>
          </Link>
        ))}
      </div>



{/* main box 3 */}

<div className=" bg-yellow-200 grid grid-cols-2 grid-row-2 py-5">
{electronics && electronics.map((val)=>(
<div className='m-auto text-center'>
  <img src={val.image} className='w-[150px] h-[150px] ' />
  <p className=''>{val.title}</p>
  <p className='pb-2'>{val.price}</p>
</div>
))}

</div>
{/* end box 3 */}
      </div>
      </div>  
  );
};

export default Home;
