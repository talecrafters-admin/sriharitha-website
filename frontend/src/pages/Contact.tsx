import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    interests: [] as string[],
    products: "",
    quantity: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactInfoRef.current) {
      const items = contactInfoRef.current.querySelectorAll(".contact-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const interestOptions = [
    "Contract Manufacturing",
    "Bulk Orders",
    "Distribution Partnership",
    "Private Label",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - Replace these with actual values later
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        interests: formData.interests.join(", "),
        products: formData.products,
        quantity: formData.quantity,
        message: formData.message,
      };

      // Note: This will fail until actual EmailJS credentials are provided
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        interests: [],
        products: "",
        quantity: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Ready to discuss your bulk requirements or contract manufacturing
            needs? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1" ref={contactInfoRef}>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="contact-item card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Plot No. B-35, BHEL AIE,
                        <br />
                        R.C. Puram, Hyderabad-502 032,
                        <br />
                        Telangana, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-700">
                        <a
                          href="tel:+919885704670"
                          className="hover:text-primary transition-colors font-medium"
                        >
                          +91 98857 04670
                        </a>
                        <br />
                        <a
                          href="tel:+919885704400"
                          className="hover:text-primary transition-colors font-medium"
                        >
                          +91 98857 04400
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-700">
                        <a
                          href="mailto:sriharithaagrofood@gmail.com"
                          className="hover:text-primary transition-colors font-medium break-all"
                        >
                          sriharithaagrofood@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-item card bg-primary/5 border-2 border-primary/20 hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card hover:shadow-card-hover transition-all duration-300">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Send us a Message
                </h2>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-xl mb-6 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">
                      Thank you! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-xl mb-6">
                    <p>
                      <strong>Note:</strong> EmailJS credentials need to be
                      configured. Please provide your details and we'll contact
                      you directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="India"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Interested In
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {interestOptions.map((option) => (
                        <label
                          key={option}
                          className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-xl hover:border-primary/50 transition-colors cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="text-gray-700 font-medium">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Products of Interest
                    </label>
                    <input
                      type="text"
                      name="products"
                      value={formData.products}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., Breakfast mixes, Energy bytes, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Approximate Monthly Quantity / Volume
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., 1000 kg/month"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent text-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Find Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Visit our manufacturing facility in Hyderabad
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-modern">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.12345678901234!3d17.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Haritha Agro Food Products Location"
              className="w-full"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-3 bg-primary/10 px-6 py-4 rounded-xl">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="text-gray-700 font-medium">
                Plot No. B-35, BHEL AIE, R.C. Puram, Hyderabad-502 032,
                Telangana, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
