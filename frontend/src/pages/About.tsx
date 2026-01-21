import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Heart,
  Users,
  TrendingUp,
  Award,
  ShieldCheck,
  Factory,
  ArrowRight,
  Calendar,
  Package,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import founderImage from "../assets/images/Anu.png";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timeline animation
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(".timeline-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Stats counter animation
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

    // Values animation
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll(".value-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const stats = [
    { number: 7, suffix: " Years", label: "Experience", icon: Calendar },
    { number: 500, suffix: "+", label: "Happy Clients", icon: Users },
    { number: 50, suffix: "+", label: "Team Members", icon: Users },
    { number: 15, suffix: "+", label: "Export Markets", icon: Globe },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Incorporation",
      description:
        "Sri Haritha Agro Food Products Pvt. Ltd. was incorporated with a vision to manufacture healthy, millet-based food products.",
    },
    {
      year: "2019",
      title: "Product Launch",
      description:
        "Launched our first range of breakfast mixes and millet-based ready-to-cook products, receiving excellent market response.",
    },
    {
      year: "2020",
      title: "Avasya Brand Introduction",
      description:
        'Introduced Avasya, our in-house brand focusing on "Essentials for Healthy Living," showcasing our product formulation capabilities.',
    },
    {
      year: "2021",
      title: "Institutional Supply",
      description:
        "Expanded into institutional supply, serving school meal programs, hostels, and corporate canteens.",
    },
    {
      year: "2022-Present",
      title: "Contract Manufacturing",
      description:
        "Launched comprehensive contract manufacturing and private label services, becoming a trusted OEM partner for multiple brands.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "Unwavering commitment to producing the highest quality products with rigorous quality control at every stage.",
      color: "bg-primary",
    },
    {
      icon: Heart,
      title: "Nutrition Focus",
      description:
        "Making healthy, nutritious food accessible to everyone through innovative product development.",
      color: "bg-primary-light",
    },
    {
      icon: Users,
      title: "Sustainability",
      description:
        "Supporting sustainable agriculture and local farming communities while protecting the environment.",
      color: "bg-primary",
    },
    {
      icon: TrendingUp,
      title: "Consistency",
      description:
        "Delivering consistent quality and service to all our partners, building long-term relationships.",
      color: "bg-primary-light",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
            alt="About Sri Haritha"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center space-x-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">
              FSSAI Certified | Since 2018
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
            About Sri Haritha
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Transforming traditional grains into modern nutrition since 2018
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-white -mt-20 relative z-10">
        <div className="container-custom">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            ref={statsRef}
          >
            {stats.map((stat, index) => {
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

      {/* Our Journey */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From a small unit in Hyderabad to a trusted manufacturer serving
                brands across India
              </p>
            </div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Sri Haritha Agro Food Products Pvt. Ltd. was founded in 2018 with
                a vision to bring the nutritional benefits of millets and
                traditional cereals to modern consumers. Starting from a small unit
                in Hyderabad, we have grown into a trusted manufacturer serving
                brands, institutions, and retailers across India.
              </p>
              <p>
                Our journey began with a simple question: How can we make healthy,
                traditional foods accessible and convenient for today's busy
                lifestyles? The answer led us to develop a comprehensive range of
                Ready-to-Eat and Ready-to-Cook products that combine the goodness of
                millets with modern food technology.
              </p>
              <p>
                Today, we manufacture over 50+ SKUs across breakfast mixes,
                cereals, instant mixes, snacks, soups, spice powders, and flours -
                all backed by FSSAI certification and stringent quality controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading manufacturer of millet and cereal-based health
                foods, contributing to healthier communities, wealthier farming
                communities, and a happier planet.
              </p>
            </div>
            <div className="card hover:shadow-card-hover transition-all duration-300 group">
              <div className="bg-primary-light w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To manufacture high-quality, nutritious food products that make
                healthy eating convenient and accessible while supporting
                sustainable agriculture and local farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Leadership
              </h2>
              <p className="text-xl text-gray-700">
                Visionary leadership driving innovation and excellence
              </p>
            </div>
            <div className="card hover:shadow-card-hover transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-full md:w-64 h-64 md:h-auto md:aspect-square rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border-4 border-primary/20">
                  <img
                    src={founderImage}
                    alt="Mrs. K P Annapurna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
                    Mrs. K P Annapurna
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-6">
                    Chief Executive Officer
                  </p>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Under the visionary leadership of Mrs. K P Annapurna, Sri
                    Haritha has established itself as a trusted name in
                    millet-based food manufacturing. Her commitment to quality,
                    nutrition, and sustainability drives every aspect of our
                    business.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With a deep understanding of both traditional food wisdom and
                    modern manufacturing practices, she has built a company that
                    successfully bridges heritage and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Milestones
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Key moments in our journey of growth and innovation
            </p>
          </div>
          <div className="max-w-4xl mx-auto" ref={timelineRef}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="timeline-item relative flex items-start space-x-6"
                  >
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 card hover:shadow-card-hover transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-primary font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-br from-secondary/30 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={valuesRef}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card card hover:shadow-card-hover transition-all duration-300 group text-center"
                >
                  <div
                    className={`${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in our mission to make healthy, nutritious food accessible to
            everyone. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contract-manufacturing"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
