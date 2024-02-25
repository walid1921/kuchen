import { HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <section className="md:section  mb-[100px] lg:px-[270px] md:px-[80px]">
      <div className=" p-2 inline-block mb-8  bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white">
        <Link to={"/"}>
          <HiChevronUp size={28} className="rotate-[270deg]" />
        </Link>
      </div>

      <div>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col gap-10">
            <p className="text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                Küchentrend by Ka.Yu{" "}
              </strong>
              <br />
              Aydin Caliskan
            </p>

            <p className="text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                Address
              </strong>
              <br />
              Konsul-Smidt-Str. 39
              <br />
              28217 Bremen
              <br />
              Germany
            </p>

            <p className="text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                Vertreten durch:
              </strong>
              <br />
              Aydin Caliskan - Anschrift s.o.
            </p>

            <p className="text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                Kontakt:
              </strong>
              <br />
              Telefon: 0421/61 94 88 00
              <br />
              Fax: -<br />
              E-Mail:{" "}
              <a
                className="underline  text-primary"
                href="mailto:info@kuechentrend-kayu.de"
              >
                info@kuechentrend-kayu.de
              </a>
              <br />
              Internet:{" "}
              <a className="underline  text-primary" href="https://">
                https://
              </a>
            </p>

            <p className="text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                USt-ID:
              </strong>{" "}
              DE321514588
            </p>

            <p className="text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                Inhaber:
              </strong>{" "}
              Aydin Caliskan
            </p>
          </div>

          <div>
            <h3 className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
              Streitschlichtung
            </h3>
            <p className="text-justify">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                className="underline  text-primary"
                href="https://ec.europa.eu/consumers/odr"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>

          <div>
            <h3 className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
              Haftungshinweis
            </h3>
            <p className="text-justify">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>

            <ol className="list-decimal pl-6 mt-4 flex flex-col gap-8">
              <li>
                <h4 className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                  HAFTUNG FÜR INHALTE
                </h4>
                <p className="text-justify">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen. Als
                  Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                  Nutzung von Informationen nach den allgemeinen Gesetzen
                  bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>
              </li>
              <li>
                <h4 className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                  HAFTUNG FÜR LINKS
                </h4>
                <p className="text-justify">
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen. Für
                  die Inhalte der verlinkten Seiten ist stets der jeweilige
                  Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                  zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                  inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                  Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Links umgehend entfernen.
                </p>
              </li>
              <li>
                <h4 className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                  URHEBER- UND KENNZEICHENRECHT
                </h4>
                <p className="text-justify">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers. Downloads und Kopien dieser Seite sind nur für den
                  privaten, nicht kommerziellen Gebrauch gestattet. Soweit die
                  Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
                  werden die Urheberrechte Dritter beachtet. Insbesondere werden
                  Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                  bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                  von Rechtsverletzungen werden wir derartige Inhalte umgehend
                  entfernen.
                </p>
              </li>
              <li>
                <h4 className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                  RECHTSWIRKSAMKEIT DIESES HAFTUNGSAUSSCHLUSSES
                </h4>
                <p className="text-justify">
                  Dieser Haftungsausschluss ist als Teil des Internetangebotes
                  zu betrachten, von dem aus auf diese Seite verwiesen wurde.
                  Sofern Teile oder einzelne Formulierungen dieses Textes der
                  geltenden Rechtslage nicht, nicht mehr oder nicht vollständig
                  entsprechen sollten, bleiben die übrigen Teile des Dokumentes
                  in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
