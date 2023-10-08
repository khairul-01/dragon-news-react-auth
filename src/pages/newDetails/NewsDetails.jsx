import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import Navbar from "../shared/navbar/Navbar";


const NewsDetails = () => {

   const {id} = useParams();
   return (
      <div>
         <Header></Header>
         <Navbar></Navbar>
         <div className="grid md:grid-cols-4">
            <div className="col-span-3">
               <h1 className="text-3xl">Dragon News</h1>
               <p>{id}</p>
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
         </div>
      </div>
   );
};

export default NewsDetails;