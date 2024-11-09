import Image from "next/image";

import Navbar from "./components/navbar/navbar";
import USP from "./components/usp/usp";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="hero" className="pt-12">
          <div className="flex container">
            <div className="flex flex-col justify-center pr-12">
              <h1>Care you can believe in.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <Image
              src="/hero-photo.webp"
              alt="hero"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* USPs */}
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
      </main>
      <footer className="flex items-center justify-center container py-4">
        <p>Triin Suurorg {new Date().getFullYear()}. Kõik õigused on kaitstud.</p>
      </footer>
    </div>
  );
}
