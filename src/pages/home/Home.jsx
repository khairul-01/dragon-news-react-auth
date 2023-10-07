import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
   return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border">
               <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2 border">
               <h1 className="text-4xl">News Coming soon..</h1>
            </div>
            <div className="border">
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default Home;