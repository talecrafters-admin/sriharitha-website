import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Leaf,
  Users,
  ArrowRight,
  ShieldCheck,
  Award,
  CheckCircle,
  Sparkles,
  Package,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Avasya: React.FC = () => {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Philosophy cards animation
    if (philosophyRef.current) {
      const cards = philosophyRef.current.querySelectorAll(".philosophy-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Products animation
    if (productsRef.current) {
      const items = productsRef.current.querySelectorAll(".product-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const philosophies = [
    {
      icon: Heart,
      title: "Eat Healthy, Stay Healthy",
      description:
        "We believe that nutrition is the foundation of good health, and every meal is an opportunity to nourish your body with wholesome ingredients.",
      color: "bg-primary",
    },
    {
      icon: Leaf,
      title: "Food as Therapy",
      description:
        "Traditional grains like millets have therapeutic properties. We harness this wisdom to create foods that heal and energize naturally.",
      color: "bg-primary-light",
    },
    {
      icon: Users,
      title: "Community & Planet",
      description:
        "By choosing millets and local crops, we support sustainable farming and contribute to a healthier planet for future generations.",
      color: "bg-primary",
    },
  ];

  const productCategories = [
    {
      title: "Breakfast Solutions",
      icon: Sparkles,
      products: [
        "Muesli (Vanilla & Chocolate) - Wholesome breakfast cereals",
        "Ragi Idli, Millet Poha, Pongal - Quick traditional breakfast",
        "Multigrain Dosa, Millet Upma, Khichdi - Variety & nutrition",
      ],
    },
    {
      title: "Health Beverages",
      icon: Heart,
      products: [
        "Health Mix - Multi-grain energy drink",
        "Ragi Malt - Calcium and iron-rich traditional drink",
        "Fruit Porridge - Delicious and nutritious",
      ],
    },
    {
      title: "Snacks & Convenience",
      icon: Package,
      products: [
        "Energy Bytes - Guilt-free millet-based snacks in 5 flavors",
        "Soups - Tomato & Vegetable varieties for comfort",
        "No artificial colors or flavors",
      ],
    },
    {
      title: "Traditional Essentials",
      icon: Award,
      products: [
        "Spice Powders - Authentic blends for Indian cooking",
        "Flours & Grits - Whole grain goodness",
        "Traditional recipes with modern convenience",
      ],
    },
  ];

  const capabilities = [
    {
      icon: Sparkles,
      title: "Product Formulation",
      description:
        "Expert R&D team that develops innovative, nutritious formulations",
    },
    {
      icon: ShieldCheck,
      title: "Quality Standards",
      description:
        "FSSAI-certified manufacturing with rigorous quality control",
    },
    {
      icon: Package,
      title: "Packaging Excellence",
      description:
        "Modern packaging solutions that preserve freshness and appeal",
    },
    {
      icon: Award,
      title: "Market Success",
      description:
        "Proven track record with products that consumers love",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1644057565733-b21dce26d342"
            alt="Avasya Brand"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Award className="w-5 h-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  Our In-House Brand
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
                Avasya
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-white/90 font-medium">
                Essentials for Healthy Living
              </p>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Our in-house brand showcasing the perfect blend of nutrition,
                taste, and convenience. Every product is a testament to our
                manufacturing capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to="/products"
                  className="bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contract-manufacturing"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1644057565733-b21dce26d342"
                  alt="Avasya Products"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                The Avasya Story
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Born from a vision to make healthy eating accessible and enjoyable
              </p>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Avasya was born from a simple yet powerful vision: to make healthy
                eating not just accessible, but genuinely enjoyable for everyone.
                The name "Avasya" itself means "essential" - reflecting our belief
                that good health through good food is not a luxury, but an
                essential part of life.
              </p>
              <p>
                Launched in 2020, Avasya represents our commitment to{" "}
                <strong className="text-primary">"Eat Healthy, Stay Healthy"</strong>{" "}
                and embodies our philosophy of{" "}
                <strong className="text-primary">"Food as Therapy."</strong> Every
                product under the Avasya brand is a conscious journey to unravel
                the nutritional potential of Indian and predominantly local crops.
              </p>
              <p>
                Through Avasya, we aim to make communities healthier, farming
                communities wealthier, and the planet happier - one nutritious meal
                at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide every Avasya product
            </p>
          </div>
          <div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            ref={philosophyRef}
          >
            {philosophies.map((philosophy, index) => {
              const Icon = philosophy.icon;
              return (
                <div
                  key={index}
                  className="philosophy-card card hover:shadow-card-hover transition-all duration-300 group text-center"
                >
                  <div
                    className={`${philosophy.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {philosophy.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {philosophy.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Avasya Product Range
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive range of nutritious, convenient food products
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            ref={productsRef}
          >
            {productCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="product-item card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.products.map((product, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How Avasya Validates Our Capabilities */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Avasya: Proof of Our Capabilities
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Every Avasya product is a testament to our formulation expertise,
                quality standards, and manufacturing capabilities. When you partner
                with us for contract manufacturing, you're working with a team that
                has successfully developed, tested, and marketed their own product
                line.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
                  >
                    <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-white/80">
                The same care, precision, and innovation that goes into Avasya
                products will go into yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Want to Build an Avasya-Like Product Line?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let us help you create your own successful millet-based food brand with
            our contract manufacturing expertise. We'll bring the same innovation
            and quality to your products.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contract-manufacturing"
              className="bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Contract Manufacturing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avasya;
