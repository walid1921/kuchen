import { HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const Agb = () => {
  return (
    <section className="md:section mb-[100px] lg:px-[270px] md:px-[80px]">
      <div className=" p-2 inline-block mb-8  bg-[rgba(114,114,114,0.69)] border border-gray-400 backdrop-blur-sm rounded-full hover:cursor-pointer transition-all ease-in-out duration-300 hover:bg-primary hover:text-white">
        <Link to={"/"}>
          <HiChevronUp size={28} className="rotate-[270deg]" />
        </Link>
      </div>

      <div className="">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col gap-10">
            <h2 className="text-primary text-[24px] font-extrabold  tracking-[4px]">
              Allgemeine Geschäftsbedingungen (AGB)
            </h2>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                1. Eigentumsvorbehalt
              </strong>
              <br />
              Die Ware bleibt bis zur vollständigen Zahlung des Kaufpreises
              Eigentum des Verkäufers. Der Käufer hat die unter
              Eigentumsvorbehalt stehenden Waren pfleglich zu behandeln. Jeder
              Standortwechsel und Eingriffe Dritter, insbesondere Pfändungen,
              sind dem Verkäufer unverzüglich mitzuteilen, bei Pfändungen unter
              Beifügung des Pfändungsprotokolls.
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                2. Änderungsvorbehalt
              </strong>
              <br />
              Serienmäßig hergestellte Möbel werden nach Muster oder Abbildung
              verkauft. Es besteht kein Anspruch auf Lieferung der
              Ausstellungsstücke, es sei denn, dass bei Vertragsabschluss eine
              anderweitige Vereinbarung erfolgt ist. Handelsübliche und
              zumutbare Farb- und Maserabweichungen bei Holzoberflächen bleiben
              vorbehalten.
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                3. Lieferfrist
              </strong>
              <br />
              Falls der Verkäufer die vereinbarte Lieferfrist nicht einhalten
              kann, hat der Käufer eine angemessene Nachfrist – beginnend vom
              Tag des Eingangs der schriftlichen Inverzugsetzung durch den
              Käufer, oder im Falle kalendermäßig bestimmter Lieferfrist mit
              deren Ablauf – zu gewähren. Liefert der Verkäufer bis zum Ablauf
              der gesetzten Nachlieferfrist nicht, kann der Käufer vom Vertrag
              zurücktreten. <br />
              Vom Verkäufer nicht zu vertretende Störungen im Geschäftsbetrieb
              des Verkäufers oder bei dessen Vorlieferanten, die auf einem
              unvorhersehbaren und unverschuldeten Ereignis beruhen, verlängern
              die Lieferfrist entsprechend. Zum Rücktritt ist der Käufer nur
              berechtigt, wenn er in diesen Fällen nach Ablauf der verlängerten
              Lieferfrist die Lieferung schriftlich anmahnt und diese dann nicht
              innerhalb einer zu setzenden angemessenen Nachfrist nach Eingang
              des Mahnschreibens des Käufers beim Verkäufer an den Käufer
              erfolgt. Die gesetzlichen Bestimmungen in Bezug auf Schadenersatz
              wegen Nichterfüllung bleiben unberührt.
              <br />
              Soweit nur Einzelelemente der Küche bzw. des Gesamtauftrags von
              der verspäteten Lieferung betroffen sind, besteht das
              Rücktrittsrecht nur insoweit.
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                4. Montage
              </strong>
              <br />
              Soweit die Erstellung des Aufmaßes in einem Rohbau stattfindet,
              werden in die Planung 1,5 cm Putzstärke zzgl. ggf. der
              Fliesenstärke in die Wand einberechnet.
              <br />
              Der Käufer hat dafür Sorge zu tragen, dass dieser Wert beim
              Verputzen der Wände nicht überschritten wird. Soweit diese W erte
              überschritten werden, ist der Verkäufer umgehend zu informieren.
              Der Käufer hat die Möglichkeit, die neuen Masse dem Verkäufer
              schriftlich mitzuteilen oder den Verkäufer zur erneuten
              Aufmaßnahme einzubestellen.
              <br />
              Die Kosten dafür trägt der Käufer. Der Verkäufer hat generell
              bauliche Veränderungen nach Aufmaßnahme nicht zu vertreten. Führen
              veränderte Raummaße zu einer Lieferverzögerung, hat der Verkäufer
              dafür nicht einzustehen, soweit die Lieferverzögerung sich aus
              einer erforderlich gewordenen Neubestellung ergibt.
              <br />
              Die Mitarbeiter oder Subunternehmer des Verkäufers sind nicht
              befugt, Arbeiten auszuführen, die über die vereinbarte Lieferung,
              Aufstellung oder Montage der W are hinausgehen. W erden dennoch
              solche Arbeiten durchgeführt, ist Auftragnehmer nicht der
              Verkäufer, sondern der jeweilige Mitarbeiter oder Subunternehmer.
              <br />
              Soweit der Käufer ohne Rücksprache mit dem Verkäufer einen anderen
              Aufbau/eine andere Montage wie vom Verkäufer geplant, vornimmt
              oder vornehmen lässt, trägt er insoweit das Risiko.
            </p>

            {/* <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                3. Lieferfrist
              </strong>
              <br />
              Falls der V
              <br />
            
            
            </p> */}

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                5. GEFAHRÜBERGANG
              </strong>
              <br />
              Die Gefahr, trotz Verlust oder Beschädigung der Ware den Kaufpreis
              zahlen zu müssen, geht mit der Übergabe auf den Käufer über.
              <br />
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                6. UNBERECHTIGTE NICHTERFÜLLUNG VON ABNAHME- UND/ODER
                VERTRAGSERFÜLLUNGSPFLICHTEN
              </strong>
              <br />
              Wenn der Käufer nach Abschluss des Vertrages hieraus re-
              sultierenden Abnahme- und/oder Vertragserfüllungsverpflichtungen
              unberechtigt nicht nachkommt oder sich diesen Pflichten
              unberechtigt verweigert oder die Erfüllung dieser Pflichten sonst
              wie unberechtigt verhindert, ist der Verkäufer berechtigt, nach
              vorheriger schriftlicher Mahnung und angemessener Fristsetzung, 30
              % des Bestellpreises als pauschalen Schadenersatz wegen
              Nichterfüllung zu verlangen. Dem Käufer bleibt der Nachweis
              unbenommen, dass dem Verkäufer kein oder ein geringerer Schaden
              entstanden ist. Weitergehende gesetzliche Rechte des Verkäufers
              bleiben unberührt.
              <br />
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                7. Lieferfrist
              </strong>
              <br />
              Der Verkäufer braucht nicht zu liefern, wenn der Hersteller die
              Produktion der bestellten Ware eingestellt hat oder Fälle höherer
              Gewalt vorliegen, sofern diese Umstände erst nach
              Vertragsabschluss eingetreten sind und der Verkäufer die
              Nichtbelieferung nicht zu vertreten hat und er ferner nachweist,
              sich vergeblich um Beschaffung gleichartiger Ware bemüht zu haben.
              Über die genannten Umstände hat der Verkäufer den Käufer
              unverzüglich zu benachrichtigen.
              <br />
              Der Verkäufer ist zum Rücktritt berechtigt, wenn der Käufer über
              die seine Kreditwürdigkeit bedingenden Tatsachen unrichtige
              Angaben gemacht hat oder er seine Zahlungen eingestellt oder über
              sein Vermögen ein Insolvenz- oder Vergleichsverfahren beantragt
              wurde, es sei denn, der Käufer leistet unverzüglich Vorauskasse
              oder ausreichende Sicherheit.
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                8. WARENRÜCKNAHME
              </strong>
              <br />
              Im Falle eines Rücktritts und der Rücknahme der gelieferten Ware
              hat der Verkäufer Anspruch auf Ausgleich für Aufwendungen,
              Gebrauchsüberlassung und Wertminderung. Seine Aufwendungen
              umfassen unter anderem die Kosten für den Transport und die
              Montage.
              <br />
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                9. SACHMÄNGELREGELUNG
              </strong>
              <br />
              Die Ware wird vom Verkäufer mit der im Einzelfall vereinbarten
              Beschaffenheit geliefert. Wenn und soweit eine besondere
              Beschaffenheitsvereinbarung nicht getroffen wurde, gilt die
              gesetzliche Regelung im Kaufrecht des BGB. Wenn danach die
              gelieferte Ware einen Sachmangel aufweist, hat der Käufer die
              gesetzlichen Rechte. Die Schadensersatzpflicht des Verkäufers wird
              für den Fall der Verletzung von Nebenpflichten durch leichte
              Fahrlässigkeit ausgeschlossen, soweit davon nicht Schäden an
              Leben, Körper oder Gesundheit betroffen sind.
              <br />
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                10. ZAHLUNG
              </strong>
              <br />
              Der Kaufpreis wird vorbehaltlich einer kürzeren Zahlungsfrist auf
              der Rechnung spätestens 30 Tage nach Rechnungsdatum fällig.
              Leistet der Käufer nicht fristgemäß, kommt er ohne eine weitere
              Mahnung des Verkäufers in Verzug.
              <br />
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                11. GERICHTSSTAND UND ERFÜLLUNGSORT
              </strong>
              <br />
              Ist der Käufer Vollkaufmann, juristische Person des öffentlichen
              Rechts oder öffentlich rechtliches Sondervermögen, so ist Sitz der
              Firma des Verkäufers ausschließlicher Gerichtsstand. Wenn der
              Käufer keinen allgemeinen Gerichtsstand im Inland hat, nach
              Vertragsabschluss seinen Wohnsitz oder gewöhnlichen Aufenthaltsort
              aus dem Inland verlegt oder sein Wohnsitz oder gewöhnlicher
              Aufenthaltsort zum Zeitpunkt der Klageerhebung nicht bekannt ist,
              ist Erfüllungsort und Gerichtsstand der Sitz der Firma des
              Verkäufers.
              <br />
            </p>

            <p className="t text-justify">
              <strong className="bg-gradient-to-r from-white to-[#a5a5a5] bg-clip-text text-transparent text-[24px] font-extrabold  tracking-[4px]">
                12. RECHTSWAHL
              </strong>
              <br />
              Es gilt das Recht der Bundesrepublik Deutschland.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agb;
