import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
   return (
      <div>
         {/* login with */}
         <div className='p-4 space-y-3 mb-6'>
            <h1 className="text-2xl font-semibold">Login With</h1>
            <button className="btn btn-outline w-full">
               <FaGoogle></FaGoogle>
               Google
            </button>
            <button className="btn btn-outline w-full">
               <FaGithub />
               GitHub
            </button>
         </div>
         {/* Find us on */}
         <div className='p-4 mb-6'>
            <h1 className="text-2xl font-semibold mb-3">Find Us On</h1>
            <a className='border rounded-t-lg flex p-4 items-center' href="">
               <FaFacebook className='mr-2'></FaFacebook>
               FaceBook
            </a>
            <a className='border-x flex p-4 items-center' href="">
               <FaTwitter className='mr-2'></FaTwitter>
               Twitter
            </a>
            <a className='border rounded-b-lg flex p-4 items-center' href="">
               <FaInstagram className='mr-2'></FaInstagram>
               Instagram
            </a>
         </div>
         {/* Q zone */}
         <div className='p-4 space-y-3 mb-6'>
            <h1 className="text-2xl font-semibold">Q-Zone</h1>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
         </div>
      </div>
   );
};

export default RightSideNav;