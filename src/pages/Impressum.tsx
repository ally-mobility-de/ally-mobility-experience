import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              Impressum
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-card p-8 rounded-lg border">
                <div className="space-y-4 text-foreground">
                  <p className="font-semibold text-lg">Eliah Weishaupt</p>
                  <p>Alois-Lang Straße 18/1<br />
                     88339 Bad Waldsee<br />
                     Deutschland</p>
                  
                  <div className="pt-4 space-y-2">
                    <p><strong>Email:</strong> eliah@ally-mobility.de</p>
                    <p><strong>Web:</strong> www.ally-mobility.de</p>
                    <p><strong>Tel:</strong> 01622946705</p>
                  </div>
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

export default Impressum;