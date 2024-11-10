import Image from "next/image";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import IconBox from "../components/iconbox/iconbox";

export default function About() {
    return (
      <div className="bg-background">
        <Navbar />

        <main>
          {/* Hero section */}
          <section id="hero" className="py-24">
            <div className="container">
              <h1 className="text-center">Minust</h1>
            </div>
          </section>

          {/* CV */}
          <section id="cv" className="py-24 bg-white">
            <div className="container">
              <div className="flex flex-col w-1/3">
                <div className="flex justify-center bg-[#D6A07E]">
                  <Image
                    src="/hero-photo.webp"
                    alt="Dr. Triin Suurorg"
                    width={300}
                    height={500}
                    className="object-cover max-w-[70%] xl:max-h-[600px] 2xl:max-h-[1000px]"
                  />
                </div>

                <h3 className="pt-6">Dr. Triin Suurorg</h3>
                <p className="pb-8 text-sm">Implantoloog</p>

                <div className="flex flex-col gap-4 py-8 border-y border-[#767471] border-opacity-30">
                  <IconBox 
                    iconSrc="/icons/map.svg"
                    alt="Address"
                    text="Tallinn, Eesti"
                    link="#"
                  />

                  <IconBox 
                    iconSrc="/icons/letter.svg"
                    alt="Email"
                    text="triinsuurorg@gmail.com"
                    link="mailto:triinsuurorg@gmail.com"
                  />
                </div>
              </div>

              <div className="flex flex-col w-2/3">
                
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }