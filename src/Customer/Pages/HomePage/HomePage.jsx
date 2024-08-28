import React from "react";
import MainCarosel from "../../Customer/HomeCarosel/MainCarosel";
import HomeSectionCarosal from "../../Customer/HomeSectionCarosal/HomeSectionCarosal";
import { mens_kurta } from "../../../Data/mens_kurta";
import { mens_shirt } from "../../../Data/mens_shirt";
import { men_jeans } from "../../../Data/men_jeans";
import { mens_Pants } from "../../../Data/men_pants";
import { women_saree } from "../../../Data/women_sares";
import { mens_Shoes } from "../../../Data/shoes";
import { women_jeans } from "../../../Data/women_jeans";
import { women_dress } from "../../../Data/women_dress";
import { women_top } from "../../../Data/women_top";


const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-15 lg:px-5">
        <HomeSectionCarosal data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosal data={men_jeans} sectionName={"Men's Jeans"} />
        <HomeSectionCarosal data={mens_shirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarosal data={mens_Pants} sectionName={"Men's Pants"} />
        <HomeSectionCarosal data={mens_Shoes} sectionName={"Men's Shoes"} />
        <HomeSectionCarosal data={women_saree} sectionName={"Women's Sares"} />
        <HomeSectionCarosal
          data={women_dress}
          sectionName={"Women's Lahnga Dress"}
        />
        <HomeSectionCarosal data={women_jeans} sectionName={"Women's Jeans"} />
        <HomeSectionCarosal data={women_top} sectionName={"Women's Top"} />
      </div>
    </div>
  );
};

export default HomePage;
