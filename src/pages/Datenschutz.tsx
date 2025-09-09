import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Datenschutzerklärung
            </h1>
            
            <p className="text-muted-foreground mb-12 italic">Stand: 09.09.2025</p>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-card p-8 rounded-lg border">
                <div className="space-y-6 text-foreground leading-relaxed">
                  
                  <p>
                    Diese Datenschutzerklärung informiert Sie darüber, wie wir (ally‑mobility) personenbezogene Daten verarbeiten, 
                    wenn Sie unsere rein <strong>statische Website</strong> besuchen, die wir über <strong>GitHub Pages</strong> bereitstellen. 
                    Wir betreiben <strong>keine Tracking‑Tools</strong>, <strong>kein Kontaktformular</strong>, <strong>keine eingebetteten Social‑Media‑Plugins</strong>, 
                    <strong>keine Web‑Schriftarten über CDN</strong> und <strong>keine Analyse‑/Marketing‑Cookies</strong>. 
                    Auf unserer Website finden Sie lediglich <strong>Verlinkungen</strong> (Outbound‑Links) zu unseren Präsenzen bei Instagram 
                    und LinkedIn sowie zu unserer Community‑Gruppe auf Telegram und ggf. zu weiteren externen Websites.
                  </p>

                  <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                    <p className="font-semibold">
                      Kurzfassung: Wir setzen auf minimale Datenverarbeitung. Server‑Logdaten fallen bei unserem Hoster GitHub an. 
                      Darüber hinaus verarbeiten wir personenbezogene Daten nur, wenn Sie uns aktiv kontaktieren (z. B. per E‑Mail) 
                      oder wenn Sie mit uns auf unseren Social‑Media‑Profilen interagieren.
                    </p>
                  </div>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">1. Verantwortlicher</h2>
                    <div className="space-y-2">
                      <p><strong>Eliah Weishaupt</strong></p>
                      <p>Alois-Lang Straße 18/1</p>
                      <p>88339 Bad Waldsee, Deutschland</p>
                      <p>E‑Mail: eliah@ally‑mobility.com</p>
                      <p>Telefon: +49 1622946705</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">2. Hosting über GitHub Pages</h2>
                    <p>
                      Unsere Website wird bei <strong>GitHub Pages</strong> gehostet (GitHub, Inc., 88 Colin P. Kelly Jr St, San Francisco, CA 94107, USA; 
                      GitHub B.V., Amsterdam, NL). Beim Aufruf unserer Seiten verarbeitet GitHub automatisch technische Informationen in 
                      <strong>Server‑Logfiles</strong> (u. a. IP‑Adresse, Datum/Uhrzeit, URL, User‑Agent, ggf. Referrer), um die 
                      <strong>Sicherheit</strong> und <strong>Stabilität</strong> der Bereitstellung zu gewährleisten.
                    </p>
                    <p>
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und effizienten Bereitstellung unseres Online‑Angebots).
                    </p>
                    <p>
                      <strong>Empfänger/Verarbeitung:</strong> GitHub verarbeitet die o. g. Logdaten <strong>in eigener Verantwortlichkeit</strong>. 
                      Weitere Informationen finden Sie in den Datenschutz‑ und Cookie‑Hinweisen von GitHub.
                    </p>
                    <p>
                      <strong>Drittlandübermittlung:</strong> Eine Übermittlung in die USA ist möglich. GitHub stützt sich hierfür auf 
                      geeignete Garantien nach Kapitel V DSGVO (z. B. EU‑Standardvertragsklauseln bzw. DPF‑Zertifizierungen einzelner 
                      GitHub‑Einheiten, soweit einschlägig).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">3. Zugriffsdaten (Server‑Logs)</h2>
                    <p>
                      Beim bloßen Besuch unserer Website verarbeiten <strong>wir</strong> keine personenbezogenen Daten, außer den von GitHub 
                      protokollierten <strong>Server‑Logs</strong>. Uns werden aus diesen Logs ggf. <strong>aggregierte</strong> oder 
                      <strong>anonymisierte</strong> Nutzungsinformationen bereitgestellt (z. B. Seitenaufrufe), ohne dass wir einzelne IP‑Adressen auswerten.
                    </p>
                    <p>
                      <strong>Speicherdauer:</strong> Die konkrete Speicherdauer der Logfiles bestimmt GitHub. Wir löschen eigene administrativ 
                      erhobene Protokolle (sofern vorhanden) nach Erreichen des Zwecks bzw. gemäß gesetzlichen Pflichten.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">4. Cookies, lokale Speichertechnologien & Consent</h2>
                    <p>
                      Wir setzen <strong>keine</strong> nicht notwendigen Cookies, keine lokalen Speichertechnologien (z. B. Local Storage) 
                      zu Marketing‑/Analyse‑Zwecken und <strong>keine</strong> Endgerätezugriffe, die eine Einwilligung nach § 25 Abs. 1 TDDDG erfordern.
                    </p>
                    <p>
                      <strong>Konsequenz:</strong> Ein <strong>Consent‑Banner</strong> ist auf unserer Website <strong>nicht erforderlich</strong>. 
                      Sollten wir künftig nicht notwendige Technologien (z. B. Analytics, eingebettete Videos, Karten, Social‑Media‑Widgets) 
                      einsetzen, informieren wir hierüber vorab und holen – soweit erforderlich – Ihre Einwilligung ein.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">5. Kontaktaufnahme per E‑Mail/Telefon</h2>
                    <p>
                      Wenn Sie uns per E‑Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten 
                      (z. B. E‑Mail‑Adresse, Telefonnummer, Inhalte Ihrer Nachricht), um Ihre Anfrage zu beantworten.
                    </p>
                    <p>
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation) 
                      bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
                    </p>
                    <p>
                      <strong>Speicherdauer:</strong> Wir speichern Anfragen so lange, wie es zur Bearbeitung und zur Dokumentation 
                      erforderlich ist bzw. wie es gesetzliche Aufbewahrungspflichten vorsehen.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">6. Externe Links (inkl. Social‑Media‑Links & Telegram)</h2>
                    <p>
                      Unsere Website enthält <strong>Links</strong> zu externen Websites Dritter (u. a. Instagram, LinkedIn, Telegram sowie weitere Quellen). 
                      Beim <strong>Klick</strong> auf einen solchen Link verlassen Sie unsere Website; ab diesem Zeitpunkt verarbeitet der jeweilige 
                      Anbieter Daten <strong>in eigener Verantwortlichkeit</strong>. Bitte beachten Sie die dort geltenden Datenschutzhinweise.
                    </p>
                    <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold">
                        Wichtiger Hinweis: Wir <strong>betten</strong> keine Social‑Media‑Plugins (z. B. Like‑Buttons) ein; es findet daher 
                        <strong>keine automatische Datenübertragung</strong> an diese Anbieter statt, solange Sie unsere Seiten nur ansehen 
                        und keine Links anklicken.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">7. Unsere Social‑Media‑Präsenzen</h2>
                    <p>
                      Wir unterhalten öffentliche Profile bei <strong>Instagram</strong> und <strong>LinkedIn</strong> sowie eine 
                      <strong>Community‑Gruppe bei Telegram</strong>. Wenn Sie diese Präsenzen besuchen oder mit uns dort interagieren 
                      (z. B. Nachrichten senden, Beiträge liken/kommentieren), verarbeitet der jeweilige Plattformanbieter Ihre Daten 
                      <strong>eigenständig</strong> gemäß seinen Nutzungs‑ und Datenschutzbedingungen. Wir erhalten ggf. 
                      <strong>aggregierte Statistiken</strong> (Insights) zu unseren Profilen; diese enthalten keine unmittelbaren personenbezogenen Daten.
                    </p>
                    <p>
                      <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Online‑Präsenz und Kommunikation mit Nutzer:innen). 
                      Bei direkter Kommunikation mit uns über die Plattformen gilt ergänzend Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">8. Rechtsgrundlagen im Überblick</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Art. 6 Abs. 1 lit. b DSGVO</strong> – Erfüllung eines Vertrags / vorvertragliche Maßnahmen (z. B. Kommunikation auf Anfrage).</li>
                      <li><strong>Art. 6 Abs. 1 lit. f DSGVO</strong> – Berechtigtes Interesse (sichere Bereitstellung der Website; effiziente Kommunikation; Außendarstellung).</li>
                      <li><strong>§ 25 Abs. 2 Nr. 2 TDDDG</strong> – Endgerätezugriffe, die technisch erforderlich sind (derzeit keine nicht notwendigen Zugriffe durch uns).</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">9. Empfänger / Kategorien von Empfängern</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Hosting/Plattform:</strong> GitHub (Bereitstellung/Logs).</li>
                      <li><strong>Kommunikation:</strong> E‑Mail‑Provider/Telefonieanbieter (wenn Sie uns kontaktieren).</li>
                      <li><strong>Social Media:</strong> Instagram/Meta, LinkedIn, Telegram – nur, wenn Sie die jeweiligen Plattformen nutzen/interagieren.</li>
                    </ul>
                    <p>Eine Weitergabe an sonstige Empfänger erfolgt nur, wenn dies gesetzlich erlaubt oder Sie eingewilligt haben.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">10. Übermittlungen in Drittländer</h2>
                    <p>
                      Bei der Nutzung von GitHub Pages sowie beim Aufruf externer Plattformen (z. B. Instagram, LinkedIn, Telegram) 
                      kann es zu Datenübermittlungen in <strong>Drittländer</strong> (u. a. USA) kommen. Diese Anbieter setzen sich 
                      in der Regel auf <strong>geeignete Garantien</strong> (z. B. EU‑Standardvertragsklauseln, ggf. DPF‑Zertifizierungen) 
                      oder andere gesetzliche Mechanismen. Die Details entnehmen Sie bitte den Datenschutzhinweisen der jeweiligen Anbieter.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">11. Speicherdauer</h2>
                    <p>
                      Wir verarbeiten personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist. 
                      Gesetzliche Aufbewahrungsfristen (z. B. Handels‑/Steuerrecht) bleiben unberührt. Server‑Logspeicherungen 
                      liegen in der Verantwortung von GitHub.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">12. Ihre Rechte</h2>
                    <p>Sie haben – unter den gesetzlichen Voraussetzungen – folgende Rechte:</p>
                    <p>
                      <strong>Auskunft</strong> (Art. 15 DSGVO), <strong>Berichtigung</strong> (Art. 16 DSGVO), 
                      <strong>Löschung</strong> (Art. 17 DSGVO), <strong>Einschränkung</strong> (Art. 18 DSGVO), 
                      <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO) sowie <strong>Widerspruch</strong> gegen 
                      Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO (Art. 21 DSGVO).
                    </p>
                    <p>
                      Sofern wir eine Verarbeitung auf <strong>Einwilligung</strong> stützen, können Sie diese 
                      <strong>jederzeit widerrufen</strong> (Art. 7 Abs. 3 DSGVO) mit Wirkung für die Zukunft.
                    </p>
                    <p>
                      <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Datenschutz‑Aufsichtsbehörde zu beschweren, 
                      insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des 
                      mutmaßlichen Verstoßes (Art. 77 DSGVO).
                    </p>
                    <p>Kontakt für Rechtewahrnehmung: siehe <strong>Verantwortlicher</strong>.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">13. Minderjährige</h2>
                    <p>
                      Unser Online‑Angebot richtet sich nicht an Kinder im Sinne von Art. 8 DSGVO. Wir verarbeiten wissentlich 
                      keine Daten von Personen unter 16 Jahren ohne entsprechende Zustimmung der Sorgeberechtigten.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">14. Sicherheit / TLS‑Verschlüsselung</h2>
                    <p>
                      Unsere Website ist über <strong>HTTPS/TLS</strong> erreichbar. Damit werden Daten während der Übertragung 
                      gegen Mitlesen geschützt. Beachten Sie, dass die Sicherheit der Kommunikation per E‑Mail vom von Ihnen 
                      genutzten Dienst abhängt.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">15. Änderungen dieser Datenschutzerklärung</h2>
                    <p>
                      Wir passen diese Datenschutzerklärung an, wenn sich Rechtslage, technische Implementierung oder unsere 
                      Verarbeitungsprozesse ändern. Die jeweils aktuelle Fassung ist jederzeit hier abrufbar; das 
                      <strong>Änderungsdatum</strong> sehen Sie oben unter „Stand".
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">16. Optional: Ergänzungen bei zukünftigen Features</h2>
                    <p>
                      Sollten künftig u. a. folgende Dienste hinzukommen, werden wir diese Datenschutzerklärung erweitern und 
                      – soweit erforderlich – <strong>vorher</strong> Ihre Einwilligung einholen:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Web‑Analyse</strong> (z. B. Matomo, Plausible);</li>
                      <li><strong>eingebettete Drittinhalte</strong> (z. B. YouTube, Karten, Social‑Widgets);</li>
                      <li><strong>Formulare/Newsletter/Live‑Chat</strong>;</li>
                      <li><strong>Shop‑/Bezahlfunktionen</strong>.</li>
                    </ul>
                  </section>

                  <p className="italic text-sm text-muted-foreground border-t pt-6">
                    Quelle: eRecht24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;