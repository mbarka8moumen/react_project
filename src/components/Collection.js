

import bijoux1 from '../assets/T1.jpg'
import bijoux2 from '../assets/T2.jpg'
import bijoux3 from '../assets/T3.jpg'
import bijoux4 from '../assets/T4.jpg'
import Annonce_video from '../Video/VIDEO5.mp4'

import '../styles/Collection.css';


function Collection(){
    return(
      
  <>
  <div className='Barre'>
  <div className='collection_img1'>
  <img src={bijoux1} alt="bijoux1" className="circular-img" />
  <img src={bijoux2} alt="bijoux2" className="circular-img" />
  </div>
  <div className='Collection'>
    <p>DIAMAND COLLECTION</p>
    <h2>The Ultimate Sparkle</h2>
  </div>
  <div className='collection_img2'>
  <img src={bijoux3} alt="bijoux3" className="circular-img" />
  <img src={bijoux4} alt="bijoux4" className="circular-img" />
  </div>
  </div>
  
  <div className='Annoce_video'>
   
    <video src={Annonce_video} type="video/mp4" autoPlay 
    loop 
    muted 
    playsInline/>
  </div>
  {/* <p style={{position:'absolute', top:'1000px', left:'200px'}}>lorem</p> */}
  </>
    );
}
export default Collection;