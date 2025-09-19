import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";

function Freebooks() {

  const [book, setBook] = useState([]);
  useEffect(() => {
    const fetchbook = async () => {
      try {
        const res = await axios.get("http://localhost:3003/book");
        console.log(res.data.filter((data) => data.category === "free"));
        setBook(res.data.filter((data) => data.category === "free"))
      } catch (error) {
        console.log(error)
      }
    };
    fetchbook();
  }, []); 


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-25 px-5 py-2">
        <div>
          <h1 className="font-semibold text-xl pb-2">free offered courses</h1>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} isHomePage={true} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebooks;