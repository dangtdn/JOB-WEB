import Blogs from "@/components/Blogs/Blogs";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import JobCard from "@/components/JobCard/JobCard";
import Navbar from "@/components/Navbar/Navbar";
import Reviews from "@/components/Reviews/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Carousel />
        {/* <Reviews /> */}
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
