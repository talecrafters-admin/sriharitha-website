import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Microscope,
  Factory,
  CheckCircle,
  Users,
  ArrowRight,
  Package,
  Settings,
  FileCheck,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import factory1 from "../assets/images/factory/f1.jpeg";
import factory2 from "../assets/images/factory/f2.jpeg";
import factory3 from "../assets/images/factory/f3.jpeg";
import factory4 from "../assets/images/factory/f4.jpeg";
import factory5 from "../assets/images/factory/f5.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Quality: React.FC = () => {
  const qualityRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Quality points animation
    if (qualityRef.current) {
      const cards = qualityRef.current.querySelectorAll(".quality-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: qualityRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Capabilities animation
    if (capabilitiesRef.current) {
      const items = capabilitiesRef.current.querySelectorAll(".capability-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const qualityPoints = [
    {
      title: "Raw Material Inspection",
      description:
        "Every batch of raw materials undergoes thorough quality checks before acceptance, ensuring only premium ingredients enter production.",
      icon: FileCheck,
      color: "bg-primary",
    },
    {
      title: "In-Process Quality Control",
      description:
        "Continuous monitoring during production to ensure consistency, with real-time quality checks at critical control points.",
      icon: Settings,
      color: "bg-primary-light",
    },
    {
      title: "Finished Product Testing",
      description:
        "Final products tested for quality, taste, nutritional parameters, and shelf-life to meet all specifications.",
      icon: Microscope,
      color: "bg-primary",
    },
    {
      title: "Hygiene & Safety",
      description:
        "Strict hygiene protocols and safety measures at every stage, with regular training and compliance audits.",
      icon: ShieldCheck,
      color: "bg-primary-light",
    },
    {
      title: "Traceability",
      description:
        "Complete batch traceability from raw materials to finished products, ensuring accountability and quality assurance.",
      icon: FileCheck,
      color: "bg-primary",
    },
    {
      title: "Regular Audits",
      description:
        "Internal and external quality audits to maintain highest standards, with continuous improvement processes.",
      icon: Award,
      color: "bg-primary-light",
    },
  ];

  const facilityFeatures = [
    "Clean and hygienic production environment",
    "Modern processing and packaging equipment",
    "Temperature-controlled storage facilities",
    "Adequate capacity for bulk production",
    "Automated quality monitoring systems",
    "Waste management and sustainability practices",
  ];

  const hygieneStandards = [
    {
      title: "Personnel Hygiene",
      items: [
        "Regular health check-ups for all staff",
        "Mandatory protective gear and clothing",
        "Comprehensive hygiene training programs",
      ],
    },
    {
      title: "Facility Hygiene",
      items: [
        "Regular cleaning and sanitization",
        "Pest control measures",
        "Proper waste management systems",
      ],
    },
    {
      title: "Equipment Maintenance",
      items: [
        "Regular equipment cleaning and maintenance",
        "Calibration of measuring instruments",
        "Preventive maintenance schedules",
      ],
    },
    {
      title: "Process Controls",
      items: [
        "Temperature and humidity monitoring",
        "Time and temperature logs",
        "Documented standard operating procedures",
      ],
    },
  ];

  const capabilities = [
    {
      category: "Product Types",
      icon: Package,
      items: [
        "Instant mixes & ready-to-cook",
        "Breakfast cereals",
        "Millet & cereal-based snacks",
        "Energy bars",
        "Millet & cereal noodles",
        "Soups & porridge mixes",
        "Spice powders & masalas",
      ],
    },
    {
      category: "Packaging Options",
      icon: Package,
      items: [
        "Pouches (100g to 1kg)",
        "Stand-up pouches with zipper",
        "LDPE/HDPE packaging",
        "Customized packaging available",
        "Bulk packaging for institutions",
        "Private label packaging",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src={factory1}
            alt="Quality & Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-warmWhite/10 backdrop-blur-sm rounded-full border border-warmWhite/20">
            <ShieldCheck className="w-5 h-5 text-warmWhite" />
            <span className="text-sm font-semibold text-warmWhite">
              FSSAI Certified
            </span>
          </div>
          <ShieldCheck className="w-20 h-20 mx-auto mb-6 text-warmWhite" />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-warmWhite">
            Quality & Infrastructure
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-warmWhite/90 leading-relaxed">
            Committed to manufacturing excellence through world-class
            infrastructure and rigorous quality controls
          </p>
        </div>
      </section>

      {/* FSSAI Certification */}
      <section className="section-padding bg-white -mt-20 relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card hover:shadow-card-hover transition-all duration-300 text-center">
              <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-warmWhite shadow-lg">
                <Award className="w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                FSSAI Certified Manufacturing
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                Sri Haritha Agro Food Products Pvt. Ltd. is FSSAI (Food Safety and
                Standards Authority of India) certified, ensuring that all our
                products meet the highest food safety and quality standards mandated
                by the Government of India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our manufacturing facility and processes are regularly inspected and
                audited to maintain compliance with all food safety regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-background-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Manufacturing Facility
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              State-of-the-art infrastructure in the heart of Hyderabad
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                State-of-the-Art Infrastructure
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our office is at Plot No 35, BHEL AIE, R.C. Puram, Hyderabad 502032. Our manufacturing unit is strategically located at APJ Abdul Kalam ALEAP Green Industrial Park, Nandigaon, Bhanur, Sangareddy (Pin code 502300), equipped with modern machinery and technology for efficient production of millet and cereal-based food products.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {facilityFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-card"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={factory2}
                alt="Manufacturing facility"
                className="rounded-2xl shadow-modern w-full h-48 object-cover"
              />
              <img
                src={factory3}
                alt="Manufacturing facility"
                className="rounded-2xl shadow-modern w-full h-48 object-cover"
              />
              <img
                src={factory4}
                alt="Manufacturing facility"
                className="rounded-2xl shadow-modern w-full h-48 object-cover"
              />
              <img
                src={factory5}
                alt="Manufacturing facility"
                className="rounded-2xl shadow-modern w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Quality Control Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Rigorous quality checks at every stage of production
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={qualityRef}
          >
            {qualityPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="quality-card card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div
                    className={`${point.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-warmWhite shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="section-padding bg-primary text-warmWhite">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Factory className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Hygiene & Safety Standards
              </h2>
              <p className="text-xl text-warmWhite/90 max-w-3xl mx-auto">
                We maintain the highest standards of hygiene and safety throughout
                our manufacturing process
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {hygieneStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-warmWhite/10 backdrop-blur-sm p-6 rounded-xl border border-warmWhite/20 hover:bg-warmWhite/20 transition-all"
                >
                  <h3 className="font-bold text-2xl mb-4">{standard.title}</h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-warmWhite/90"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section-padding bg-gradient-to-br from-background-white via-secondary/10 to-background-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive production capabilities for diverse product types
            </p>
          </div>
          <div
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
            ref={capabilitiesRef}
          >
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="capability-item card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {capability.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {capability.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card hover:shadow-card-hover transition-all duration-300 text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Experienced Team
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our team comprises experienced food technologists, quality control
                specialists, and production managers who bring decades of combined
                experience in food manufacturing. This expertise ensures consistent
                quality and innovation in every product we manufacture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-warmWhite">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Experience Our Quality Standards
          </h2>
          <p className="text-xl text-warmWhite/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Visit our facility or request product samples to see our quality
            standards firsthand. We're proud to showcase our manufacturing
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-warmWhite px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>Schedule a Visit</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="border-2 border-warmWhite/30 bg-warmWhite/10 backdrop-blur-sm text-warmWhite px-8 py-4 rounded-xl font-semibold hover:bg-warmWhite/20 transition-all inline-flex items-center justify-center space-x-2"
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

export default Quality;
