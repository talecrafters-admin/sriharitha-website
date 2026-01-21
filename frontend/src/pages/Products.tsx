import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Package,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Award,
} from "lucide-react";
import { productCategories } from "../data/products";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Category cards animation
    if (categoriesRef.current) {
      const cards = categoriesRef.current.querySelectorAll(".category-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          onEnter: () => {
            if (!counter.classList.contains("counted")) {
              counter.classList.add("counted");
              updateCounter();
            }
          },
        });
      });
    }
  }, []);

  const categoryImages = [
    "https://images.unsplash.com/photo-1589210032586-3e54debe41df",
    "https://images.unsplash.com/photo-1603199476769-12b7c78485e2",
    "https://images.pexels.com/photos/8933640/pexels-photo-8933640.jpeg",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "https://images.unsplash.com/photo-1547592180-85f173990554",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    "https://images.unsplash.com/photo-1563139205-b6d0e303ad58",
  ];

  const productStats = [
    { number: 50, suffix: "+", label: "Product SKUs", icon: Package },
    { number: 7, suffix: "", label: "Product Categories", icon: TrendingUp },
    { number: 100, suffix: "%", label: "FSSAI Certified", icon: ShieldCheck },
    { number: 500, suffix: "+", label: "Happy Clients", icon: Award },
  ];

  const features = [
    "FSSAI Certified Manufacturing",
    "Custom Formulation Available",
    "Private Label & OEM Services",
    "Bulk Order Support",
    "Quality Assured Products",
    "Timely Delivery",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Our Products"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">
              FSSAI Certified Products
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed mb-8">
            Explore our wide range of millet and cereal-based Ready-to-Eat and
            Ready-to-Cook food products
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>Request Catalogue</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contract-manufacturing"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Bulk Enquiry</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-white -mt-20 relative z-10">
        <div className="container-custom">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            ref={statsRef}
          >
            {productStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="card text-center hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    <span className="stat-number" data-target={stat.number}>
                      0
                    </span>
                    {stat.suffix}
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Comprehensive Product Range
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Sri Haritha manufactures a comprehensive range of millet &
              cereal-based food products designed for health-conscious consumers,
              institutions, and retail distribution. All our products are FSSAI
              certified and made with quality ingredients.
            </p>
            <p className="text-lg text-gray-700">
              Available for <strong className="text-primary">bulk orders</strong>,{" "}
              <strong className="text-primary">private label</strong>, and{" "}
              <strong className="text-primary">contract manufacturing</strong>.
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Product Categories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our diverse range of millet and cereal-based products
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={categoriesRef}
          >
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 category-card"
              >
                {/* Image Container with Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={categoryImages[index] || categoryImages[0]}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-sm font-semibold text-primary">
                      {category.products.length} Products
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-primary transition-colors flex-1">
                      {category.name}
                    </h3>
                    <div className="ml-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Package className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                    <span>Explore Category</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Accent Border on Hover */}
                <div className="absolute inset-0 border-2 border-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Interested in Bulk Orders or Private Label?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            All our products are available for bulk supply and private label
            manufacturing. Contact us to discuss your requirements and get
            customized pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>Request Product Specifications</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contract-manufacturing"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Learn About Contract Manufacturing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
