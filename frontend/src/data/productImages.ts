/**
 * Maps products to images from src/assets/images/products.
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
import idliMixImg from "../assets/images/category/idli-mix.jpeg";
import khichidiImg from "../assets/images/category/khichidi.jpeg";
import upmaImg from "../assets/images/category/upma.jpeg";
import type { Product } from "./products";

/** Product id → image (for products that have a matching image by name) */
const productImageById: Record<string, string> = {
  "bc-2": ragiFlakesImg,
  "bc-9": jowarFlakesImg,
  "bc-10": muesliImg,
  "bm-1": placeholderImg,
  "bm-2": upmaImg,
  "bm-3": placeholderImg,
  "bm-4": khichidiImg,
  "bm-5": idliMixImg,
  "bm-6": placeholderImg,
  "bm-7": pohaImg,
  "bv-1": placeholderImg,
  "bv-2": placeholderImg,
  "sm-1": placeholderImg,
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
