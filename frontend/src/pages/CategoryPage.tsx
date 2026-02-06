import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Package } from 'lucide-react';
import { getCategoryBySlug } from '../data/products';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = getCategoryBySlug(category || '');

  if (!categoryData) {
    return (
      <div className="section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Category Not Found
          </h1>
          <Link to="/products" className="text-primary hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb & Header */}
      <section className="bg-gray-50 py-8">
        <div className="container-custom">
          <Link 
            to="/products" 
            className="text-primary hover:underline inline-flex items-center space-x-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            {categoryData.name}
          </h1>
          <p className="text-xl text-gray-700">
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-[#fef7e7]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.products.map((product) => (
              <Link 
                key={product.id} 
                to="/contact"
                className="card hover:shadow-xl transition-all cursor-pointer block"
              >
                <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/20 flex items-center justify-center">
                  <Package className="w-24 h-24 text-primary/30" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">
                  {product.description}
                </p>
                <div className="mb-4 space-y-2">
                  <div>
                    <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {product.packSize}
                    </span>
                  </div>
                  {product.price && (
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">
                          ₹{product.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500">{product.priceUnit || 'per unit'}</p>
                      </div>
                      {product.moq && (
                        <div className="text-right">
                          <p className="text-sm font-semibold text-gray-700">MOQ</p>
                          <p className="text-sm text-primary font-medium">{product.moq}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {product.features && product.features.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-sm text-primary font-medium">
                  Available for bulk / private label
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Families & Individuals</h3>
                <p className="text-gray-700 text-sm">
                  Quick, healthy meals for busy lifestyles
                </p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Institutions</h3>
                <p className="text-gray-700 text-sm">
                  Schools, hostels, hospitals, and canteens
                </p>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-2">Retail & Distribution</h3>
                <p className="text-gray-700 text-sm">
                  Supermarkets, health stores, and online retail
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#fef7e7]">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Request Product Specifications
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Interested in bulk orders or private label for these products? Get in touch with us for detailed specifications and pricing.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
