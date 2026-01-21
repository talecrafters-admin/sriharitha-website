import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  X,
  Heart,
  Leaf,
  Users,
  ArrowRight,
  Award,
  CheckCircle,
  Sparkles,
  Package,
  Filter,
  Search,
  Trash2,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCart } from "../contexts/CartContext";
import {
  avasyaProducts,
  avasyaCategories,
  AvasyaProduct,
} from "../data/avasyaProducts";

gsap.registerPlugin(ScrollTrigger);

const Avasya: React.FC = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderFormData, setOrderFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<{
    src: string;
    name: string;
  } | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const productsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const zoomModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (productsRef.current) {
      const items = productsRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector("img"),
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        }
      );
    }
  }, []);

  const filteredProducts = avasyaProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order submitted:", { orderFormData, cart });
    setOrderSubmitted(true);
    setTimeout(() => {
      clearCart();
      setOrderSubmitted(false);
      setShowOrderForm(false);
      setOrderFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        notes: "",
      });
    }, 3000);
  };

  const ProductCard: React.FC<{ product: AvasyaProduct }> = ({ product }) => {
    const cartItem = cart.find((item) => item.product.id === product.id);
    const quantity = cartItem?.quantity || 0;
    const imageRef = useRef<HTMLDivElement>(null);

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation(); // Prevent event bubbling
      if (zoomedImage && zoomedImage.src === product.image) {
        // If this image is already zoomed, close it
        setZoomedImage(null);
      } else {
        // Open zoom modal for this image
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
        setZoomedImage({ src: product.image, name: product.name });
      }
    };

    return (
      <div className="product-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 group">
        {/* Image Container - Modern style with full visibility */}
        <div
          ref={imageRef}
          className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Prevent infinite loop - if already tried placeholder, hide the image
              if (!target.dataset.fallbackAttempted) {
                target.dataset.fallbackAttempted = "true";
                target.style.display = "none";
              }
            }}
          />
          {product.inStock && (
            <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold z-10">
              In Stock
            </div>
          )}
          <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
            Click to zoom
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {product.subCategory && (
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1.5 block">
              {product.subCategory}
            </span>
          )}
          <h3 className="text-lg font-bold text-gray-900 mb-1.5 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>

          {/* Net Weight and Contact for Pricing */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 mb-0.5">Net Wt.</span>
              <span className="text-sm font-medium text-gray-600">
                {product.netWeight}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-primary leading-none mb-1">
                  MOQ: 20 packs
                </p>
                <p className="text-xs text-gray-500">Contact for pricing</p>
              </div>
              {quantity > 0 ? (
                <div className="flex items-center gap-2 bg-primary/10 rounded-full px-2 py-1.5">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-sm"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold text-primary w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-sm"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product, 1)}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  aria-label="Add to cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[500px] overflow-hidden"
      >
        <img
          src="/images/avasya/hero.png"
          alt="Avasya Brand"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Brand Info Section - Compact */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="container-custom">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Our In-House Brand
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3 text-primary">
              Avasya
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-800 font-medium">
              Eat Healthy Stay Healthy
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-4">
              <strong>Minimum Order Quantity:</strong> 20 packs per product
            </p>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Ideal for Railways, Airlines, Corporate Gifting, and Custom Kits
            </p>
          </div>
        </div>
      </section>

      {/* Cart Button - Floating */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-primary-dark transition-all duration-300 transform hover:scale-110"
      >
        <ShoppingCart className="w-6 h-6" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Cart Header */}
          <div className="bg-primary text-white p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.dataset.fallbackAttempted) {
                            target.dataset.fallbackAttempted = "true";
                            target.style.display = "none";
                          }
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-gray-500 mb-2">
                          {item.product.netWeight}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-600">
                            Contact for pricing
                          </p>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(item.product, 1)}
                              className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="mb-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-gray-700 mb-2">
                  We'll provide pricing based on your order quantity and
                  requirements.
                </p>
                <p className="text-sm font-semibold text-primary">
                  Please fill out the form below and we'll get back to you with
                  a quote.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowOrderForm(true);
                  setIsCartOpen(false);
                }}
                className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Proceed to Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              {/* Category Filter */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedCategory === "All"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {avasyaCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              Showing {filteredProducts.length} product
              {filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Products Grid */}
          <div
            ref={productsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No products found</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Zoom Modal - Amazon-style */}
      {zoomedImage && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-[60] pointer-events-none"
            onClick={() => setZoomedImage(null)}
          ></div>
          <div
            ref={zoomModalRef}
            className="fixed z-[70] pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="w-[90vw] max-w-3xl h-[90vh] max-h-[700px] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200 pointer-events-auto"
              onMouseLeave={() => setZoomedImage(null)}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-12">
                <button
                  onClick={() => setZoomedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-10 backdrop-blur-sm"
                  aria-label="Close zoom"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={zoomedImage.src}
                  alt={zoomedImage.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.dataset.fallbackAttempted) {
                      target.dataset.fallbackAttempted = "true";
                      target.style.display = "none";
                    }
                  }}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                {zoomedImage.name}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Order Form Modal */}
      {showOrderForm && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowOrderForm(false)}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-primary text-white p-6 flex items-center justify-between sticky top-0">
                <h2 className="text-2xl font-bold">Create Order</h2>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {orderSubmitted ? (
                <div className="p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Order Submitted!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for your order. We'll contact you shortly to
                    confirm the details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleOrderSubmit} className="p-6 space-y-6">
                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Order Summary
                    </h3>
                    <div className="space-y-2 mb-4">
                      {cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-700">
                            {item.product.name} x {item.quantity}
                          </span>
                          <span className="text-sm text-gray-500">
                            Pricing on request
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-300 pt-4 mt-4">
                      <p className="text-sm text-gray-600 mb-2">
                        We'll provide detailed pricing based on your order
                        quantity and specific requirements.
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        Please complete the form below and we'll send you a
                        customized quote.
                      </p>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderFormData.name}
                        onChange={(e) =>
                          setOrderFormData({
                            ...orderFormData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={orderFormData.email}
                        onChange={(e) =>
                          setOrderFormData({
                            ...orderFormData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={orderFormData.phone}
                        onChange={(e) =>
                          setOrderFormData({
                            ...orderFormData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderFormData.city}
                        onChange={(e) =>
                          setOrderFormData({
                            ...orderFormData,
                            city: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderFormData.state}
                        onChange={(e) =>
                          setOrderFormData({
                            ...orderFormData,
                            state: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        required
                        value={orderFormData.pincode}
                        onChange={(e) =>
                          setOrderFormData({
                            ...orderFormData,
                            pincode: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <textarea
                      required
                      value={orderFormData.address}
                      onChange={(e) =>
                        setOrderFormData({
                          ...orderFormData,
                          address: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      value={orderFormData.notes}
                      onChange={(e) =>
                        setOrderFormData({
                          ...orderFormData,
                          notes: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowOrderForm(false)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Order
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </>
      )}

      {/* Brand Philosophy Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide every Avasya product
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="card hover:shadow-card-hover transition-all duration-300 group text-center">
              <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Eat Healthy, Stay Healthy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that nutrition is the foundation of good health, and
                every meal is an opportunity to nourish your body with wholesome
                ingredients.
              </p>
            </div>
            <div className="card hover:shadow-card-hover transition-all duration-300 group text-center">
              <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Leaf className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Food as Therapy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional grains like millets have therapeutic properties. We
                harness this wisdom to create foods that heal and energize
                naturally.
              </p>
            </div>
            <div className="card hover:shadow-card-hover transition-all duration-300 group text-center">
              <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community & Planet
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By choosing millets and local crops, we support sustainable
                farming and contribute to a healthier planet for future
                generations.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center bg-secondary/50 rounded-xl p-8 border border-secondary-dark/20">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Perfect For Your Business Needs
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Avasya products are ideal for bulk orders and institutional
              partnerships. We welcome inquiries from:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-secondary-dark/20">
                <p className="font-semibold text-primary">Railways</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-secondary-dark/20">
                <p className="font-semibold text-primary">Airlines</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-secondary-dark/20">
                <p className="font-semibold text-primary">Gift Kits</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-secondary-dark/20">
                <p className="font-semibold text-primary">Corporate Gifting</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              For pricing and bulk order inquiries, please contact us. We'd be
              happy to discuss your requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avasya;
