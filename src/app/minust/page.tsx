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
            <div className="container flex">
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

              <div className="flex flex-col w-2/3 ml-12">
                <h3 className="mb-4">Biograafia</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt facilisis augue id pellentesque. Integer lorem tellus, scelerisque sed turpis in, consequat sollicitudin tellus. Morbi vitae porttitor nisi. Cras feugiat sed velit eget imperdiet. Donec fringilla augue sed lectus tincidunt, non sodales magna aliquet. Praesent eu augue ut libero accumsan pulvinar eget blandit augue. Fusce molestie facilisis est ut accumsan. Aenean eros leo, tincidunt at tincidunt nec, egestas vel turpis. Duis egestas dui id dui dapibus ornare. Praesent est dui, porttitor ac arcu at, posuere aliquet nulla. Nam aliquam velit eu nunc facilisis elementum.</p>

                <h3 className="mt-8">Hariduskäik</h3>
                <div className="flex flex-col gap-8 mt-6 mb-4 py-8 border-y border-[#767471] border-opacity-30">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 ">
                      <h4 className="flex-[0.15_0_0] text-nowrap text-primary font-semibold">1989-1993</h4>
                      <p className="flex-[0.85_0_0]">Tartu Ülikool. Ravi eriala üliõpilane</p>
                    </div>
                    <div className="flex gap-4">
                      <h4 className="flex-[0.15_0_0] text-nowrap text-primary font-semibold">1993-1997</h4>
                      <p className="flex-[0.85_0_0]">Stockholmi Karolinska
                      Instituut. Õpingud hammaste ravis, proteesimises ja kirurgias</p>
                    </div>
                    <div className="flex gap-4">
                      <h4 className="flex-[0.15_0_0] text-nowrap text-primary font-semibold">1999</h4>
                      <p className="flex-[0.85_0_0] ">Implantoloogiaalane praktika, dr Pietro Cacciamani Dental Studio Milaanos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }