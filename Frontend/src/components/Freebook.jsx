import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useEffect, useState } from "react";

function Freebook() {
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/lists.json");
        const data = await response.json();
        const filtered = data.filter((item) => item.category === "Free");
        
        // Simulate a 1-second delay for loading
        setTimeout(() => {
          setFilterData(filtered);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error loading list:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
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

  // Skeleton Loader
  const skeletonLoader = (
    <div className="slider-container mb-9 w-[95%] md:w-full m-auto">
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-gray-300 h-40 rounded-md animate-pulse"></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2 mt-5">
          Free Offered Courses
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          impedit magni atque cum sit quas animi, ea laudantium placeat?
          Perspiciatis.
        </p>
      </div>

      {loading ? (
        skeletonLoader
      ) : (
        <div className="slider-container mb-9 w-[95%] md:w-full m-auto">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Freebook;