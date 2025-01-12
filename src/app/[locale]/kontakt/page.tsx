import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import IconBox from "@/app/components/iconbox/iconbox";
import ContactForm from "@/app/components/contactform/contact-form";
import { routing } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.contact');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export default async function Contact({params}: {params: Promise<{locale: string}>}) {

  const {locale} = await params;

  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <div className="bg-background">
      <Navbar />
      <main className="min-h-screen">
        {/* Hero section */}
        <section id="hero" className="py-12 md:py-24">
          <div className="container">
            <h1 className="text-center">{t.raw('hero.title')}</h1>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-12 md:py-24 bg-white">
          <div className="container flex flex-col md:flex-row-reverse">
            <div className="flex flex-col gap-6 justify-center md:w-1/2">
              <p className="subheading">{t('clinic.subtitle')}</p>
              <h2 className="text-heading">{t('clinic.title')}</h2>
              <p>{t('clinic.description')}</p>

              <div className="flex flex-col gap-4 items-end">
                <IconBox
                  iconSrc="/icons/right-arrow.svg"
                  alt="Clinic link"
                  text={t('clinic.clinic1.text')}
                  link={t('clinic.clinic1.link')}
                  className="flex-row-reverse w-fit"
                  newTab={true}
                />

                <IconBox
                  iconSrc="/icons/right-arrow.svg"
                  alt="Clinic link"
                  text={t('clinic.clinic2.text')}
                  link={t('clinic.clinic2.link')}
                  className="flex-row-reverse w-fit"
                  newTab={true}
                />
              </div>
            </div>

            <div className="md:w-1/2 flex justify-start items-star mt-8 md:mt-0 md:mr-16">
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

        {/* Contact form section */}
        <section id="contact-form" className="py-12 md:py-24 bg-background">
          <div className="container flex flex-col items-center gap-6 md:w-3/4 lg:w-1/2 lg:min-w-[750px]">
            <p className="subheading">{t('contact.hero.title')}</p>
            <p className="text-center">{t('contact.hero.description')}</p>

            <ContactForm
              translations={{
                name: t('contact.form.name'),
                email: t('contact.form.email'),
                message: t('contact.form.message'),
                button: t('contact.form.button'),
                buttonLoading: t('contact.form.buttonLoading'),
                successMessage: t('contact.form.successMessage'),
                errorMessage: t('contact.form.errorMessage'),
              }}
            />
          </div>
        </section>
      </main>
      <Footer className="bg-background" />
    </div>
  );
}
