import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "../ContactModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsContactModalOpen(true);
    };

    window.addEventListener("openContactModal", handleOpenModal);
    return () => {
      window.removeEventListener("openContactModal", handleOpenModal);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full m-0 p-0">
      <Header />
      {/* Use a single top padding so hero -mt-20 aligns exactly under header on all breakpoints */}
      <main className="flex-grow pt-20 w-full m-0">{children}</main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Layout;
