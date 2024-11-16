import Image from "next/image";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import IconBox from "../components/iconbox/iconbox";
import Button from "../components/button/button";
export default function Contact() {
    return (
      <div className="bg-background">
        <Navbar />
        <main className="min-h-screen">
          {/* Hero section */}
          <section id="hero" className="py-24">
            <div className="container">
              <h1 className="text-center">Kontakt</h1>
            </div>
          </section>

          {/* Contact section */}
          <section id="contact" className="py-24 bg-white">
            <div className="container flex flex-row-reverse">
              <div className="flex flex-col gap-6 justify-center w-1/2">
                <p className="subheading">Tule vastuvõtule</p>
                <h2 className="text-heading">Vali endale meelepärane kliinik</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                
                <div className="flex flex-col gap-4 items-end">
                  <IconBox
                    iconSrc="/icons/right-arrow.svg"
                    alt="Clinic link"
                    text="Bliss Hambaravi"
                    link="https://bdc.ee/kontakt/"
                    className="flex-row-reverse w-fit"
                    newTab={true}
                  />

                  <IconBox
                    iconSrc="/icons/right-arrow.svg"
                    alt="Clinic link"
                    text="Pirita Hambaravi"
                    link="https://piritahambaravi.ee/kontakt/"
                    className="flex-row-reverse w-fit"
                    newTab={true}
                  />
                </div>
              </div>

              <div className="w-1/2 flex justify-start items-star mr-16">
                <Image
                  src="/about-photo.jpg"
                  alt="About photo"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover"
                  />
              </div>
            </div>
          </section>

          <section id="contact-form" className="py-24 bg-background">
            <div className="container flex flex-col items-center gap-6">
              <p className="subheading">Saada kiri</p>
              <p className="text-center w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              <form className="flex flex-col gap-4 border border-[#767471] border-opacity-60 p-8 pb-6 w-1/2">
                <div className="flex flex-col gap-2">
                  {/* <label htmlFor="name">Nimi</label> */}
                  <input type="text" id="name" name="name" placeholder="Nimi" className="border border-[#767471] border-opacity-30 p-2 bg-transparent" />

                  {/* <label htmlFor="email">Email</label> */}
                  <input type="email" id="email" name="email" placeholder="Email" className="border border-[#767471] border-opacity-30 p-2 bg-transparent" />

                  {/* <label htmlFor="message">Sõnum</label> */}
                  <textarea id="message" name="message" placeholder="Sõnum" className="h-20 border border-[#767471] border-opacity-30 p-2 bg-transparent"/>

                  <Button className="self-center mt-4" href="#">Saada</Button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <Footer className="bg-background" />
      </div>
    );
  }