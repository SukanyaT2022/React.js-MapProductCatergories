import React, { useEffect } from 'react';
import { FaStar, FaCheck } from 'react-icons/fa';
import { Button, Modal, Select } from 'flowbite-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState('md');
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    id &&
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
  }, []);

  return (
    <div>
      <div className="mainBoxProductDetail flex  flex-wrap my-10 md:p-0 px-5 md:space-y-0  space-y-3">
        {/* start image section 1 */}
        {data && (
          <div className="lg:w-[40%] md:w-[40%] w-[100%]">
            <img
              src={data.image}
              className="lg:w-[80%] md:w-[80%] m-auto mt-10"
            />
            <div className="md:flex hidden items-center justify-center space-x-3 my-7">
              <img src={data.image} className="lg:w-[18%] md:w-[18%] " />
              <img src={data.image} className="lg:w-[18%] md:w-[18%]" />
              <img src={data.image} className="lg:w-[18%] md:w-[18%]" />
              <img src={data.image} className="lg:w-[18%] md:w-[18%]" />
            </div>
          </div>
        )}
        {/* end image section 1 */}

        {/* start middle box 2 */}
        <div className="mainboxMiddle lg:w-[40%] md:w-[35%] w-[100%] lg:pl-0  lg:p-10 md:p-5 space-y-2 md:pt-10">
          <h4>Visit the TOEDNNQI Store</h4>
          <h3 className="font-bold">{data && data.title}</h3>
          {/* rating */}
          <div className="mainStarRating flex items-center space-x-2">
            <span>4.4</span>
            <div className="flex text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <span className="lg:pl-5 md:pl-0">
              12,222<span className="ml-1">ratings</span>
            </span>
          </div>
          <div className="border-t-2 border-gray-400 opacity-50 "></div>
          {/* price */}
          <div className="flex  items-center py-3">
            <p className="lg:mr-3 md:mr-2">Price</p>
            <p className="lg:mr-3 md:mr-2 mr-2">$15</p>
            <FaCheck className="text-orange-500 md:mr-2" />
            <p className="text-blue-500">One Day Delivery</p>
          </div>

          {/* product description box */}
          <div className="mainBox flex mt-5">
            {/* box left */}
            <div className="font-bold">
              <p>Color</p>
              <p>Brand</p>
              <p>Product Dimensions</p>
            </div>
            {/* right box */}
            <div className="pl-10">
              <p>white</p>
              <p>CTT</p>
              <p>3*4</p>
            </div>
          </div>
        </div>
        {/* end box 2 */}

        {/* start box 3 */}
        <div className="lg:w-[20%] md:w-[25%] w-[100%] lg:p-5 lg:pl-0 md:pr-4 md:pt-5">
          <div className="border-2 border-gray-400 rounded-lg lg:p-5 md:p-2 space-y-2 p-5">
            <h2 className="font-bold text-2xl">$20</h2>

            <div className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              <p className="text-blue-500">One Day Delivery</p>
            </div>
            {/* start modal free return */}
            <div className="flex flex-wrap gap-4">
              <p
                onClick={() => setOpenModal(true)}
                className="hover:text-orange-500 hover:underline cursor-pointer text-blue-500 font-semibold"
              >
                Free Return
              </p>
              {/* <Button onClick={() => setOpenModal(true)} className='bg-white text-gray-700 focus:bg-white hover:bg-white custumButtonFreeReturn'>Free Return</Button> */}
            </div>
            <Modal
              show={openModal}
              size={modalSize}
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header>Free Return</Modal.Header>
              <Modal.Body>
                <div className="space-y-6 p-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    You can return this item for any reason: no shipping
                    charges. The item must be returned in new and unused
                    condition.
                  </p>
                </div>
              </Modal.Body>
            </Modal>

            {/* end modal */}
            <p className="lg:text-md md:text-sm">Free delivery Tomorrow.</p>
            <p className="text-green-500 font-bold text-lg ">In Stock</p>
            {/* dropdown quantity */}

            <select className="rounded-lg w-full">
              <option value="1" disabled>
                Quantity:
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {/* end dropdown qty */}
            <div>
              <button className="w-full block bg-[#F4D03F] font-bold text-sm mx-auto py-2 px-4 rounded-2xl my-5">
                Add to Cart
              </button>
              <button className="w-full block bg-orange-500 font-bold text-sm mx-auto py-2 px-4 rounded-2xl">
                Buy Now
              </button>
            </div>

            <div className="flex pt-5">
              <div className="lg:w-[60%] md:w-[40%] text-sm lg:mr-0 md:mr-2">
                Returns
              </div>
              <div className="text-sm text-blue-500 md:pl-0 pl-5">
                Eligible for Return, Refund or Replacement.
              </div>
            </div>
          </div>
        </div>
        {/* end last box left */}
      </div>
    </div>
  );
};

export default ProductDetail;
