import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Factory,
  Users,
  Award,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Package,
  TrendingUp,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  MapPin,
  Sparkles,
  Send,
  X,
  Settings,
  Truck,
  Phone,
  Building2,
  ShoppingBag,
  Store,
  Plane,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.webp";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";
import hero5 from "../assets/images/hero-5.jpg";
import hero6 from "../assets/images/hero-6.jpg";
import placeholderImage from "../assets/images/products/neptune-placeholder.jpg";
import founderImage from "../assets/images/Anu.png";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }


    // Parallax effects for sections
    const parallaxSections = document.querySelectorAll(".parallax-section");
    parallaxSections.forEach((section) => {
      gsap.to(section, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);


  const productCategoriesList = [
    {
      name: "Breakfast Cereals",
      description: "Millet flakes & cereal blends",
      image: placeholderImage,
    },
    {
      name: "Breakfast Mixes",
      description: "Idli, dosa, upma, pongal & health mixes",
      image: placeholderImage,
    },
    {
      name: "Instant Mixes",
      description: "Quick, convenient, nutritious formulations",
      image: placeholderImage,
    },
    {
      name: "Millet Snacks",
      description: "Energy Bytes & baked snack formats",
      image: placeholderImage,
    },
    {
      name: "Soup Mixes",
      description: "Wholesome, ready-to-prepare soups",
      image: placeholderImage,
    },
    {
      name: "Spice Powders",
      description: "Traditional blends for everyday cooking",
      image: placeholderImage,
    },
    {
      name: "Flours & Grits",
      description: "Whole grain flours & coarse grits",
      image: placeholderImage,
    },
  ];

  const whoWeWorkWith = [
    {
      text: "FMCG & D2C brands launching or scaling millet products",
      icon: ShoppingBag,
    },
    {
      text: "Institutional buyers including hostels, canteens & nutrition programs",
      icon: Building2,
    },
    {
      text: "Retail & distribution partners",
      icon: Store,
    },
    {
      text: "Export buyers seeking compliant, scalable manufacturing",
      icon: Plane,
    },
  ];

  const manufacturingServices = [
    {
      title: "Contract Manufacturing (Bulk & OEM)",
      icon: Factory,
    },
    {
      title: "Private Label Manufacturing",
      icon: Package,
    },
    {
      title: "Product Development & Formulation Support",
      icon: Sparkles,
    },
    {
      title: "Institutional Supply",
      icon: Users,
    },
    {
      title: "Quality & Compliance (FSSAI)",
      icon: ShieldCheck,
    },
    {
      title: "Scalable Production with Consistent Quality",
      icon: TrendingUp,
    },
  ];

  const whyChooseUs = [
    "Focused expertise in millet & cereal-based foods",
    "Operational since 2018 with real manufacturing experience",
    "FSSAI-certified facility and strict quality processes",
    "Proven bulk and institutional supply capability",
    "An in-house brand that validates every formulation we build",
  ];

  const leadership = {
    title: "Visionary leadership driving innovation and excellence",
    name: "Mrs. K P Annapurna",
    role: "Chief Executive Officer",
    description: "Under the visionary leadership of Mrs. K P Annapurna, Sri Haritha has established itself as a trusted name in millet-based food manufacturing. Her commitment to quality, nutrition, and sustainability drives every aspect of our business.",
    additional: "With a deep understanding of both traditional food wisdom and modern manufacturing practices, she has built a company that successfully bridges heritage and innovation.",
    quote: "Our mission is to bring the goodness of traditional millets to modern tables, ensuring that every product we create nourishes both body and soul while honoring our rich culinary heritage.",
  };

  const howItWorks = [
    {
      step: 1,
      title: "Consultation & Requirement Understanding",
      icon: MessageCircle,
    },
    {
      step: 2,
      title: "Formulation & Product Development",
      icon: Sparkles,
    },
    {
      step: 3,
      title: "Manufacturing & Packaging",
      icon: Factory,
    },
    {
      step: 4,
      title: "Quality Checks & Delivery",
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      question: "What does Sri Haritha manufacture?",
      answer:
        "We manufacture Ready-to-Eat and Ready-to-Cook millet & cereal-based foods including mixes, cereals, snacks, soups, spice powders and flours.",
    },
    {
      question: "Do you offer contract manufacturing and private label services?",
      answer:
        "Yes. We provide end-to-end contract manufacturing including formulation, bulk production and private label support.",
    },
    {
      question: "Are your products FSSAI certified?",
      answer:
        "Yes. All products are manufactured in an FSSAI-certified facility following strict quality standards.",
    },
    {
      question: "What is the minimum order quantity for bulk orders?",
      answer:
        "MOQ depends on the product category. Please contact us to discuss your specific requirement.",
    },
    {
      question: "How can I start a contract manufacturing project?",
      answer:
        "You can reach out via our enquiry form or contact our team directly to begin discussions.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  const heroSlides = [
    {
      image: hero1,
      badge: "FSSAI Certified | Since 2018",
      title: "Millet & Cereal-Based Food Manufacturer in Hyderabad",
      description:
        "We manufacture Ready-to-Eat and Ready-to-Cook millet & cereal foods for brands, institutions and retailers.",
      ctaText: "Enquire for Bulk / OEM",
      ctaLink: "/contact",
      cta2Text: null,
      cta2Link: null,
    },
    {
      image: hero2,
      badge: null,
      title: "End-to-End Manufacturing of Millet & Cereal Foods",
      description:
        "Breakfast mixes • Breakfast cereals • Instant mixes • Snacks • Soups • Spice powders • Flours & grits",
      ctaText: "View Product Range",
      ctaLink: "/products",
      cta2Text: null,
      cta2Link: null,
    },
    {
      image: hero3,
      badge: null,
      title: "A Reliable Partner for Bulk Supply & Contract Manufacturing",
      description:
        "From formulation and piloting to large-scale production — we help you launch and scale millet food products with consistent quality.",
      ctaText: "Start a Contract Manufacturing Enquiry",
      ctaLink: "/contract-manufacturing",
      cta2Text: null,
      cta2Link: null,
    },
    {
      image: hero4,
      badge: null,
      title: "Trusted by Brands, Institutions & Nutrition Programs",
      description:
        "Clean ingredients, compliant processes, and stable supply — backed by real manufacturing experience.",
      ctaText: "Why Choose Sri Haritha",
      ctaLink: "/about",
      cta2Text: null,
      cta2Link: null,
    },
    {
      image: hero5,
      badge: null,
      title: "Avasya — Our In-House Millet Food Brand",
      description:
        "Every formulation we manufacture is tested, refined and proven through Avasya before it reaches our partners.",
      ctaText: "Explore Avasya Products",
      ctaLink: "/avasya",
      cta2Text: null,
      cta2Link: null,
    },
    {
      image: hero6,
      badge: null,
      title: "Looking to Build or Scale a Millet Product Line?",
      description:
        "Partner with a manufacturer that understands millets, nutrition and commercial scalability.",
      ctaText: "Enquire for Bulk / OEM",
      ctaLink: "/contact",
      cta2Text: "Download Catalogue",
      cta2Link: "/contact",
    },
  ];

  // Hero carousel autoplay and navigation
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000); // Change slide every 6 seconds for better readability
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [heroSlides.length]);


  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="relative h-full w-full"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Overlay - natural feel with depth */}
              <div className="absolute inset-0 hero-gradient"></div>
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              {/* Content */}
              <div className="container-custom relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full" ref={index === 0 ? heroRef : null}>
                  {slide.badge && (
                    <div className="inline-flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {slide.badge}
                      </span>
                    </div>
                  )}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight text-white text-shadow-soft">
                    {slide.title}
                  </h1>
                  {slide.description && (
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/95 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      to={slide.ctaLink}
                      className="group bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-primary-dark transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-2 sm:space-x-3 transform"
                    >
                      <span className="text-center">{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                    {slide.cta2Text && (
                      <Link
                        to={slide.cta2Link}
                        className="border-2 border-white/50 bg-white/15 backdrop-blur-md text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-white/25 hover:border-white/70 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                      >
                        <span className="text-center">{slide.cta2Text}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-primary w-6 sm:w-8 h-2"
                  : "bg-white/50 hover:bg-white/70 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-6 h-6 text-white rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* WHAT WE MANUFACTURE */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              WHAT WE MANUFACTURE
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {productCategoriesList.map((category, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden bg-white"
                  style={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {/* Gradient overlay for better text readability - lighter overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/40 to-white/35 group-hover:from-white/40 group-hover:via-white/30 group-hover:to-white/25 transition-all duration-500"></div>
                  
                  {/* Decorative gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300 drop-shadow-md">
                      {category.name}
                    </h3>
                    <p className="text-base text-text-light leading-relaxed drop-shadow-md">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Hover arrow indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/products"
                className="group inline-flex items-center space-x-3 bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <span>View Full Product Range</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.02] subtle-lines"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 leading-tight">
              WHO WE WORK WITH
            </h2>
            <p className="text-2xl font-bold text-text mb-8">
              Built for Serious Buyers
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {whoWeWorkWith.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-secondary/20 rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-start space-x-5">
                      {/* Icon container */}
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <p className="text-lg font-semibold text-text leading-relaxed group-hover:text-primary transition-colors duration-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO FOR BRANDS */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 via-white to-secondary/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              WHAT WE DO FOR BRANDS
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manufacturingServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Icon with animated container */}
                      <div className="relative inline-flex mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                          <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      
                      {/* Service title */}
                      <p className="text-base font-bold text-text leading-relaxed group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </p>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY SRI HARITHA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-shape"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-shape" style={{ animationDelay: "2s" }}></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow-soft">
              WHY SRI HARITHA
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Leadership Section */}
            <div className="mb-12">
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 hover:bg-white/15 transition-all duration-500 overflow-hidden relative group">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <Award className="w-8 h-8 text-white/90" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Leadership
                    </h3>
                  </div>
                  
                  <p className="text-lg md:text-xl text-white/90 mb-8 font-medium leading-relaxed">
                    {leadership.title}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Leader Info */}
                    <div className="md:col-span-1">
                      <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-sm group-hover:bg-white/15 transition-all duration-300">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border-4 border-white/30 group-hover:border-white/50 transition-all duration-300 shadow-xl">
                          <img
                            src={founderImage}
                            alt={leadership.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-white text-center mb-2">
                          {leadership.name}
                        </h4>
                        <p className="text-base text-white/80 text-center">
                          {leadership.role}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description and Quote */}
                    <div className="md:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <p className="text-base md:text-lg text-white/95 leading-relaxed">
                          {leadership.description}
                        </p>
                        <p className="text-base md:text-lg text-white/90 leading-relaxed">
                          {leadership.additional}
                        </p>
                      </div>
                      
                      {/* Quote Section */}
                      <div className="bg-white/10 rounded-2xl p-6 md:p-8 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden">
                        {/* Decorative quote marks */}
                        <div className="absolute top-4 left-4 text-white/20 text-6xl font-serif leading-none">"</div>
                        <div className="absolute bottom-4 right-4 text-white/20 text-6xl font-serif leading-none rotate-180">"</div>
                        
                        <div className="relative z-10">
                          <p className="text-lg md:text-xl text-white/95 italic leading-relaxed mb-4 font-medium">
                            {leadership.quote}
                          </p>
                          <div className="flex items-center space-x-2 pt-4 border-t border-white/20">
                            <div className="w-1 h-8 bg-white/50 rounded"></div>
                            <p className="text-base text-white/80 font-semibold">
                              — {leadership.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Why Choose Us Points */}
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-6 md:p-8 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-lg md:text-xl text-white/95 leading-relaxed font-medium group-hover:text-white transition-colors duration-300 flex-1">
                      {item}
                    </p>
                  </div>
                  
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AVASYA */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/20 to-secondary/30 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                AVASYA
              </h2>
              <p className="text-2xl font-bold text-text mb-4">
                Our In-House Millet Food Brand
              </p>
              <p className="text-lg text-text-light leading-relaxed max-w-3xl mx-auto">
                Avasya represents our philosophy of "Essentials for Healthy Living."
                Every product we manufacture is tested, refined and validated
                through Avasya before being offered to our partners.
              </p>
            </div>
            
            {/* Feature cards grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="group bg-white rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  Proven Formulations
                </h3>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  Market-Tested Products
                </h3>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  Consistent Quality Standards
                </h3>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/avasya"
                className="group inline-flex items-center space-x-3 bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                <span>Explore Avasya Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02] subtle-pattern"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              HOW IT WORKS
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto font-medium">
              From Idea to Bulk Production
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connecting line for desktop - horizontal timeline */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
                {/* Step markers on timeline */}
                {howItWorks.map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"
                    style={{ left: `${(index * 100) / (howItWorks.length - 1)}%` }}
                  ></div>
                ))}
              </div>
              
              {/* Steps Grid */}
              <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
                {howItWorks.map((step, index) => {
                  const Icon = step.icon;
                  const isLast = index === howItWorks.length - 1;
                  return (
                    <div key={index} className="relative">
                      {/* Arrow connector for mobile/tablet */}
                      {!isLast && (
                        <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary/40 to-primary/20 z-0"></div>
                      )}
                      
                      <div className="group relative bg-white rounded-2xl p-6 lg:p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                        {/* Step number badge - top center */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl z-20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          {step.step}
                        </div>
                        
                        {/* Content */}
                        <div className="pt-6">
                          {/* Icon */}
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-lg lg:text-xl font-bold text-text text-center group-hover:text-primary transition-colors duration-300 leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        
                        {/* Hover gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      </div>
                      
                      {/* Arrow connector for desktop */}
                      {!isLast && (
                        <div className="hidden lg:block absolute top-20 -right-2 w-4 h-0.5 bg-primary/40 z-10">
                          <ArrowRight className="absolute -right-1 -top-1.5 w-3 h-3 text-primary/60" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Visit Our Facility */}
      <section className="section-padding bg-gradient-to-br from-secondary/20 via-white to-secondary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 leading-tight">
              Visit Our Facility
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto font-medium">
              Located in the heart of Hyderabad's industrial area
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Contact Info Card */}
              <div className="space-y-6">
                <div className="group bg-white rounded-2xl p-8 border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-text">Address</h3>
                  </div>
                  <p className="text-base text-text leading-relaxed mb-6">
                    Plot No. B-35, BHEL AIE,
                    <br />
                    R.C. Puram, Hyderabad-502 032,
                    <br />
                    Telangana, India
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-secondary-dark/20">
                    <a
                      href="tel:+919885704670"
                      className="group flex items-center space-x-3 text-primary hover:text-primary-dark transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold">+91 98857 04670</span>
                    </a>
                    <a
                      href="mailto:sriharithaagrofood@gmail.com"
                      className="group flex items-center space-x-3 text-primary hover:text-primary-dark transition-colors"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold">sriharithaagrofood@gmail.com</span>
                    </a>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="group inline-flex items-center space-x-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform w-full justify-center"
                >
                  <span>Schedule a Visit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
              
              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 bg-secondary group hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <iframe
                  title="Sri Haritha Agro Food Products Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.3891!3d17.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU2LjAiTiA3OMKwMjMnMjAuOCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] subtle-pattern"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4 leading-tight">
                FAQs
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border-2 border-secondary-dark/10 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-xl"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left p-6 md:p-8 hover:bg-secondary/5 transition-colors duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-text pr-8 leading-relaxed group-hover:text-primary transition-colors flex-1">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-primary transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 md:px-8">
                      <p className="text-base md:text-lg text-text-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl floating-shape"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl floating-shape" style={{ animationDelay: "2s" }}></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 leading-tight text-shadow-soft">
              Looking to Build or Scale a Millet Product Line?
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
              Partner with a manufacturer that understands millets, nutrition and
              commercial scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button
                onClick={() => {
                  const event = new CustomEvent("openContactModal");
                  window.dispatchEvent(event);
                }}
                className="group bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary hover:text-primary-dark transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform inline-flex items-center justify-center space-x-3"
              >
                <span>Discuss Bulk / OEM Requirement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const event = new CustomEvent("openContactModal");
                  window.dispatchEvent(event);
                }}
                className="group border-2 border-white/50 bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/25 hover:border-white/70 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform inline-flex items-center justify-center space-x-3"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                <span>Download Product Catalogue</span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Home;
