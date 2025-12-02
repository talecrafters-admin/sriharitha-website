import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Download, Factory, Users, Award, ShieldCheck, ChevronLeft, ChevronRight, Package, TrendingUp, Globe, Star, ChevronDown, ChevronUp, MessageCircle, MapPin, Calculator, Sparkles, FileText, Search, Send, X, Zap, Settings, Box, Truck, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productCategories } from '../data/products';

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
  const [chatMessage, setChatMessage] = useState('');
  const [calculatorValues, setCalculatorValues] = useState({
    productType: '',
    quantity: '',
    packaging: 'standard',
  });
  const [calculatorResult, setCalculatorResult] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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
          ease: 'power3.out',
        }
      );
    }

    // Category cards animation
    if (categoriesRef.current) {
      const cards = categoriesRef.current.querySelectorAll('.category-card');
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
            start: 'top 80%',
          },
        }
      );
    }

    // Statistics counter animation
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll('.stat-number');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
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
          start: 'top 80%',
          onEnter: () => {
            if (!counter.classList.contains('counted')) {
              counter.classList.add('counted');
              updateCounter();
            }
          },
        });
      });
    }

    // Process timeline animation
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('.process-step');
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
            start: 'top 75%',
          },
        }
      );
    }

    // Parallax effects for sections
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach((section) => {
      gsap.to(section, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

  }, []);

  const stats = [
    { number: 500, suffix: '+', label: 'Happy Clients', icon: Users },
    { number: 1000, suffix: '+', label: 'Products Manufactured', icon: Package },
    { number: 7, suffix: ' Years', label: 'Experience', icon: Award },
    { number: 50, suffix: '+', label: 'Team Members', icon: Users },
  ];

  const certifications = [
    { name: 'FSSAI Certified', icon: ShieldCheck },
    { name: 'ISO Certified', icon: Award },
    { name: 'GMP Compliant', icon: CheckCircle },
    { name: 'HACCP Certified', icon: ShieldCheck },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Healthy Foods Pvt. Ltd.',
      role: 'Procurement Manager',
      content: 'Sri Haritha has been our trusted manufacturing partner for over 3 years. Their quality standards and timely delivery have been exceptional.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      name: 'Priya Sharma',
      company: 'NutriWell Brands',
      role: 'Product Manager',
      content: 'The contract manufacturing services are top-notch. They helped us launch our millet-based snack line with excellent formulation support.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      name: 'Amit Patel',
      company: 'Green Grocers Chain',
      role: 'Category Head',
      content: 'Their products consistently meet our quality expectations. The FSSAI certification and transparent processes give us confidence.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
  ];

  const socialProof = [
    { name: 'Retail Chains', count: '200+', icon: TrendingUp },
    { name: 'Institutions', count: '150+', icon: Users },
    { name: 'Brand Partners', count: '100+', icon: Award },
    { name: 'Export Markets', count: '15+', icon: Globe },
  ];


  const faqs = [
    {
      question: 'What does Sri Haritha Agro Food Products manufacture?',
      answer: 'We manufacture Ready-to-Eat (RTE) and Ready-to-Cook (RTC) millet & cereal-based food products including breakfast mixes, cereals, instant mixes, snacks, soups, spice powders, and flours.'
    },
    {
      question: 'Do you offer contract manufacturing services?',
      answer: 'Yes, we provide end-to-end contract manufacturing and private label services for brands, institutions, and retailers looking to develop millet and cereal-based food products.'
    },
    {
      question: 'What is the minimum order quantity for bulk orders?',
      answer: 'MOQ varies by product category and customization requirements. Please contact us with your specific needs for accurate pricing and MOQ details.'
    },
    {
      question: 'Are your products FSSAI certified?',
      answer: 'Yes, Sri Haritha Agro Food Products is FSSAI certified, and all our products meet the highest quality and safety standards.'
    },
    {
      question: 'How can I start a contract manufacturing project?',
      answer: 'Simply contact us with your project requirements. We\'ll guide you through formulation, pilot batch, finalization, and scale-up production.'
    },
    {
      question: 'Do you provide private label packaging?',
      answer: 'Yes, we offer complete private label services including custom packaging design, branding, and labeling as per your requirements.'
    },
    {
      question: 'What is your production capacity?',
      answer: 'We have a modern manufacturing facility with scalable production capacity to meet both small and large volume requirements.'
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Phase 2 Data
  const processSteps = [
    {
      step: 1,
      title: 'Consultation & Requirements',
      description: 'We discuss your product vision, target market, and specific requirements.',
      icon: MessageCircle,
      color: 'bg-primary',
    },
    {
      step: 2,
      title: 'Formulation & R&D',
      description: 'Our food scientists develop the perfect formulation tailored to your needs.',
      icon: Sparkles,
      color: 'bg-primary',
    },
    {
      step: 3,
      title: 'Pilot Batch Testing',
      description: 'We create sample batches for your approval and quality testing.',
      icon: Settings,
      color: 'bg-primary-light',
    },
    {
      step: 4,
      title: 'Production & Packaging',
      description: 'Full-scale production with your custom packaging and branding.',
      icon: Factory,
      color: 'bg-primary',
    },
    {
      step: 5,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and FSSAI compliance verification.',
      icon: ShieldCheck,
      color: 'bg-primary',
    },
    {
      step: 6,
      title: 'Delivery & Support',
      description: 'Timely delivery and ongoing support for your product line.',
      icon: Truck,
      color: 'bg-primary-light',
    },
  ];

  const comparisonData = {
    features: [
      'FSSAI Certified',
      'Custom Formulation',
      'Private Label',
      'MOQ Flexibility',
      'Quality Assurance',
      'Timely Delivery',
      'Ongoing Support',
    ],
    us: [true, true, true, true, true, true, true],
    others: ['May be', 'May be', 'May be', 'May be', 'May be', 'May be', 'May be'],
  };

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const basePrice = 100;
    const quantity = parseInt(calculatorValues.quantity) || 0;
    const packagingMultiplier = calculatorValues.packaging === 'premium' ? 1.3 : 1;
    const result = quantity > 0 ? Math.round(basePrice * quantity * packagingMultiplier) : null;
    setCalculatorResult(result);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Chat message:', chatMessage);
    setChatMessage('');
    alert('Thank you for your message! We\'ll get back to you soon.');
  };


  const categoryImages = [
    'https://images.unsplash.com/photo-1589210032586-3e54debe41df',
    'https://images.unsplash.com/photo-1603199476769-12b7c78485e2',
    'https://images.pexels.com/photos/8933640/pexels-photo-8933640.jpeg',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    'https://images.unsplash.com/photo-1547592180-85f173990554',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg'
  ];

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1563139205-b6d0e303ad58',
      title: 'Millet & Cereal-Based Food Manufacturer in Hyderabad',
      subtitle: 'Ready-to-Eat & Ready-to-Cook foods made from the goodness of millets. Trusted by brands, institutions & retailers for bulk supply and contract manufacturing.',
    },
    {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
      title: 'FSSAI Certified Quality Since 2018',
      subtitle: 'Maintaining highest quality and safety standards in every product we manufacture. Your trusted partner for nutritious, healthy food products.',
    },
    {
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d',
      title: 'Contract Manufacturing & Private Label Services',
      subtitle: 'End-to-end solutions from product formulation to packaging and delivery. Let\'s bring your millet-based food product vision to life.',
    },
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      title: 'Essentials for Healthy Living',
      subtitle: 'Through our Avasya brand, we showcase our commitment to "Eat Healthy, Stay Healthy" and "Food as Therapy" philosophy.',
    },
  ];

  // Carousel autoplay and navigation
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

  return (
    <div>
      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden -mt-20">
        <div ref={carouselRef} className="relative h-full w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
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
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
              
              {/* Content */}
              <div className="container-custom relative z-10 h-full flex items-center">
                <div className="max-w-4xl" ref={index === 0 ? heroRef : null}>
                  <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <ShieldCheck className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">FSSAI Certified | Since 2018</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-white leading-relaxed max-w-3xl">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link 
                      to="/contact" 
                      className="bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
                    >
                      <span>Enquire for Bulk / OEM</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a 
                      href="/sri-haritha-catalog.pdf" 
                      download
                      className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Catalogue</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-accent w-10 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Sri Haritha Agro Food Products Pvt. Ltd. has been a trusted manufacturer of millet and cereal-based Ready-to-Eat and Ready-to-Cook food products since 2018. Based in Hyderabad, we specialize in producing nutritious, healthy food products that combine traditional wisdom with modern manufacturing.
              </p>
              <p>
                Our product range includes breakfast mixes, cereals, instant mixes, energy bytes (snacks), soups, spice powders, flours, and grits - all crafted with quality ingredients and FSSAI-certified processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Explore our wide range of millet and cereal-based food products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8" ref={categoriesRef}>
            {productCategories.map((category, index) => {
              // First 3 items: 4 columns each (3 x 4 = 12 columns total for first row)
              // Next 4 items: 3 columns each (4 x 3 = 12 columns total for second row)
              const isFirstRow = index < 3;
              const colSpan = isFirstRow ? 'lg:col-span-4' : 'lg:col-span-3';
              
              return (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${colSpan}`}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Avasya Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
                Introducing Avasya
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                <p>
                  Avasya is our in-house brand that represents our commitment to "Essentials for Healthy Living." Through Avasya, we showcase our product formulation expertise and quality standards.
                </p>
                <p>
                  Our philosophy: <strong className="text-primary">"Eat Healthy, Stay Healthy"</strong> and <strong className="text-primary">"Food as Therapy."</strong> Every Avasya product is a testament to our capability in creating nutritious, delicious millet-based foods.
                </p>
              </div>
              <Link to="/avasya" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Avasya</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1644057565733-b21dce26d342" 
                alt="Avasya Products" 
                className="rounded-2xl shadow-modern"
              />
              <img 
                src="https://images.pexels.com/photos/4099234/pexels-photo-4099234.jpeg" 
                alt="Healthy Food" 
                className="rounded-2xl shadow-modern mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gradient-green text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Brands & Institutions Choose Us
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              Your trusted partner for millet-based food manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 hover:border-accent/50 transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-white/30 to-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center px-4 py-1.5 bg-accent text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Quality
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">FSSAI Certified</h3>
                <p className="text-white/90 leading-relaxed text-lg text-center">Maintaining highest quality and safety standards with rigorous testing protocols</p>
              </div>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 hover:border-accent/50 transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-white/30 to-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Award className="w-12 h-12" />
                </div>
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center px-4 py-1.5 bg-accent text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Experience
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Since 2018</h3>
                <p className="text-white/90 leading-relaxed text-lg text-center">Years of proven expertise in millet food manufacturing and innovation</p>
              </div>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 hover:border-accent/50 transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-white/30 to-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Factory className="w-12 h-12" />
                </div>
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center px-4 py-1.5 bg-accent text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Services
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Contract Manufacturing</h3>
                <p className="text-white/90 leading-relaxed text-lg text-center">End-to-end OEM and private label services with complete customization</p>
              </div>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 hover:border-accent/50 transition-all duration-500 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-white/30 to-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Users className="w-12 h-12" />
                </div>
                <div className="flex justify-center mb-3">
                  <span className="inline-flex items-center px-4 py-1.5 bg-accent text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Trust
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Trusted Partner</h3>
                <p className="text-white/90 leading-relaxed text-lg text-center">Serving brands, institutions, and retailers with proven reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Trusted by brands and institutions across India
            </p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 to-white p-8 md:p-12">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial
                      ? 'bg-primary w-10 h-3'
                      : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By - Combined Section */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Trusted By Leading Brands
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We're proud to work with industry leaders across diverse sectors
            </p>
          </div>
        </div>

        {/* Brand Logo Marquee - Full Width */}
        <div className="relative overflow-hidden mb-16 border-y border-gray-200 py-8 w-full">
          <div className="flex animate-marquee space-x-16">
            {/* First set of logos */}
            {[
              'Healthy Foods Pvt. Ltd.',
              'NutriWell Brands',
              'Green Grocers Chain',
              'Organic Essentials',
              'Wellness Products India',
              'Nature\'s Best',
              'Pure Health Foods',
              'Farm Fresh Organics',
            ].map((brand, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center px-8">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl px-8 py-6 border border-primary/10 hover:border-primary/30 transition-all">
                  <span className="text-xl font-bold text-primary whitespace-nowrap">{brand}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              'Healthy Foods Pvt. Ltd.',
              'NutriWell Brands',
              'Green Grocers Chain',
              'Organic Essentials',
              'Wellness Products India',
              'Nature\'s Best',
              'Pure Health Foods',
              'Farm Fresh Organics',
            ].map((brand, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0 flex items-center justify-center px-8">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl px-8 py-6 border border-primary/10 hover:border-primary/30 transition-all">
                  <span className="text-xl font-bold text-primary whitespace-nowrap">{brand}</span>
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
                <div key={index} className="text-center card hover:shadow-card-hover transition-all duration-300">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{proof.count}</div>
                  <p className="text-lg text-gray-700">{proof.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contract Manufacturing CTA */}
      <section className="section-padding bg-gradient-to-b from-secondary/30 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
              Looking for a Reliable Manufacturing Partner?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              We offer complete contract manufacturing solutions - from product formulation to packaging and delivery. Let's bring your millet-based food product vision to life.
            </p>
            <Link 
              to="/contract-manufacturing" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start Your Contract Manufacturing Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process/Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary/10 relative overflow-hidden parallax-section">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              From concept to delivery - a seamless journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={processRef}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step relative">
                  <div className="card hover:shadow-card-hover transition-all duration-300 h-full">
                    <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">Step {step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              See how we compare to the competition
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left rounded-tl-xl">Features</th>
                  <th className="p-4 text-center bg-accent text-primary font-bold">Sri Haritha</th>
                  <th className="p-4 text-center rounded-tr-xl">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.features.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">{feature}</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-gray-600 font-medium">{comparisonData.others[index]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Price Estimator
              </h2>
              <p className="text-xl text-gray-700">
                Get an estimated price for your bulk order
              </p>
            </div>
            <form onSubmit={handleCalculatorSubmit} className="card space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Product Type
                </label>
                <select
                  value={calculatorValues.productType}
                  onChange={(e) => setCalculatorValues({...calculatorValues, productType: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Select Product Type</option>
                  <option value="breakfast-mix">Breakfast Mix</option>
                  <option value="snack">Energy Bytes (Snacks)</option>
                  <option value="spice">Spice Powder</option>
                  <option value="flour">Flour & Grits</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Quantity (units)
                </label>
                <input
                  type="number"
                  value={calculatorValues.quantity}
                  onChange={(e) => setCalculatorValues({...calculatorValues, quantity: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter quantity"
                  min="1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Packaging Type
                </label>
                <select
                  value={calculatorValues.packaging}
                  onChange={(e) => setCalculatorValues({...calculatorValues, packaging: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">
                Calculate Estimate
              </button>
              {calculatorResult !== null && (
                <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Estimated Price</p>
                  <p className="text-3xl font-bold text-primary">₹{calculatorResult.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-2">*Final price may vary based on specifications</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Visit Our Facility
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Located in the heart of Hyderabad's industrial area
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="card mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Address</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Plot No. B-35, BHEL AIE,<br />
                  R.C. Puram, Hyderabad-502 032,<br />
                  Telangana, India
                </p>
                <div className="space-y-3">
                  <a href="tel:+919885704670" className="flex items-center text-primary hover:text-primary-light">
                    <Phone className="w-5 h-5 mr-2" />
                    +91 98857 04670
                  </a>
                  <a href="mailto:sriharithaagrofood@gmail.com" className="flex items-center text-primary hover:text-primary-light">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    sriharithaagrofood@gmail.com
                  </a>
                </div>
              </div>
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Schedule a Visit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-modern h-96 bg-gray-100">
              <iframe
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
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-16 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card border-2 border-gray-100 hover:border-primary/30 transition-all">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-xl font-bold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">
            Have a Bulk Requirement? Let's Work Together.
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss your bulk orders, contract manufacturing, or distribution partnership needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919885704670" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all">
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
            className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              1
            </span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-4 flex items-center justify-between">
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
                className="text-white hover:text-accent transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-gray-50">
              <div className="mb-4">
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Hello! How can we assist you today? Feel free to ask about our products, manufacturing services, or get a quote.
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200 flex space-x-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-light transition-colors"
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
