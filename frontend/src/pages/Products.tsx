import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../data/products';

const Products: React.FC = () => {
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
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Explore our wide range of millet and cereal-based Ready-to-Eat and Ready-to-Cook food products
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-700 mb-4">
              Sri Haritha manufactures a comprehensive range of millet & cereal-based food products designed for health-conscious consumers, institutions, and retail distribution. All our products are FSSAI certified and made with quality ingredients.
            </p>
            <p className="text-lg text-gray-700">
              Available for <strong>bulk orders</strong>, <strong>private label</strong>, and <strong>contract manufacturing</strong>.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="group card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={categoryImages[index] || categoryImages[0]}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.products.length} products
                  </span>
                  <span className="text-primary font-medium inline-flex items-center space-x-1">
                    <span>View Products</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Interested in Bulk Orders or Private Label?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            All our products are available for bulk supply and private label manufacturing. Contact us to discuss your requirements.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Request Product Specifications</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
