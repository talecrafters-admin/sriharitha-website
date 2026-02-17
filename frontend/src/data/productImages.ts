/**
 * Maps products to images from src/assets/images/products (and category where needed).
 * Image filenames reflect the product name (e.g. Muesli.jpeg, Jowar-sorghum-flakes.jpeg).
 */
import barsImg from "../assets/images/products/bars.webp";
import berryBarsImg from "../assets/images/products/berry-bars.webp";
import breakfastCerealsImg from "../assets/images/products/Breakfast-Cereals.jpeg";
import breakfastMixImg from "../assets/images/products/Breakfast-mix.jpeg";
import energyBytesImg from "../assets/images/products/Energy-bytes.jpeg";
import fruitNutBarsImg from "../assets/images/products/fruitnnut-bars.jpeg";
import jowarFlakesImg from "../assets/images/products/Jowar-sorghum-flakes.jpeg";
import milletBarsImg from "../assets/images/products/millet-bars.webp";
import muesliImg from "../assets/images/products/Muesli.jpeg";
import noodlesImg from "../assets/images/products/noodles.png";
import pohaImg from "../assets/images/products/poha.jpeg";
import ragiFlakesImg from "../assets/images/products/Ragi-finger-millet-flakes.jpeg";
import sesameBarsImg from "../assets/images/products/Sesame-bars.webp";
import spicePowdersImg from "../assets/images/products/spice-powders.webp";
import placeholderImg from "../assets/images/products/FoxtailMillet.webp";
// Breakfast cereals (new)
import wheatFlakesImg from "../assets/images/products/Whear-flakes.jpeg";
import kodoFlakesImg from "../assets/images/products/Kodo flakes.jpeg";
import brownTopFlakesImg from "../assets/images/products/BrownTop-Millet-FLakes.jpeg";
import brownRiceFlakesImg from "../assets/images/products/Brown-rice-flakes.jpeg";
import barleyFlakesImg from "../assets/images/products/Barley-Flake.jpeg";
// Instant mix (from products folder)
import healthMixImg from "../assets/images/products/health-mix.png";
import upmaMixImg from "../assets/images/products/upma-mix.jpeg";
import pongalMixImg from "../assets/images/products/pongal-mix.jpeg";
import khichidiMixImg from "../assets/images/products/khichidi-mix.jpeg";
import dosaMixImg from "../assets/images/products/dosa mix.jpeg";
import soupMixImg from "../assets/images/products/soup-mix.jpeg";
import ragiMaltImg from "../assets/images/products/ragi-malt.jpeg";
import idliMixImg from "../assets/images/category/idli-mix.jpeg";
import type { Product } from "./products";

/** Product id → image (for products that have a matching image by name) */
const productImageById: Record<string, string> = {
  // Breakfast cereals
  "bc-1": wheatFlakesImg,
  "bc-2": ragiFlakesImg,
  "bc-3": kodoFlakesImg,
  "bc-4": placeholderImg,
  "bc-5": placeholderImg,
  "bc-6": brownTopFlakesImg,
  "bc-7": brownRiceFlakesImg,
  "bc-8": barleyFlakesImg,
  "bc-9": jowarFlakesImg,
  "bc-10": muesliImg,
  // Instant mix – breakfast mixes
  "bm-1": healthMixImg,
  "bm-2": upmaMixImg,
  "bm-3": pongalMixImg,
  "bm-4": khichidiMixImg,
  "bm-5": idliMixImg,
  "bm-6": dosaMixImg,
  "bm-7": pohaImg,
  // Beverage mixes
  "bv-1": healthMixImg,
  "bv-2": ragiMaltImg,
  // Soup mixes
  "sm-1": soupMixImg,
  // Energy bytes, noodles, bars, spices
  "eb-1": energyBytesImg,
  "eb-2": energyBytesImg,
  "eb-3": energyBytesImg,
  "eb-4": energyBytesImg,
  "eb-5": energyBytesImg,
  "mn-1": noodlesImg,
  "br-1": barsImg,
  "br-2": sesameBarsImg,
  "br-3": milletBarsImg,
  "br-4": berryBarsImg,
  "br-5": fruitNutBarsImg,
  "sp-1": spicePowdersImg,
  "sp-2": spicePowdersImg,
  "sp-3": spicePowdersImg,
  "sp-4": spicePowdersImg,
  "sp-5": spicePowdersImg,
  "sp-6": spicePowdersImg,
  "sp-7": spicePowdersImg,
};

/** Category slug → default image when no product-specific image */
const categoryImageBySlug: Record<string, string> = {
  "instant-mix": breakfastMixImg,
  "breakfast-mixes": breakfastMixImg,
  "beverage-mixes": breakfastMixImg,
  "soup-mixes": breakfastMixImg,
  "breakfast-cereals": breakfastCerealsImg,
  "energy-bytes": energyBytesImg,
  "millet-noodles": noodlesImg,
  bars: barsImg,
  "spice-powders": spicePowdersImg,
  "flours-grits": placeholderImg,
  "upcoming-products": placeholderImg,
};

export function getProductImage(product: Product, categorySlug: string): string {
  return productImageById[product.id] ?? categoryImageBySlug[categorySlug] ?? placeholderImg;
}

export { categoryImageBySlug };
