import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Download, Factory, Users, Award, ShieldCheck } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productCategories } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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
  }, []);

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
    }
  ];

  const categoryImages = [
    'https://images.unsplash.com/photo-1589210032586-3e54debe41df',
    'https://images.unsplash.com/photo-1603199476769-12b7c78485e2',
    'https://images.pexels.com/photos/8933640/pexels-photo-8933640.jpeg',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    'https://images.unsplash.com/photo-1547592180-85f173990554',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1563139205-b6d0e303ad58" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10" ref={heroRef}>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-sm font-medium">FSSAI Certified | Since 2018</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Millet & Cereal-Based Food Manufacturer in Hyderabad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Ready-to-Eat & Ready-to-Cook foods made from the goodness of millets. Trusted by brands, institutions & retailers for bulk supply and contract manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Enquire for Bulk / OEM</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="/sri-haritha-catalog.pdf" 
                download
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Catalogue</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Sri Haritha Agro Food Products Pvt. Ltd. has been a trusted manufacturer of millet and cereal-based Ready-to-Eat and Ready-to-Cook food products since 2018. Based in Hyderabad, we specialize in producing nutritious, healthy food products that combine traditional wisdom with modern manufacturing.
            </p>
            <p className="text-lg text-gray-700">
              Our product range includes breakfast mixes, cereals, instant mixes, energy bytes (snacks), soups, spice powders, flours, and grits - all crafted with quality ingredients and FSSAI-certified processes.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-700">
              Explore our wide range of millet and cereal-based food products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={categoriesRef}>
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="category-card group card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={categoryImages[index] || categoryImages[0]}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <span className="text-primary font-medium inline-flex items-center space-x-1">
                  <span>View Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Avasya Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Introducing Avasya
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Avasya is our in-house brand that represents our commitment to "Essentials for Healthy Living." Through Avasya, we showcase our product formulation expertise and quality standards.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our philosophy: <strong>"Eat Healthy, Stay Healthy"</strong> and <strong>"Food as Therapy."</strong> Every Avasya product is a testament to our capability in creating nutritious, delicious millet-based foods.
              </p>
              <Link to="/avasya" className="btn-primary inline-flex items-center space-x-2">
                <span>Explore Avasya</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1644057565733-b21dce26d342" 
                alt="Avasya Products" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/4099234/pexels-photo-4099234.jpeg" 
                alt="Healthy Food" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Brands & Institutions Choose Us
            </h2>
            <p className="text-xl text-white/90">
              Your trusted partner for millet-based food manufacturing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">FSSAI Certified</h3>
              <p className="text-white/80">Maintaining highest quality and safety standards</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Since 2018</h3>
              <p className="text-white/80">Years of experience in millet food manufacturing</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contract Manufacturing</h3>
              <p className="text-white/80">End-to-end OEM and private label services</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Partner</h3>
              <p className="text-white/80">Serving brands, institutions, and retailers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Manufacturing CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Looking for a Reliable Manufacturing Partner?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
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

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-700 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Have a Bulk Requirement? Let's Work Together.
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to discuss your bulk orders, contract manufacturing, or distribution partnership needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919885704670" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Call: +91 98857 04670
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
