import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { routing } from "@/i18n/routing";

import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import IconBox from "@/app/components/iconbox/iconbox";
import CVBox from "@/app/components/cvbox/cvbox";


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.about');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function About({params}: {params: Promise<{locale: string}>}) {

  const {locale} = await params;

  setRequestLocale(locale);

  const t = await getTranslations("about");

    return (
      <div className="bg-background">
        <Navbar />

        <main>
          {/* Hero section */}
          <section id="hero" className="py-12 md:py-24">
            <div className="container">
              <h1 className="text-center">{t('hero.title')}</h1>
            </div>
          </section>

          {/* CV */}
          <section id="cv" className="bg-white">
            <div className="pt-12 md:pt-24 pb-8 container flex flex-col md:flex-row border-b border-[#767471] border-opacity-30">
              {/* <!-- Left side--> */}
              <div className="flex flex-col w-full md:w-1/3">
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
                <p className="pb-8 text-sm">{t('left-side.position')}</p>
                <div className="flex flex-col gap-4 py-8 border-y border-[#767471] border-opacity-30">
                  <IconBox 
                    iconSrc="/icons/map.svg"
                    alt="Address"
                    text="Tallinn, Eesti"
                    Link={false}
                  />

                  <IconBox
                    iconSrc="/icons/letter.svg"
                    alt="Email"
                    text="triinsuurorg@gmail.com"
                    link="mailto:triinsuurorg@gmail.com"
                  />
                </div>
                  <p className="mt-8">{t('left-side.description')}</p>
              </div>

              {/* <!-- Right side--> */}
              <div className="flex flex-col w-full pt-8 md:pt-0 md:w-2/3 md:ml-12">
                <h3 className="text-center md:text-left">{t('cv.education.title')}</h3>
                <div className="flex flex-col gap-8 mt-4 py-8 border-t border-[#767471] border-opacity-30">
                  <div className="flex flex-col md:grid md:grid-cols-[max-content,1fr] gap-y-8 gap-x-6 gap-4">
                    {t.raw('cv.education.items').map((item: { years: string, text: string }, index: number) => (
                      <CVBox key={index} years={item.years} text={item.text} />
                    ))}
                  </div>
                </div>

                <h3 className="mt-8 text-center md:text-left">{t('cv.courses.title')}</h3>
                <div className="flex flex-col md:grid md:grid-cols-[max-content,1fr] gap-y-8 gap-x-6 mt-4 py-8 border-t border-[#767471] border-opacity-30">
                  {t.raw('cv.courses.items').map((item: { years: string, text: string }, index: number) => (
                    <CVBox key={index} years={item.years} text={item.text} />
                  ))}
                </div>

                <h3 className="mt-8 text-center md:text-left">Artiklid</h3>
                <div className="flex flex-col md:grid md:grid-cols-[max-content,1fr] gap-y-8 gap-x-6 mt-4 py-8 border-t border-[#767471] border-opacity-30">
                  {t.raw('cv.articles.items').map((item: { years: string, text: string }, index: number) => (
                    <CVBox key={index} years={item.years} text={item.text} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer className="bg-white" />
      </div>
    );
  }