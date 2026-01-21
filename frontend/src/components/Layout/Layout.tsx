import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ContactModal from "../ContactModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
      {/* No padding on home page - hero section handles its own positioning */}
      <main className={`flex-grow w-full m-0 ${isHomePage ? "" : "pt-20 md:pt-24"}`}>
        {children}
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Layout;
