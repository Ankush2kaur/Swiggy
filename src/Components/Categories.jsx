import { useEffect, useState } from "react";
import "./Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

const Categories = () => {
  const [data, setData] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setData(data.categories))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <p className="heading mt-4">Order our best food options</p>

        <div className="row">
          <Slider {...settings}>
            {data.map((val, key) => {
              return (
                <>
                  <div className="col-md-2 mb-5">
                    <div className="text-center">
                      <h5 key={key}>{val.strCategory}</h5>
                    </div>

                    <span>
                      <img
                        src={val.strCategoryThumb}
                        style={{ height: "150px", width: "200px" }}
                      />
                    </span>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="container-fluid p-0" style={{marginTop:"100px"}}>
        <img src="Images\App_download_banner.png" style={{height:"300px", width:"100%"}}/>
      </div>
    </>
  );
};

export default Categories;
