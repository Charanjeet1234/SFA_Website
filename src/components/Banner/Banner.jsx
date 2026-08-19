import React from 'react'
import "./Banner.css"
import { assets } from '../../assets/assets'
const Banner = ({pdfFileName}) => {
   const handleDownload = () =>
   {
    const pdfUrl = `/${pdfFileName}`;
    const link = document.createElement('a')
    link.href = pdfUrl;
    link.download = pdfFileName;
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
   }
  return (
    <div className="banner" id="banner">
     <img
       src={assets.product_banner}
       className="img-fluid"
       alt="Ferro alloys supplier in Dubai, UAE"
     />
     <div className="left">
       <h1>Ferro Alloys Supplier in Dubai, UAE</h1>
       <p>
         Trusted supplier of ferro manganese, silico manganese, ferro chrome,
         ferro silicon, manganese ore, and ferro molybdenum for steel plants and
         industrial buyers worldwide.
       </p>
       <div className="button">
         <a href="mailto:sfa.globex@gmail.com">
           <button type="button" className="btn btn-light ">Inquiry</button>
         </a>
         <a href="#products">
           <button type="button" className="btn btn-light">
             Explore Our Products
           </button>
         </a>
         <button
           onClick={handleDownload}
           id="btndownload"
           type="button"
           className="btn btn-light "
         >
           Download Product Specification
         </button>
       </div>
     </div>
    </div>
  )
}
export default Banner