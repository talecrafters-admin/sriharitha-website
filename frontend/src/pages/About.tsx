import React, { useEffect, useRef } from 'react';
import { Target, Heart, Users, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      gsap.fromTo(
        items,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About Sri Haritha Agro Food Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Transforming traditional grains into modern nutrition since 2018
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Sri Haritha Agro Food Products Pvt. Ltd. was founded in 2018 with a vision to bring the nutritional benefits of millets and traditional cereals to modern consumers. Starting from a small unit in Hyderabad, we have grown into a trusted manufacturer serving brands, institutions, and retailers across India.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our journey began with a simple question: How can we make healthy, traditional foods accessible and convenient for today's busy lifestyles? The answer led us to develop a comprehensive range of Ready-to-Eat and Ready-to-Cook products that combine the goodness of millets with modern food technology.
            </p>
            <p className="text-lg text-gray-700">
              Today, we manufacture over 50+ SKUs across breakfast mixes, cereals, instant mixes, snacks, soups, spice powders, and flours - all backed by FSSAI certification and stringent quality controls.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To be the leading manufacturer of millet and cereal-based health foods, contributing to healthier communities, wealthier farming communities, and a happier planet.
              </p>
            </div>
            <div className="card">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700">
                To manufacture high-quality, nutritious food products that make healthy eating convenient and accessible while supporting sustainable agriculture and local farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              Leadership
            </h2>
            <div className="card">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Mrs. K P Annapurna
                  </h3>
                  <p className="text-primary font-semibold mb-4">Chief Executive Officer</p>
                  <p className="text-gray-700 mb-4">
                    Under the visionary leadership of Mrs. K P Annapurna, Sri Haritha has established itself as a trusted name in millet-based food manufacturing. Her commitment to quality, nutrition, and sustainability drives every aspect of our business.
                  </p>
                  <p className="text-gray-700">
                    With a deep understanding of both traditional food wisdom and modern manufacturing practices, she has built a company that successfully bridges heritage and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Our Milestones
          </h2>
          <div className="max-w-3xl mx-auto" ref={timelineRef}>
            <div className="space-y-8">
              <div className="timeline-item flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div className="card flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2018 - Company Incorporation</h3>
                  <p className="text-gray-700">
                    Sri Haritha Agro Food Products Pvt. Ltd. was incorporated with a vision to manufacture healthy, millet-based food products.
                  </p>
                </div>
              </div>

              <div className="timeline-item flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div className="card flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2019 - Product Launch</h3>
                  <p className="text-gray-700">
                    Launched our first range of breakfast mixes and millet-based ready-to-cook products, receiving excellent market response.
                  </p>
                </div>
              </div>

              <div className="timeline-item flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div className="card flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2020 - Avasya Brand Introduction</h3>
                  <p className="text-gray-700">
                    Introduced Avasya, our in-house brand focusing on "Essentials for Healthy Living," showcasing our product formulation capabilities.
                  </p>
                </div>
              </div>

              <div className="timeline-item flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div className="card flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2021 - Institutional Supply</h3>
                  <p className="text-gray-700">
                    Expanded into institutional supply, serving school meal programs, hostels, and corporate canteens.
                  </p>
                </div>
              </div>

              <div className="timeline-item flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                  5
                </div>
                <div className="card flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2022-Present - Contract Manufacturing</h3>
                  <p className="text-gray-700">
                    Launched comprehensive contract manufacturing and private label services, becoming a trusted OEM partner for multiple brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-700">
                Unwavering commitment to producing the highest quality products
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nutrition Focus</h3>
              <p className="text-gray-700">
                Making healthy, nutritious food accessible to everyone
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-700">
                Supporting sustainable agriculture and local farming communities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consistency</h3>
              <p className="text-gray-700">
                Delivering consistent quality and service to all our partners
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
