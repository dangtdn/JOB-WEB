import Carousel from "@/components/Carousel/Carousel";
import JobCard from "@/components/JobCard/JobCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel />
    </main>
  );
}
