import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

   const news = useLoaderData();

   console.log(news);
   return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* leftside nav container */}
            <div className="border">
               <LeftSideNav></LeftSideNav>
            </div>

            {/* news container */}
            <div className="md:col-span-2 border">
               <h1 className="text-3xl">Dragon News Home</h1>
               {
                  news.map(aNews => <NewsCard
                  key={aNews._id}
                  news = {aNews}
                  ></NewsCard>)
               }
            </div>

            {/* right side Nav container */}
            <div className="border">
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default Home;