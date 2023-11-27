import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Header";
import React from "react";

const Contact = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Contact
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
