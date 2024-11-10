import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import USP from "./components/usp/usp";
import Button from "./components/button/button";
import Review from "./components/review/review";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />

      <main>
        {/* Hero section */}
        <section id="hero" className="pt-12">
          <div className="flex container">
            <div className="flex flex-col w-1/2 gap-4 justify-center pr-12 pb-12 max-h-[90vh]">
              <h1>Care you can believe in.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Button href="#usps" className="mt-4">Loe rohkem</Button>
            </div>

            <div className="flex justify-center w-1/2 ml-12 bg-[#D6A07E]">
              <Image
                src="/hero-photo.webp"
                alt="Dr. Triin Suurorg"
                width={500}
                height={500}
                className="object-cover max-w-[70%] xl:max-h-[600px] 2xl:max-h-[1000px]"
              />
            </div>
          </div>
        </section>

        {/* USPs section */}
        <section id="usps" className="bg-white pt-40 pb-24 -mt-10">
          <div className="flex gap-8 container">
            <USP
              icon="/icons/holistic.svg"
              title="Holistiline lähenemine"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="bg-primary"
            />

            <USP
              icon="/icons/experience.svg"
              title="Suur kogemustepagas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="hover:bg-primary"
            />

            <USP
              icon="/icons/clinic.svg"
              title="Parimad töövahendid"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              className="hover:bg-primary"
            />
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-24 bg-[#343434]">
          <div className="container flex items-center">
            <div className="w-1/2">
              <Image
                src="/about-photo.jpg"
                alt="Dr. Triin Suurorg"
                width={500}
                height={500}
                className="h-[550px] object-cover object-bottom"
              />
            </div>

            <div className="flex flex-col gap-6 w-1/2">
              <p className="subheading">Minust</p>
              <h2 className="text-white">Parimad töövõtted <br /> ning tohutu kogemuste pagas</h2>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <Button className="hover:text-white" href="#">Vaata CV-d</Button>
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <section id="reviews" className="py-24">
          <div className="container flex flex-col gap-4">
            <p className="subheading text-center">arvustused</p>
            <h2 className="text-center">Patsientide kogemused</h2>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <Review
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                name="Kerli"
                color= "primary"
              />

              <Review
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                name="Tarmo"
                color="white"
              />

              <Review
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                name="Jaanika"
                color="white"
              />

              <Review
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                name="Kristel"
                color="white"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
