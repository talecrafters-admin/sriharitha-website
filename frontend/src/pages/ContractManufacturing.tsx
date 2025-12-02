import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, FileCheck, Users, Package, Truck } from 'lucide-react';

const ContractManufacturing: React.FC = () => {
  const offerings = [
    {
      title: 'Contract Manufacturing (OEM)',
      description: 'Complete end-to-end manufacturing services for your brand'
    },
    {
      title: 'Private Label',
      description: 'Manufacture under your brand name with custom formulations'
    },
    {
      title: 'Product Development',
      description: 'Recipe formulation and product development support'
    },
    {
      title: 'Packaging Solutions',
      description: 'Various packaging formats and custom packaging options'
    },
    {
      title: 'Compliance Support',
      description: 'FSSAI certification, labeling, and regulatory assistance'
    },
    {
      title: 'Quality Assurance',
      description: 'Stringent quality control at every stage of production'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Enquiry',
      description: 'Share your product requirements, target market, and volume needs',
      icon: FileCheck
    },
    {
      step: 2,
      title: 'Formulation & Development',
      description: 'We develop or refine the recipe to meet your specifications',
      icon: Users
    },
    {
      step: 3,
      title: 'Pilot Batch',
      description: 'Small batch production for testing and approval',
      icon: Package
    },
    {
      step: 4,
      title: 'Finalization',
      description: 'Confirm specifications, packaging, labeling, and pricing',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Scale & Supply',
      description: 'Full-scale production and timely delivery to your location',
      icon: Truck
    }
  ];

  const industries = [
    'FMCG & D2C Brands',
    'Retail Chains & Supermarkets',
    'Health & Wellness Brands',
    'Institutions & Schools',
    'Hotels & Restaurants',
    'Export Companies'
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity (MOQ)?',
      answer: 'MOQ varies by product category and customization level. Typically ranges from 500 kg to 1000 kg per SKU. Contact us for specific requirements.'
    },
    {
      question: 'What is the typical lead time?',
      answer: 'After formulation approval, standard lead time is 2-3 weeks for first order and 1-2 weeks for repeat orders, depending on order size.'
    },
    {
      question: 'Do you help with product development?',
      answer: 'Yes! We offer complete product development support including recipe formulation, nutritional analysis, and shelf-life testing.'
    },
    {
      question: 'Can you handle custom packaging?',
      answer: 'Absolutely. We support various packaging formats and can work with your packaging specifications or recommend options.'
    },
    {
      question: 'Do you provide FSSAI certification support?',
      answer: 'Yes, we assist with FSSAI licensing, labeling compliance, and all regulatory requirements for food products.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              End-to-End Millet & Cereal-Based Contract Manufacturing
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Partner with us to bring your millet-based food product vision to life. From formulation to packaging, we handle it all.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2"
            >
              <span>Submit Your Project Brief</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <div key={index} className="card">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offering.title}
                </h3>
                <p className="text-gray-700">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Types */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
            Product Types We Can Manufacture
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Breakfast Mixes (Idli, Dosa, Upma, etc.)',
                'Breakfast Cereals & Muesli',
                'Instant Mixes & Ready-to-Cook',
                'Millet-based Snacks & Energy Bytes',
                'Soups & Porridge Mixes',
                'Spice Powders & Masalas',
                'Flours & Grits (Multigrain, Millet-based)',
                'Custom Formulations'
              ].map((product, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Our Manufacturing Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 card">
                      <div className="flex items-start space-x-4">
                        <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
            Industries & Clients We Serve
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 px-6 py-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your contract manufacturing requirements. We'll guide you through every step.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContractManufacturing;
