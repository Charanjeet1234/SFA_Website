import logo from './sfa_logo.png'
import ferro_alloys from "./ferro_alloys.png"
import Ferro_silicon from "./Ferro_silicon.jpg"
import ferro_manganese from "./ferro-manganese-banner.jpg"
import silico_manganese from "./silico-manganese-img.jpg"
import product_banner from "./product_banner.png"
import ferro_chrome from "./ferro-chrome-img.jpg"
import manganese_ore from "./manganese_ore.jpeg"
import ferro_molybdenum from "./ferro-molybdenum.jpg"
import product from "./product_banner2.jpeg"

export const assets = {
    logo,
    ferro_alloys,
    Ferro_silicon,
    ferro_manganese,
    silico_manganese,
    product_banner,
    ferro_chrome,
    manganese_ore,
    ferro_molybdenum,
    product,
}

// Products

export const ferro_products = [{

 name: "Ferro Manganese",
 slug: "ferro-manganese",
 description: "High-grade ferro manganese supplier in Dubai, UAE, supplying manganese-rich alloy for steelmaking, deoxidation, and improving hardness and strength in carbon and stainless steel production.",
 image:ferro_manganese,
 collapse: "Ferro_Manganese",
 grade: "65% - 78% Mn",
 form: "Lumps / powder",
 composition: "Mn, C, Si, P, S",
  
},

 {
   name: "Silico Manganese",
   slug: "silico-manganese",
   description: "Silico manganese alloy used in steel production to improve strength, toughness, and desulfurization. Trusted silico manganese supplier for foundries and steel plants across the Middle East and beyond.",
   image: silico_manganese,
   collapse: "Silico_Manganese",
  grade: "60% - 70% Mn",
  form: "Lumps",
  composition: "Mn, Si, C, P, S",
 },

 {
   name: "Ferro Chrome",
   slug: "ferro-chrome",
   description: "Ferro chrome supplier offering chrome-rich alloy for stainless steel manufacturing, corrosion resistance, and alloying requirements in global industrial applications.",
   image: ferro_chrome,
   collapse: "Ferro_Chrome",
  grade: "60% - 70% Cr",
  form: "Lumps",
  composition: "Cr, C, Si, P, S",
 },

 {
   name: "Ferro Silicon",
   slug: "ferro-silicon",
   description: "Ferro silicon supplier delivering high-purity silicon-iron alloy for deoxidation, steel refining, and magnesium production in the modern steel and metallurgical industries.",
   image: Ferro_silicon,
   collapse: "Ferro_Silicon",
  grade: "65% - 75% Si",
  form: "Lumps / granules",
  composition: "Si, Al, C, P, S",
 },

 {
   name: "Manganese Ore",
   slug: "manganese-ore",
   description: "Manganese ore supplier for ferro alloy production, offering quality mineral feedstocks used in the manufacture of manganese alloys and steelmaking additives.",
   image: manganese_ore,
   collapse: "Manganese_Ore",
  grade: "35% - 48% Mn",
  form: "Natural ore",
  composition: "Mn, Fe, Si, P",
 },

 {
   name: "Ferro Molybdenum",
   slug: "ferro-molybdenum",
   description: "Ferro molybdenum alloy for high-strength steel, corrosion-resistant applications, and critical alloying solutions in industrial and steel manufacturing sectors.",
   image: ferro_molybdenum,
   collapse: "Ferro_Molybdenum",
  grade: "60% - 70% Mo",
  form: "Lumps",
  composition: "Mo, C, Si, P, S",
 }
]