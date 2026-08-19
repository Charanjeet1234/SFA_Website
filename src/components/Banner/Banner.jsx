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
     <div className="left">
       <span className="eyebrow">Global Ferro Alloy Supply</span>
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

     <div className="banner-visual">
       <div className="map-card">
         <div className="map-header">
           <span className="pulse-dot"></span>
           <span>Global Reach</span>
         </div>

         <svg
           className="world-map"
           viewBox="0 0 700 320"
           role="img"
           aria-label="Global delivery map"
         >
           <g opacity="0.9">
             <path d="M90 126l55-27 38-12 28 10 23 19 20 23-8 18-30 14-38 5-25-6-26-20-12-16-25-18z" fill="rgba(120,162,255,0.25)" stroke="rgba(120,162,255,0.8)" strokeWidth="2" />
             <path d="M275 84l30-15 42 4 22 18 14 18-11 16-30 11-30 0-15-14-10-22z" fill="rgba(120,162,255,0.25)" stroke="rgba(120,162,255,0.8)" strokeWidth="2" />
             <path d="M383 115l48-12 51 6 26 18-10 28-42 20-46 3-30-18-10-18z" fill="rgba(120,162,255,0.25)" stroke="rgba(120,162,255,0.8)" strokeWidth="2" />
             <path d="M482 160l37-8 44 15 34 29-19 24-55 4-35-20-19-25z" fill="rgba(120,162,255,0.25)" stroke="rgba(120,162,255,0.8)" strokeWidth="2" />
             <path d="M540 86l30-12 42 6 16 21-12 19-31 7-33-10-24-17z" fill="rgba(120,162,255,0.25)" stroke="rgba(120,162,255,0.8)" strokeWidth="2" />
           </g>

           <g>
             <path d="M115 240C250 210 320 195 505 215" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
             <path d="M110 195C210 180 295 150 390 120" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
             <path d="M295 90C345 110 385 115 430 115" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="none" />
           </g>

           <g>
             <circle cx="385" cy="146" r="8" className="map-point point-uae" />
             <circle cx="178" cy="188" r="7" className="map-point point-europe" />
             <circle cx="505" cy="183" r="7" className="map-point point-far-east" />
             <circle cx="610" cy="132" r="7" className="map-point point-asia" />
             <circle cx="290" cy="228" r="7" className="map-point point-africa" />
           </g>
         </svg>

         <div className="map-footer">
           <div>
             <strong>40+</strong>
             <span>Countries served</span>
           </div>
           <div>
             <strong>5</strong>
             <span>Core regions</span>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}
export default Banner