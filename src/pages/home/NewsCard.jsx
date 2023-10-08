import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

   const { title, image_url, details, _id } = news;
   return (
      <div>
         <div className="card bg-base-100 shadow-xl mb-12">
            <div className="card-body">
               <h2 className="card-title">{title}</h2>
            </div>
            <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
            <div className="my-4">
               {details.length>200 ? <p>{details.slice(0,200)} <Link className='font-bold text-blue-500' to={`/news/${_id}`}>Read more...</Link></p> : <p>{details}</p>}
            </div>
         </div>
      </div>
   );
};

export default NewsCard;

NewsCard.propTypes = {
   news: PropTypes.object,
}