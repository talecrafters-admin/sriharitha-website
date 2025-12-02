import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Users, ArrowRight } from 'lucide-react';

const Avasya: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                Avasya
              </h1>
              <p className="text-2xl mb-4 text-white/90">
                Essentials for Healthy Living
              </p>
              <p className="text-xl text-white/80">
                Our in-house brand showcasing the perfect blend of nutrition, taste, and convenience.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1644057565733-b21dce26d342" 
                alt="Avasya Products" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              The Avasya Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Avasya was born from a simple yet powerful vision: to make healthy eating not just accessible, but genuinely enjoyable for everyone. The name "Avasya" itself means "essential" - reflecting our belief that good health through good food is not a luxury, but an essential part of life.
              </p>
              <p>
                Launched in 2020, Avasya represents our commitment to <strong>"Eat Healthy, Stay Healthy"</strong> and embodies our philosophy of <strong>"Food as Therapy."</strong> Every product under the Avasya brand is a conscious journey to unravel the nutritional potential of Indian and predominantly local crops.
              </p>
              <p>
                Through Avasya, we aim to make communities healthier, farming communities wealthier, and the planet happier - one nutritious meal at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Eat Healthy, Stay Healthy
              </h3>
              <p className="text-gray-700">
                We believe that nutrition is the foundation of good health, and every meal is an opportunity to nourish your body.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Food as Therapy
              </h3>
              <p className="text-gray-700">
                Traditional grains like millets have therapeutic properties. We harness this wisdom to create foods that heal and energize.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community & Planet
              </h3>
              <p className="text-gray-700">
                By choosing millets and local crops, we support sustainable farming and contribute to a healthier planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Avasya Product Range
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Breakfast Solutions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Muesli (Vanilla & Chocolate) - Wholesome breakfast cereals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ragi Idli, Millet Poha, Pongal - Quick traditional breakfast</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Multigrain Dosa, Millet Upma, Khichdi - Variety & nutrition</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Health Beverages
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Health Mix - Multi-grain energy drink</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ragi Malt - Calcium and iron-rich traditional drink</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fruit Porridge - Delicious and nutritious</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Snacks & Convenience
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Energy Bytes - Guilt-free millet-based snacks in 5 flavors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Soups - Tomato & Vegetable varieties for comfort</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>No artificial colors or flavors</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Traditional Essentials
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Spice Powders - Authentic blends for Indian cooking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Flours & Grits - Whole grain goodness</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Traditional recipes with modern convenience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Avasya Validates Our Capabilities */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Avasya: Proof of Our Capabilities
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Every Avasya product is a testament to our formulation expertise, quality standards, and manufacturing capabilities. When you partner with us for contract manufacturing, you're working with a team that has successfully developed, tested, and marketed their own product line.
            </p>
            <p className="text-lg text-white/80">
              The same care, precision, and innovation that goes into Avasya products will go into yours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Want to Build an Avasya-Like Product Line?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you create your own successful millet-based food brand with our contract manufacturing expertise.
          </p>
          <Link to="/contract-manufacturing" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore Contract Manufacturing</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Avasya;
