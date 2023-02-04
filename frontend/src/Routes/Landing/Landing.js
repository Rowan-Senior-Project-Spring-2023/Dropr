import Navbar from "../Root/Navbar/Navbar";
import Hero from "./Hero/Hero";
import PartneredBrands from "./Partnered Brands/PartneredBrands";
import PartneredDrops from "./Partnered Drops/PartneredDrops";
import TrendingDrops from "./Trending Drops/TrendingDrops";

const Landing = () => {
  return (
    <>
      <Hero />
      <TrendingDrops />
      <PartneredBrands />
      <PartneredDrops />
    </>
  );
};

export default Landing;
