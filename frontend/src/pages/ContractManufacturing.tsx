import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  FileCheck,
  Users,
  Package,
  Truck,
  Factory,
  ShieldCheck,
  Sparkles,
  Settings,
  Award,
  Globe,
  ChevronDown,
  ChevronUp,
  TrendingUp,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContractManufacturing: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const offeringsRef = useRef<HTMLDivElement>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Process animation
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll(".process-step");
      gsap.fromTo(
        steps,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Offerings animation
    if (offeringsRef.current) {
      const cards = offeringsRef.current.querySelectorAll(".offering-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: offeringsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offerings = [
    {
      title: "Contract Manufacturing (OEM)",
      description:
        "Complete end-to-end manufacturing services for your brand with full quality control and compliance support.",
      icon: Factory,
      color: "bg-primary",
    },
    {
      title: "Private Label",
      description:
        "Manufacture under your brand name with custom formulations, packaging, and labeling as per your specifications.",
      icon: Package,
      color: "bg-primary-light",
    },
    {
      title: "Product Development",
      description:
        "Recipe formulation, nutritional analysis, and product development support from concept to market-ready product.",
      icon: Sparkles,
      color: "bg-primary",
    },
    {
      title: "Packaging Solutions",
      description:
        "Various packaging formats including pouches, boxes, jars, and custom packaging options to match your brand.",
      icon: Package,
      color: "bg-primary-light",
    },
    {
      title: "Compliance Support",
      description:
        "FSSAI certification, labeling compliance, and regulatory assistance to ensure your products meet all standards.",
      icon: ShieldCheck,
      color: "bg-primary",
    },
    {
      title: "Quality Assurance",
      description:
        "Stringent quality control at every stage of production with detailed testing and documentation.",
      icon: Award,
      color: "bg-primary-light",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Enquiry & Consultation",
      description:
        "Share your product requirements, target market, volume needs, and business goals. We'll assess feasibility and provide initial guidance.",
      icon: FileCheck,
      color: "bg-primary",
    },
    {
      step: 2,
      title: "Formulation & Development",
      description:
        "Our food scientists develop or refine the recipe to meet your specifications, including nutritional targets and taste profiles.",
      icon: Sparkles,
      color: "bg-primary",
    },
    {
      step: 3,
      title: "Pilot Batch & Testing",
      description:
        "Small batch production for testing, approval, and quality verification. We refine based on your feedback.",
      icon: Settings,
      color: "bg-primary-light",
    },
    {
      step: 4,
      title: "Finalization & Agreement",
      description:
        "Confirm specifications, packaging design, labeling requirements, pricing, and production timeline. Sign manufacturing agreement.",
      icon: CheckCircle,
      color: "bg-primary",
    },
    {
      step: 5,
      title: "Scale Production & Delivery",
      description:
        "Full-scale production begins with regular quality checks. Timely delivery to your location with complete documentation.",
      icon: Truck,
      color: "bg-primary-light",
    },
  ];

  const productTypes = [
    "Breakfast Mixes (Idli, Dosa, Upma, Pongal, etc.)",
    "Breakfast Cereals & Muesli",
    "Instant Mixes & Ready-to-Cook",
    "Millet-based Snacks & Energy Bytes",
    "Soups & Porridge Mixes",
    "Spice Powders & Masalas",
    "Flours & Grits (Multigrain, Millet-based)",
    "Custom Formulations",
  ];

  const industries = [
    { name: "FMCG & D2C Brands", icon: TrendingUp },
    { name: "Retail Chains & Supermarkets", icon: Package },
    { name: "Health & Wellness Brands", icon: Award },
    { name: "Institutions & Schools", icon: Users },
    { name: "Hotels & Restaurants", icon: Factory },
    { name: "Export Companies", icon: Globe },
  ];

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "MOQ varies by product category and customization level. Typically ranges from 500 kg to 1000 kg per SKU. For standard products, we can work with lower volumes. Contact us for specific requirements based on your product type.",
    },
    {
      question: "What is the typical lead time?",
      answer:
        "After formulation approval, standard lead time is 2-3 weeks for first order and 1-2 weeks for repeat orders, depending on order size and complexity. Custom formulations may require additional time for development and testing.",
    },
    {
      question: "Do you help with product development?",
      answer:
        "Yes! We offer complete product development support including recipe formulation, nutritional analysis, shelf-life testing, and packaging recommendations. Our R&D team works closely with you to bring your vision to life.",
    },
    {
      question: "Can you handle custom packaging?",
      answer:
        "Absolutely. We support various packaging formats (pouches, boxes, jars, etc.) and can work with your packaging specifications or recommend cost-effective options. We also assist with packaging design and labeling.",
    },
    {
      question: "Do you provide FSSAI certification support?",
      answer:
        "Yes, we assist with FSSAI licensing, labeling compliance, and all regulatory requirements for food products. Our products are manufactured in an FSSAI-certified facility, and we help ensure your products meet all standards.",
    },
    {
      question: "What quality control measures do you have?",
      answer:
        "We have stringent quality control at every stage - from raw material inspection to finished product testing. This includes microbiological testing, nutritional analysis, and shelf-life studies. All products undergo multiple quality checks before dispatch.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt="Contract Manufacturing"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Factory className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">
                FSSAI Certified Manufacturing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
              End-to-End Contract Manufacturing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Partner with us to bring your millet-based food product vision to
              life. From formulation to packaging, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
              >
                <span>Submit Your Project Brief</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>View Our Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive contract manufacturing services tailored to your
              needs
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={offeringsRef}
          >
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div
                  key={index}
                  className="offering-card card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div
                    className={`${offering.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Product Types We Can Manufacture
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Wide range of millet and cereal-based products for your brand
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {productTypes.map((product, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700 font-medium">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A streamlined process from concept to delivery
            </p>
          </div>
          <div className="max-w-5xl mx-auto" ref={processRef}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              <div className="space-y-12">
                {process.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="process-step relative flex items-start space-x-6"
                    >
                      <div className="flex-shrink-0 relative z-10">
                        <div
                          className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1 card hover:shadow-card-hover transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                              {item.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Industries & Clients We Serve
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Trusted manufacturing partner across diverse industries
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-5 rounded-xl hover:bg-white/20 transition-all border border-white/20"
                  >
                    <Icon className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg font-medium">{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/10 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Common questions about our contract manufacturing services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card border-2 border-gray-100 hover:border-primary/30 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left p-4"
                >
                  <h3 className="text-xl font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed px-4 pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your contract manufacturing requirements.
            We'll guide you through every step from concept to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>View Our Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractManufacturing;
