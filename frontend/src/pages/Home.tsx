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
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productCategories } from "../data/products";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.webp";

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialAutoplayRef = useRef<NodeJS.Timeout | null>(null);
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

    // Statistics counter animation
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

    // Process timeline animation
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

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Healthy Foods Pvt. Ltd.",
      role: "Procurement Manager",
      content:
        "Sri Haritha has been our trusted manufacturing partner for over 3 years. Their quality standards and timely delivery have been exceptional.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Priya Sharma",
      company: "NutriWell Brands",
      role: "Product Manager",
      content:
        "The contract manufacturing services are top-notch. They helped us launch our millet-based snack line with excellent formulation support.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Amit Patel",
      company: "Green Grocers Chain",
      role: "Category Head",
      content:
        "Their products consistently meet our quality expectations. The FSSAI certification and transparent processes give us confidence.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  ];

  const socialProof = [
    { name: "Retail Chains", count: "200+", icon: TrendingUp },
    { name: "Institutions", count: "150+", icon: Users },
    { name: "Brand Partners", count: "100+", icon: Award },
    { name: "Export Markets", count: "15+", icon: Globe },
  ];

  const faqs = [
    {
      question: "What does Sri Haritha Agro Food Products manufacture?",
      answer:
        "We manufacture Ready-to-Eat (RTE) and Ready-to-Cook (RTC) millet & cereal-based food products including breakfast mixes, cereals, instant mixes, snacks, soups, spice powders, and flours.",
    },
    {
      question: "Do you offer contract manufacturing services?",
      answer:
        "Yes, we provide end-to-end contract manufacturing and private label services for brands, institutions, and retailers looking to develop millet and cereal-based food products.",
    },
    {
      question: "What is the minimum order quantity for bulk orders?",
      answer:
        "MOQ varies by product category and customization requirements. Please contact us with your specific needs for accurate pricing and MOQ details.",
    },
    {
      question: "Are your products FSSAI certified?",
      answer:
        "Yes, Sri Haritha Agro Food Products is FSSAI certified, and all our products meet the highest quality and safety standards.",
    },
    {
      question: "How can I start a contract manufacturing project?",
      answer:
        "Simply contact us with your project requirements. We'll guide you through formulation, pilot batch, finalization, and scale-up production.",
    },
    {
      question: "Do you provide private label packaging?",
      answer:
        "Yes, we offer complete private label services including custom packaging design, branding, and labeling as per your requirements.",
    },
    {
      question: "What is your production capacity?",
      answer:
        "We have a modern manufacturing facility with scalable production capacity to meet both small and large volume requirements.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Phase 2 Data
  const processSteps = [
    {
      step: 1,
      title: "Consultation & Requirements",
      description:
        "We discuss your product vision, target market, and specific requirements.",
      icon: MessageCircle,
      color: "bg-primary",
    },
    {
      step: 2,
      title: "Formulation & R&D",
      description:
        "Our food scientists develop the perfect formulation tailored to your needs.",
      icon: Sparkles,
      color: "bg-primary",
    },
    {
      step: 3,
      title: "Pilot Batch Testing",
      description:
        "We create sample batches for your approval and quality testing.",
      icon: Settings,
      color: "bg-primary",
    },
    {
      step: 4,
      title: "Production & Packaging",
      description:
        "Full-scale production with your custom packaging and branding.",
      icon: Factory,
      color: "bg-primary",
    },
    {
      step: 5,
      title: "Quality Assurance",
      description: "Rigorous quality checks and FSSAI compliance verification.",
      icon: ShieldCheck,
      color: "bg-primary",
    },
    {
      step: 6,
      title: "Delivery & Support",
      description: "Timely delivery and ongoing support for your product line.",
      icon: Truck,
      color: "bg-primary",
    },
  ];

  const comparisonData = {
    features: [
      "FSSAI Certified",
      "Custom Formulation",
      "Private Label",
      "MOQ Flexibility",
      "Quality Assurance",
      "Timely Delivery",
      "Ongoing Support",
    ],
    us: [true, true, true, true, true, true, true],
    others: [
      "May be",
      "May be",
      "May be",
      "May be",
      "May be",
      "May be",
      "May be",
    ],
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Chat message:", chatMessage);
    setChatMessage("");
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const categoryImages = [
    "https://images.unsplash.com/photo-1589210032586-3e54debe41df",
    "https://images.unsplash.com/photo-1603199476769-12b7c78485e2",
    "https://images.pexels.com/photos/8933640/pexels-photo-8933640.jpeg",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    "https://images.unsplash.com/photo-1547592180-85f173990554",
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
  ];

  const heroSlides = [
    {
      image: hero1,
      title: "Your Trusted Contract Manufacturing Partner",
      subtitle:
        "Expertise in millet & cereal-based food manufacturing since 2018",
      description:
        "We welcome you to partner with us for end-to-end contract manufacturing services. From product development to bulk production, we're here to bring your vision to life with quality, expertise, and timely delivery.",
      ctaText: "Discuss Your Project",
      ctaLink: "/contract-manufacturing",
    },
    {
      image: hero2,
      title: "Bulk Manufacturing Excellence",
      subtitle: "FSSAI-certified facility delivering quality products at scale",
      description:
        "Whether you're a brand, institution, or retailer, we offer comprehensive contract manufacturing and private label services. Our commitment to quality, on-time delivery, and product development makes us your ideal manufacturing partner.",
      ctaText: "Get Started Today",
      ctaLink: "/contact",
    },
  ];

  // Hero carousel autoplay and navigation
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000); // Change slide every 5 seconds
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [heroSlides.length]);

  // Testimonials carousel autoplay
  useEffect(() => {
    const startTestimonialAutoplay = () => {
      testimonialAutoplayRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change testimonial every 4 seconds
    };

    startTestimonialAutoplay();

    return () => {
      if (testimonialAutoplayRef.current) {
        clearInterval(testimonialAutoplayRef.current);
      }
    };
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
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
      <section className="relative h-screen w-full overflow-hidden -mt-20">
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
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay - earthy, natural feel with depth */}
              <div className="absolute inset-0 hero-gradient"></div>
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              {/* Content */}
              <div className="container-custom relative z-10 h-full flex items-center">
                <div className="max-w-4xl" ref={index === 0 ? heroRef : null}>
                  <div className="inline-flex items-center space-x-3 mb-8 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                    <ShieldCheck className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">
                      FSSAI Certified | Since 2018
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white text-shadow-soft">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-white leading-relaxed max-w-2xl font-medium">
                    {slide.subtitle}
                  </p>
                  {slide.description && (
                    <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={slide.ctaLink}
                      className="group bg-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3 transform"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="border-2 border-white/50 bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/25 hover:border-white/70 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-earth w-8 h-2"
                  : "bg-white/50 hover:bg-white/70 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/50 to-secondary relative overflow-hidden subtle-pattern">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-8 leading-tight">
              Welcome to Sri Haritha
            </h2>
            <p className="text-lg md:text-xl text-text leading-relaxed mb-6">
              We're delighted to introduce ourselves as your trusted partner in
              contract manufacturing. Since 2018, we've been dedicated to
              crafting wholesome millet and cereal-based foods that honor
              traditional Indian nutrition while meeting the highest modern
              quality standards.
            </p>
            <p className="text-base md:text-lg text-text-light leading-relaxed">
              Based in Hyderabad, we specialize in contract manufacturing and
              bulk production of Ready-to-Eat and Ready-to-Cook products
              including breakfast mixes, cereals, snacks, soups, spice powders,
              and flours. All our products are FSSAI-certified and manufactured
              with the utmost care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden subtle-lines">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                Product Range
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Our Products
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              A complete range of millet and cereal-based foods
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={categoriesRef}
          >
            {productCategories.map((category, index) => {
              return (
                <Link
                  key={category.id}
                  to={`/products/${category.slug}`}
                  className="group relative bg-white rounded-2xl overflow-hidden card-glow hover:shadow-2xl transition-all duration-500 border border-secondary-dark/20 category-card transform hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-secondary-dark">
                    <img
                      src={categoryImages[index] || categoryImages[0]}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative">
                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                      <Package className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-text mb-4 group-hover:text-primary transition-colors pr-12">
                      {category.name}
                    </h3>
                    <p className="text-text-light mb-6 leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Explore Category</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Avasya Highlight */}
      <section className="section-padding bg-gradient-to-br from-white via-secondary/30 to-secondary/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                  Our Brand
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 leading-tight">
                Our Brand: Avasya
              </h2>
              <p className="text-lg text-text leading-relaxed mb-6">
                We're proud to introduce Avasya, our in-house brand that
                embodies our commitment to "Essentials for Healthy Living."
                Every Avasya product showcases our formulation expertise and
                quality standards, serving as proof of our manufacturing
                capabilities.
              </p>
              <p className="text-base text-text-light leading-relaxed mb-4">
                Guided by{" "}
                <strong className="text-primary">
                  "Eat Healthy, Stay Healthy"
                </strong>{" "}
                and <strong className="text-primary">"Food as Therapy,"</strong>{" "}
                Avasya products demonstrate our capability to create nutritious,
                delicious millet-based foods that honor traditional wisdom.
              </p>
              <p className="text-base text-text-light leading-relaxed mb-6">
                <strong className="text-primary">
                  Minimum Order Quantity:
                </strong>{" "}
                20 packs per product. Avasya products are ideal for railways,
                airlines, corporate gifting, and custom kits.
              </p>
              <Link
                to="/avasya"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Explore Avasya Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1644057565733-b21dce26d342"
                  alt="Avasya Products"
                  className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="relative group mt-12">
                <img
                  src="https://images.pexels.com/photos/4099234/pexels-photo-4099234.jpeg"
                  alt="Healthy Food"
                  className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-earth/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - USPs */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-shape"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl floating-shape"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-white uppercase tracking-wider px-4 py-2 bg-primary-dark/40 rounded-full backdrop-blur-sm border border-white/20">
                Our Strengths
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-shadow-soft">
              Why Partner With Us
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              We're committed to being your reliable manufacturing partner,
              delivering excellence in every project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Expertise
                </h3>
                <p className="text-white/95 leading-relaxed text-center">
                  Over 6 years of proven expertise in millet and cereal-based
                  food manufacturing, with deep knowledge of traditional and
                  modern techniques
                </p>
              </div>
            </div>
            <div className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Quality</h3>
                <p className="text-white/95 leading-relaxed text-center">
                  FSSAI-certified facility with rigorous quality control
                  processes ensuring the highest standards in every batch
                </p>
              </div>
            </div>
            <div className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  On-Time Delivery
                </h3>
                <p className="text-white/95 leading-relaxed text-center">
                  We understand the importance of timelines. Our efficient
                  production processes ensure timely delivery of your orders
                </p>
              </div>
            </div>
            <div className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Product Development
                </h3>
                <p className="text-white/95 leading-relaxed text-center">
                  From concept to finished product, we offer complete R&D
                  support and formulation services tailored to your needs
                </p>
              </div>
            </div>
            <div className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Factory className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Bulk Manufacturing
                </h3>
                <p className="text-white/95 leading-relaxed text-center">
                  Scalable production capacity to meet both small and large
                  volume requirements with consistent quality
                </p>
              </div>
            </div>
            <div className="group relative bg-primary-dark/30 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-primary-dark/40 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Wide Product Range
                </h3>
                <p className="text-white/95 leading-relaxed text-center">
                  Comprehensive range including breakfast mixes, cereals,
                  snacks, soups, spice powders, and flours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-earth/5 rounded-full blur-3xl -translate-y-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              What our partners say about working with us
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-secondary/30 p-10 md:p-12 border-2 border-secondary-dark/20 shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-text">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-text-light">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-earth text-earth"
                        />
                      ))}
                    </div>
                    <p className="text-base text-text leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    // Reset autoplay timer
                    if (testimonialAutoplayRef.current) {
                      clearInterval(testimonialAutoplayRef.current);
                    }
                    testimonialAutoplayRef.current = setInterval(() => {
                      setCurrentTestimonial(
                        (prev) => (prev + 1) % testimonials.length
                      );
                    }, 4000);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? "bg-primary w-8 h-2"
                      : "bg-secondary-dark/40 hover:bg-secondary-dark/60 w-2 h-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => {
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                );
                // Reset autoplay timer
                if (testimonialAutoplayRef.current) {
                  clearInterval(testimonialAutoplayRef.current);
                }
                testimonialAutoplayRef.current = setInterval(() => {
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  );
                }, 4000);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => {
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                );
                // Reset autoplay timer
                if (testimonialAutoplayRef.current) {
                  clearInterval(testimonialAutoplayRef.current);
                }
                testimonialAutoplayRef.current = setInterval(() => {
                  setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
                  );
                }, 4000);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By - Combined Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232D5016' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                Our Partners
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Trusted Partners
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Working with leading brands and institutions across India
            </p>
          </div>
        </div>

        {/* Brand Logo Marquee - Full Width */}
        <div className="relative overflow-hidden mb-16 border-y-2 border-primary/20 py-8 w-full bg-gradient-to-r from-secondary/30 via-secondary/50 to-secondary/30">
          <div className="flex animate-marquee space-x-16">
            {/* First set of logos */}
            {[
              "Healthy Foods Pvt. Ltd.",
              "NutriWell Brands",
              "Green Grocers Chain",
              "Organic Essentials",
              "Wellness Products India",
              "Nature's Best",
              "Pure Health Foods",
              "Farm Fresh Organics",
            ].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-8"
              >
                <div className="bg-white rounded-xl px-8 py-5 border-2 border-secondary-dark/30 hover:border-primary/50 hover:shadow-lg transition-all shadow-md group">
                  <span className="text-base font-bold text-text whitespace-nowrap group-hover:text-primary transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              "Healthy Foods Pvt. Ltd.",
              "NutriWell Brands",
              "Green Grocers Chain",
              "Organic Essentials",
              "Wellness Products India",
              "Nature's Best",
              "Pure Health Foods",
              "Farm Fresh Organics",
            ].map((brand, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-8"
              >
                <div className="bg-white rounded-xl px-8 py-5 border-2 border-secondary-dark/30 hover:border-primary/50 hover:shadow-lg transition-all shadow-md group">
                  <span className="text-base font-bold text-text whitespace-nowrap group-hover:text-primary transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialProof.map((proof, index) => {
              const Icon = proof.icon;
              return (
                <div
                  key={index}
                  className="group text-center bg-white rounded-2xl p-8 border-2 border-secondary-dark/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3">
                    {proof.count}
                  </div>
                  <p className="text-base font-medium text-text-light">
                    {proof.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contract Manufacturing CTA - Main Focus */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-earth rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-earth-light uppercase tracking-wider px-5 py-2.5 bg-white/20 rounded-full backdrop-blur-sm">
                Contract Manufacturing
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-shadow-soft leading-tight">
              Let's Bring Your Product Vision to Life
            </h2>
            <p className="text-lg md:text-xl text-white/95 mb-4 leading-relaxed">
              We're here to help you succeed. Our comprehensive contract
              manufacturing services include product development, formulation,
              bulk production, and packaging — all tailored to your specific
              needs.
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              Whether you're launching a new product line or scaling existing
              production, we welcome the opportunity to discuss how we can
              support your business goals. Please reach out to us for pricing
              and detailed information.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                to="/contract-manufacturing"
                className="group bg-accent text-text px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent-dark transition-all shadow-2xl hover:scale-105 inline-flex items-center justify-center space-x-3 transform"
              >
                <span>Learn About Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 bg-white/15 backdrop-blur-md text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white/25 hover:border-white/70 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process/Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/20 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-earth rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Our Process
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              From concept to delivery — a seamless journey
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={processRef}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step relative group">
                  <div className="bg-white rounded-2xl p-8 border-2 border-secondary-dark/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                    <div className="relative mb-6">
                      <div className="bg-gradient-to-br from-primary to-primary-dark w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-text text-xs font-bold shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base text-text-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
                Comparison
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
              Why Choose Us?
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              See how we compare to the competition
            </p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-secondary-dark/20">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <th className="p-6 text-left text-lg font-bold">Features</th>
                  <th className="p-6 text-center bg-earth text-white font-bold text-lg">
                    Sri Haritha
                  </th>
                  <th className="p-6 text-center text-lg font-semibold">
                    Others
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.features.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-secondary-dark/20 hover:bg-gradient-to-r hover:from-secondary/30 hover:to-secondary/10 transition-all duration-300 group"
                  >
                    <td className="p-6 font-semibold text-text group-hover:text-primary transition-colors">
                      {feature}
                    </td>
                    <td className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-text-light font-medium">
                        {comparisonData.others[index]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Visit Our Facility
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Located in the heart of Hyderabad's industrial area
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="bg-white rounded-lg p-6 border border-secondary-dark/20 shadow-card mb-6">
                <h3 className="text-xl font-bold text-text mb-4">Address</h3>
                <p className="text-text leading-relaxed mb-4">
                  Plot No. B-35, BHEL AIE,
                  <br />
                  R.C. Puram, Hyderabad-502 032,
                  <br />
                  Telangana, India
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919885704670"
                    className="flex items-center text-primary hover:text-earth transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +91 98857 04670
                  </a>
                  <a
                    href="mailto:sriharithaagrofood@gmail.com"
                    className="flex items-center text-primary hover:text-earth transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    sriharithaagrofood@gmail.com
                  </a>
                </div>
              </div>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Schedule a Visit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-earthy h-96 bg-secondary">
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
      </section>

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-secondary-dark/20 hover:border-primary/30 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left p-6"
                  >
                    <h3 className="text-lg font-bold text-text pr-8">
                      {faq.question}
                    </h3>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-base text-text-light leading-relaxed px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-secondary/50 via-white to-secondary/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-earth/5 to-transparent"></div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-5 py-2.5 bg-primary/10 rounded-full">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-8 leading-tight">
            We'd Love to Hear From You
          </h2>
          <p className="text-lg md:text-xl mb-4 text-text max-w-2xl mx-auto leading-relaxed">
            Thank you for considering Sri Haritha as your manufacturing partner.
            We're here to answer your questions and discuss how we can support
            your business needs.
          </p>
          <p className="text-base md:text-lg text-text-light mb-8 max-w-2xl mx-auto leading-relaxed">
            For pricing information, product inquiries, or to discuss your
            contract manufacturing requirements, please fill out our contact
            form or reach out to us directly. We look forward to working with
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919885704670"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center"
            >
              Call: +91 98857 04670
            </a>
          </div>
        </div>
      </section>

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-earth text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden">
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">Sri Haritha Support</h3>
                  <p className="text-xs text-white/90">We're here to help!</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-earth-light transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-secondary/30">
              <div className="mb-4">
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-text">
                    Hello! How can we assist you today? Feel free to ask about
                    our products, manufacturing services, or get a quote.
                  </p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleChatSubmit}
              className="p-4 border-t border-secondary-dark/20 flex space-x-2 bg-white"
            >
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-secondary-dark/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
