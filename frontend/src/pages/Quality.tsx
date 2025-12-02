import React from 'react';
import { ShieldCheck, Award, Microscope, Factory, CheckCircle, Users } from 'lucide-react';

const Quality: React.FC = () => {
  const qualityPoints = [
    {
      title: 'Raw Material Inspection',
      description: 'Every batch of raw materials undergoes thorough quality checks before acceptance'
    },
    {
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring during production to ensure consistency'
    },
    {
      title: 'Finished Goods Testing',
      description: 'Final products tested for quality, taste, and nutritional parameters'
    },
    {
      title: 'Hygiene & Safety',
      description: 'Strict hygiene protocols and safety measures at every stage'
    },
    {
      title: 'Traceability',
      description: 'Complete batch traceability from raw materials to finished products'
    },
    {
      title: 'Regular Audits',
      description: 'Internal and external quality audits to maintain highest standards'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Quality & Infrastructure
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Committed to manufacturing excellence through world-class infrastructure and rigorous quality controls
          </p>
        </div>
      </section>

      {/* FSSAI Certification */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              FSSAI Certified Manufacturing
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Sri Haritha Agro Food Products Pvt. Ltd. is FSSAI (Food Safety and Standards Authority of India) certified, ensuring that all our products meet the highest food safety and quality standards mandated by the Government of India.
            </p>
            <p className="text-lg text-gray-700">
              Our manufacturing facility and processes are regularly inspected and audited to maintain compliance with all food safety regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Our Manufacturing Facility
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                State-of-the-Art Infrastructure
                </h3>
              <p className="text-gray-700 mb-4">
                Our manufacturing unit is strategically located in BHEL AIE, R.C. Puram, Hyderabad, equipped with modern machinery and technology for efficient production of millet and cereal-based food products.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clean and hygienic production environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Modern processing and packaging equipment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Temperature-controlled storage facilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Adequate capacity for bulk production</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1700727448575-6f1680cd7d75" 
                alt="Quality Control" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/5953751/pexels-photo-5953751.jpeg" 
                alt="Manufacturing" 
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Our Quality Control Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPoints.map((point, index) => (
              <div key={index} className="card">
                <Microscope className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Factory className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Hygiene & Safety Standards
            </h2>
            <p className="text-lg mb-8 text-white/90">
              We maintain the highest standards of hygiene and safety throughout our manufacturing process:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Personnel Hygiene</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Regular health check-ups for all staff</li>
                  <li>• Mandatory protective gear and clothing</li>
                  <li>• Comprehensive hygiene training programs</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Facility Hygiene</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Regular cleaning and sanitization</li>
                  <li>• Pest control measures</li>
                  <li>• Proper waste management systems</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Equipment Maintenance</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Regular equipment cleaning and maintenance</li>
                  <li>• Calibration of measuring instruments</li>
                  <li>• Preventive maintenance schedules</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Process Controls</h3>
                <ul className="space-y-2 text-white/90">
                  <li>• Temperature and humidity monitoring</li>
                  <li>• Time and temperature logs</li>
                  <li>• Documented standard operating procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Manufacturing Capabilities
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Product Types</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Breakfast mixes & cereals</li>
                  <li>• Instant mixes & ready-to-cook</li>
                  <li>• Extruded & baked snacks</li>
                  <li>• Soups & porridge mixes</li>
                  <li>• Spice powders & masalas</li>
                  <li>• Flours & grits</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Packaging Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pouches (100g to 1kg)</li>
                  <li>• Stand-up pouches with zipper</li>
                  <li>• LDPE/HDPE packaging</li>
                  <li>• Customized packaging available</li>
                  <li>• Bulk packaging for institutions</li>
                  <li>• Private label packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Experienced Team
            </h2>
            <p className="text-lg text-gray-700">
              Our team comprises experienced food technologists, quality control specialists, and production managers who bring decades of combined experience in food manufacturing. This expertise ensures consistent quality and innovation in every product we manufacture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
