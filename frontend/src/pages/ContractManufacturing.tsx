import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Package,
  Truck,
  Factory,
  ShieldCheck,
  Sparkles,
  Award,
  ChevronDown,
  ChevronUp,
  Palette,
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
      color: "bg-primary",
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
        "We provide advice on packaging and work with packages provided by clients. We help by sharing packaging references and solutions.",
      icon: Package,
      color: "bg-primary",
    },
    {
      title: "Compliance Support",
      description:
        "FSSAI certification, labeling compliance, advice on regulatory assistance, and compliance advice to ensure your products meet all standards.",
      icon: ShieldCheck,
      color: "bg-primary",
    },
    {
      title: "Quality Assurance",
      description:
        "Stringent quality control at every stage of production with detailed testing and documentation.",
      icon: Award,
      color: "bg-primary",
    },
  ];

  const process = [
    {
      step: 1,
      title: "Custom Recipe Formulation",
      description:
        "Owing to years of experience manufacturing millet and cereal-based products, we are well versed with the modus operandi. We will carefully customize your product recipe in accordance with your taste and nutrient preferences.",
      icon: Sparkles,
      color: "bg-primary",
    },
    {
      step: 2,
      title: "Manufacturing",
      description:
        "We are an FSSAI and GMP certified organisation, producing food products that hold the highest level of quality control and authenticity. Our vastly experienced manufacturing team will help create products replicating the formulated recipe in a standardized process.",
      icon: Factory,
      color: "bg-primary",
    },
    {
      step: 3,
      title: "Package and Design",
      description:
        "We help by sharing packaging references and work with packages provided by you. Our team provides advice on packaging solutions to enhance your brand.",
      icon: Palette,
      color: "bg-primary",
    },
    {
      step: 4,
      title: "Timely & Quality Delivery",
      description:
        "Timely delivery and quality packaging that protects products is the key to customer satisfaction. We ensure careful packaging that reduces damages over transport and expeditious delivery with punctuality.",
      icon: Truck,
      color: "bg-primary",
    },
  ];

  const whyChooseUs = [
    {
      title: "Quality Control",
      description:
        "Our products go through vigorous testings and quality checks because we believe that our clients and their customers deserve only the best.",
      icon: ShieldCheck,
      color: "bg-primary",
    },
    {
      title: "Superior Packaging",
      description:
        "We are revered all over India for careful packaging that protects products and reduces damages over transport.",
      icon: Package,
      color: "bg-primary",
    },
    {
      title: "Premium Raw Material",
      description:
        "We never compromise on the quality of the material. Our clientele consists of India's leading brands because we source and use only the finest ingredients.",
      icon: Award,
      color: "bg-primary",
    },
  ];

  const productTypes = [
    "Breakfast Mixes (Idli, Dosa, Upma, Pongal, etc.)",
    "Breakfast Cereals & Muesli",
    "Instant Mixes & Ready-to-Cook",
    "Millet & Cereal-based Snacks",
    "Energy Bars",
    "Soups & Porridge Mixes",
    "Spice Powders & Masalas",
    "Millet & Cereal Noodles",
    "Custom Formulations",
  ];

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer:
        "MOQ varies by product category and customization level. We're flexible and work with clients to find solutions that meet their needs. For Avasya products, the minimum order is 20 packs per product. For contract manufacturing, please contact us to discuss your specific requirements, and we'll provide MOQ details tailored to your product type.",
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
        "We provide advice on packaging and work with packages provided by you. We help by sharing packaging references and solutions. Our team can assist with packaging recommendations and labeling.",
    },
    {
      question: "Do you provide FSSAI certification support?",
      answer:
        "Yes, we provide compliance support, advice on regulatory assistance, and compliance advice for food products. Our products are manufactured in an FSSAI-certified facility, and we help ensure your products meet all standards.",
    },
    {
      question: "What quality control measures do you have?",
      answer:
        "We have stringent quality control at every stage - from raw material inspection to finished product testing. This includes microbiological testing, nutritional analysis, and shelf-life studies. All products undergo multiple quality checks before dispatch.",
    },
  ];

  return (
    <div>
      {/* Certificates Banner - Desktop Only */}
      <section className="hidden md:block bg-primary text-warmWhite py-4 border-b-2 border-primary-dark">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-semibold">FSSAI Certified</span>
            </div>
            <div className="w-px h-6 bg-warmWhite/30"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">GMP Certified</span>
            </div>
            <div className="w-px h-6 bg-warmWhite/30"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">ISO Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt="Contract Manufacturing"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/90 to-primary/85"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 mb-8 px-5 py-2.5 bg-warmWhite/15 backdrop-blur-md rounded-full border border-warmWhite/30 shadow-lg">
              <Factory className="w-5 h-5 text-warmWhite" />
              <span className="text-sm font-semibold text-warmWhite">
                FSSAI & GMP Certified Manufacturing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 text-warmWhite leading-tight text-shadow-soft">
              Build A Brand In Matter Of Weeks
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-warmWhite/95 leading-relaxed max-w-4xl mx-auto font-medium">
              With our unmatchable expertise and state-of-the-art manufacturing
              facility, start your FMCG & millet and cereal-based food business in a matter
              of weeks. We'll plan everything for you, from recipe to label
              designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
              <button
                onClick={() => {
                  const event = new CustomEvent("openContactModal");
                  window.dispatchEvent(event);
                }}
                className="group bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary hover:text-primary-dark transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3 transform"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const event = new CustomEvent("openContactModal");
                  window.dispatchEvent(event);
                }}
                className="border-2 border-warmWhite/50 bg-warmWhite/15 backdrop-blur-md text-warmWhite px-10 py-5 rounded-xl font-semibold text-lg hover:bg-warmWhite/25 hover:border-warmWhite/70 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Request Sample</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How To Start Your Own Brand */}
      <section className="section-padding bg-gradient-to-b from-background-white via-secondary/30 to-background-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-5 py-2.5 bg-primary/10 rounded-full">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              How To Start Your Own Brand
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              A streamlined process designed to help you launch your brand
              quickly and efficiently
            </p>
          </div>
          <div className="max-w-6xl mx-auto" ref={processRef}>
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="process-step relative group">
                    <div className="bg-white rounded-2xl p-8 border-2 border-secondary-dark/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                      <div className="flex items-start space-x-6 mb-6">
                        <div
                          className={`${item.color} w-20 h-20 rounded-2xl flex items-center justify-center text-warmWhite shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}
                        >
                          <Icon className="w-10 h-10 text-warmWhite" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                            Step {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-base text-text-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-warmWhite relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-shape"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl floating-shape"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-warmWhite uppercase tracking-wider px-5 py-2.5 bg-primary-dark/40 rounded-full backdrop-blur-sm border border-warmWhite/20">
                Our Strengths
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow-soft">
              Why Choose Us?
            </h2>
            <p className="text-xl md:text-2xl text-warmWhite/95 max-w-3xl mx-auto leading-relaxed">
              We are a progressive, fast-moving health food products manufacturer. We
              are a health-driven company but we also excel in taste, we
              understand that there has to be a combination of wellness and
              taste. Our manufactured food products are worth savoring.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-warmWhite/20 hover:border-warmWhite/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative">
                    <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-10 h-10 text-warmWhite" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-warmWhite/95 leading-relaxed text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products We Manufacture */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-background-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-5 py-2.5 bg-primary/10 rounded-full">
                Product Range
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Products We Manufacture
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              A comprehensive range of millet and cereal-based products for your
              brand
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productTypes.map((product, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 border-2 border-secondary-dark/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-primary/10 group-hover:bg-primary/20 rounded-lg p-2 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <span className="text-lg text-text font-semibold group-hover:text-primary transition-colors">
                    {product}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors text-lg"
            >
              <span>Request Sample Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contract & Third Party Manufacturing */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-5 py-2.5 bg-primary/10 rounded-full">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Contract & Third Party Manufacturing
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Comprehensive manufacturing services tailored to your brand needs
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
                  className="offering-card bg-white rounded-2xl p-8 border-2 border-secondary-dark/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2"
                >
                  <div
                    className={`${offering.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-warmWhite shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon className="w-10 h-10 text-warmWhite" />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-br from-background-white via-secondary/20 to-background-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-5 py-2.5 bg-primary/10 rounded-full">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Common questions about our contract manufacturing services
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-secondary-dark/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-bold text-text pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-text-light flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-text-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-warmWhite relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-dark rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-warmWhite uppercase tracking-wider px-5 py-2.5 bg-primary-dark/40 rounded-full backdrop-blur-sm border border-warmWhite/20">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-shadow-soft leading-tight">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl md:text-2xl text-warmWhite/95 mb-4 max-w-3xl mx-auto leading-relaxed">
            We'd be delighted to discuss your contract manufacturing
            requirements. Our team is here to guide you through every step, from
            initial concept to final delivery.
          </p>
          <p className="text-lg text-warmWhite/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Please reach out to us for pricing information and to learn more
            about how we can support your business. We look forward to hearing
            from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={() => {
                const event = new CustomEvent("openContactModal");
                window.dispatchEvent(event);
              }}
              className="group bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary hover:text-primary-dark transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3 transform"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const event = new CustomEvent("openContactModal");
                window.dispatchEvent(event);
              }}
              className="border-2 border-warmWhite/50 bg-warmWhite/15 backdrop-blur-md text-warmWhite px-10 py-5 rounded-xl font-semibold text-lg hover:bg-warmWhite/25 hover:border-warmWhite/70 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
            >
              <span>Request Sample</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractManufacturing;
