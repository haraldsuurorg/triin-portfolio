import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link, routing } from '@/i18n/routing';
import { setRequestLocale } from "next-intl/server";

import Navbar from "../components/navbar/navbar";
import USP from "../components/usp/usp";
import Button from "../components/button/button";
import Review from "../components/review/review";
import Footer from "../components/footer/footer";

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function Home({params,}: {params: Promise<{locale: string}>}) {

  const {locale} = await params;

  setRequestLocale(locale);

  const t = await getTranslations("home");

  return (
    <div className="bg-background">
      <Navbar />

      <main>
        {/* Hero section */}
        <section id="hero" className="pt-12">
          <div className="flex flex-col md:flex-row container">
            <div className="flex flex-col md:w-1/2 gap-4 justify-center md:pr-12 md:pb-24 lg:pb-12 max-h-[90vh]">
              <h1>{t("hero.title")}</h1>
              <p>{t("hero.description")}</p>
              <Button href="#usps" className="mt-4 hidden md:block">
                {t("hero.button")}
              </Button>
            </div>

            <div className="flex justify-center mt-8 md:mt-0 md:w-1/2 md:ml-12 bg-[#D6A07E]">
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
        <section id="usps" className="bg-white pt-32 md:pt-40 pb-4 md:pb-24 -mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-8 container">
            <USP
              icon="/icons/holistic.svg"
              title={t("usp.usp1.title")}
              description={t("usp.usp1.description")}
              className="bg-primary"
            />

            <USP
              icon="/icons/experience.svg"
              title={t("usp.usp2.title")}
              description={t("usp.usp2.description")}
            />

            <USP
              icon="/icons/clinic.svg"
              title={t("usp.usp3.title")}
              description={t.rich("usp.usp3.description", {
                a: (chunks) => <a href="https://straumann.ee/">{chunks}</a>
              })}
            />
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-12 md:py-24 bg-[#343434]">
          <div className="container flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:mr-16">
              <Image
                src="/about-photo.jpg"
                alt="Dr. Triin Suurorg"
                width={500}
                height={500}
                className="w-full aspect-square object-cover"
              />
            </div>

            <div className="flex flex-col gap-6 mt-8 md:mt-0 md:w-1/2">
              <p className="subheading">Minust</p>
              <h2 className="text-white">
                Parimad töövõtted <br /> ning tohutu kogemuste pagas
              </h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa
                euismod ultrices. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </p>
              <Button className="hover:text-white" href="/minust">
                Vaata CV-d
              </Button>
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <section id="reviews" className="py-12 md:py-24">
          <div className="container flex flex-col gap-4">
            <p className="subheading text-center">arvustused</p>
            <h2 className="text-center">Patsientide kogemused</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <Review
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus elit non gravida ornare. Fusce pulvinar dui eget massa euismod ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                name="Kerli"
                color="primary"
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