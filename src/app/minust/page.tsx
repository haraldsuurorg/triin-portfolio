import Image from "next/image";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import IconBox from "../components/iconbox/iconbox";
import CVBox from "../components/cvbox/cvbox";


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
          <section id="cv" className="bg-white pb-4">
            <div className="pt-24 pb-8 container flex border-b border-[#767471] border-opacity-30">
              {/* <!-- Left side--> */}
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
                    Link={false}
                  />

                  <IconBox
                    iconSrc="/icons/letter.svg"
                    alt="Email"
                    text="triinsuurorg@gmail.com"
                    link="mailto:triinsuurorg@gmail.com"
                  />
                </div>
                  <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt facilisis augue id pellentesque. Integer lorem tellus, scelerisque sed turpis in, consequat sollicitudin tellus. Morbi vitae porttitor nisi. Cras feugiat sed velit eget imperdiet. Donec fringilla augue sed lectus tincidunt, non sodales magna aliquet. Praesent eu augue ut libero accumsan pulvinar eget blandit augue. Fusce molestie facilisis est ut accumsan. Aenean eros leo, tincidunt at tincidunt nec, egestas vel turpis. Duis egestas dui id dui dapibus ornare. Praesent est dui, porttitor ac arcu at, posuere aliquet nulla. Nam aliquam velit eu nunc facilisis elementum.</p>
              </div>

              {/* <!-- Right side--> */}
              <div className="flex flex-col w-2/3 ml-12">
                <h3>Hariduskäik</h3>
                <div className="flex flex-col gap-8 mt-6 py-8 border-t border-[#767471] border-opacity-30">
                  <div className="flex flex-col gap-4">
                    <CVBox years="1989 - 1993" text="Tartu Ülikool. Ravi eriala üliõpilane" />
                    <CVBox years="1993 - 1997" text="Stockholmi Karolinska Instituut. Õpingud hammaste ravis, proteesimises ja kirurgias" />
                    <CVBox years="1999"      text="Implantoloogiaalane praktika, dr Pietro Cacciamani Dental Studio Milaanos" />
                    <CVBox years="2001 - 2007" text="Tartu Ülikool. Kliinilise hambaravi residentuur e. spetsialistiõpe implantoloogia suunitlusega" />
                    <CVBox years="2001"      text="Implantoloogiaalane praktika, Dr Kari Luotio, Osfix International Ltd Soomes" />
                    <CVBox years="2003 - 2004" text="TPERH näo-ja lõualuukirurgia osakond. Praktika näo- ja lõualuukirurgia alal" />
                    <CVBox years="2009 - 2010" text="Structured implant course in Frankfurt University." />
                    <CVBox years="2024" text="Pharma Nord Meistriklass: “Tervise alustalad”" />
                  </div>
                </div>

                <h3 className="mt-8">Täienduskoolitused</h3>
                <div className="flex flex-col gap-8 mt-6 py-8 border-t border-[#767471] border-opacity-30">
                  <CVBox years="Oktoober 2000" text="PHI spetsialistikoolitused implantoloogias"/>
                  <CVBox years="Märts 2001" text="Dr Juha Peltola, Wolfgang Wedenig seminar 'Implantaadid hambaravis'" />
                  <CVBox years="Aprill 2003" text="3i Implant Innovations, Basic Restorative Hands-on Course" />
                  <CVBox years="Mai 2003" text="Dr Bernhard Giesenhagen, 'Theoretical training and LIVE operations in advanced implantology'" />
                  <CVBox years="Märts 2004" text="Frank Bryggen 'Computer-aided tomography in implantology'" />
                  <CVBox years="Mai 2004" text="ITI-Weekend seminar Helsinki" />
                  <CVBox years="Mai 2004" text="Dr Bernhard Giesenhagen 'Theoretical training and LIVE operations (augmentation techniques)'" />
                  <CVBox years="Mai 2004" text="V Baltic Workshop on Osseointegrated Dental Implants" />
                  <CVBox years="Juuli 2004" text="Baltic Workshop on Prosthesis" />
                  <CVBox years="September 2004" text="13th Annual Scientific Meeting of EAO, Pariis" />
                  <CVBox years="April 2005" text="Pro-Implant Education Center, Melsungen, Saksamaa" />
                  <CVBox years="April 2005" text="Dentsply Friadent Annual Congress" />
                  <CVBox years="Mai 2005" text="Dr Darius Pocebutas, kirurgiline praktika, Kaunas" />
                  <CVBox years="Juuni 2005" text="Dr Juha Paatsama, Kokonaishammashoita Klinika, Helsinki" />
                  <CVBox years="September 2005" text="14th Annual Meeting of EAO, München" />
                  <CVBox years="Mai 2006" text="ITI Weekend seminar, Helsinki" />
                  <CVBox years="Juuni 2006" text="Hannoveri Ülikooli haigla näo- ja lõualuukirurgia osakond, praktika kirurgias" />
                  <CVBox years="Detsember 2006" text="Esteetiline tulemus implantoloogias. Praktiline implantoloogiaalane seminar. M.Stiller" />
                  <CVBox years="Jaanuar 2007" text="Soft tissue management, sinus lift, bone augmentive procedures. Italy" />
                  <CVBox years="April 2007" text="ITI World Symposium. New York" />
                  <CVBox years="Juuni 2007" text="Live surgeries on dental implantology. 3D One step Augmentation, implantation. Dr Berndt Giesenhagen" />
                  <CVBox years="Oktoober 2007" text="Esteetiline ja funktsionaalne harmoonia läbi kliinilise ja tehnilise perspektiivi. Dr Ashok Sethi ja MDT Peter Sochor (Inglismaa)" />
                  <CVBox years="Oktoober 2007" text="16th Annual meeting of EAO in Barcelona" />
                  <CVBox years="Veebruar 2008" text="Ilu ja kiiruse kontseptsioon implantoloogilise ravi protseduurides. Dr Orcan Yüksel (Saksamaa)" />
                  <CVBox years="Mai 2008" text="6th Congress of Baltic Association for Maxillofacial and Plastic Surgery" />
                  <CVBox years="Mai 2010" text="14th Densply Friadent World Symposium" />
                  <CVBox years="Märts 2012" text="15th Densply Friadent World Symposium, Hamburg" />
                  <CVBox years="Mai 2013" text="Osteology Symposium, Monaco" />
                  <CVBox years="Juuni 2013" text="Piezoelectric Bone Surgery 2nd International Symposium, Florence Italy" />
                  <CVBox years="September 2014" text="23rd Annual Scientific Meeting of the European Association of Osseointegration, Rome" />
                  <CVBox years="Juuni 2015" text="8th Conference of the European Federation of Periodontology, London" />
                  <CVBox years="Märts 2017" text="Advanced Bone and Soft Tissue Regeneration Techniques in Implant Therapy, Urban Regeneration Insitute" />
                  <CVBox years="November 2022" text="International NeoArch hands on course by Dr Pedro Rodrigues, Braga Portugal" />

                </div>

                <h3 className="mt-8">Artiklid</h3>
                <div className="flex flex-col gap-8 mt-6 py-8 border-t border-[#767471] border-opacity-30">
                  <CVBox years="Kodutoher, august 2004"   text="„Naeratus nagu pärl“" />
                  <CVBox years="Kodutoher, aprill 2008"   text="„Implantaat, lünkliku naeratuse päästeingel“" />
                  <CVBox years="Kodutoher, juuni 2008"    text="„Naeratus number kolm“" />
                  <CVBox years="Kodutoher, mai 2010"      text="„Kas implantaadid sobivad kõigile?“" />
                  <CVBox years="Terviseleht, aprill 2018" text="“Patsiendisõbralik implantoloogia”" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer className="bg-white" />
      </div>
    );
  }