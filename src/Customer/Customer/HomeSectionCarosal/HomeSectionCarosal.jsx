import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosal = ({ data, sectionName }) => {
  // const [activeIndexx, setActiceIndexx] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  // const slidePrev = () => {
  //   setActiceIndexx(activeIndexx - 1);
  // };
  // const slideNext = () => {
  //   setActiceIndexx(activeIndexx + 1);
  // };

  // const syncActiveIndex = ({ item }) => setActiceIndexx(item);
  const items = data.map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableDotsControls
        />
        <div>
          {/* {activeIndexx !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 HomeSectionCarosal"
            onClick={slideNext}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )}

        {activeIndexx !== 0 && (
          <Button
            variant="contained"
            className="z-50 HomeSectionCarosal1"
            onClick={slidePrev}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
        )} */}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCarosal;
