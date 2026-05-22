import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Culture = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cultural Knowledge
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the fascinating stories and wisdom of Traditional Chinese Medicine
          </p>
        </div>
      </section>

      {/* Article - WeChat Style */}
      <section className="py-12">
        <div className="container max-w-2xl">
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              {/* Article Header */}
              <div className="p-6 border-b border-border">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  TCM Legend
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2">
                  The Legend of Shennong
                </h2>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span>TCM Medimate</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 space-y-6">
                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed text-lg first-letter:text-4xl first-letter:font-serif first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                    A long, long time ago, in ancient China, there was a legendary man called 
                    <strong className="text-primary"> Shennong</strong>, which means "the Divine Farmer." 
                    He cared deeply for his people and wanted everyone to live healthy lives.
                  </p>

                  <div className="my-8 p-6 bg-accent/50 rounded-lg border-l-4 border-primary">
                    <p className="text-foreground italic">
                      "In one single day, he tasted seventy kinds of herbs and even got poisoned many times — 
                      but he kept going, just to understand nature better."
                    </p>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    At that time, people didn't know which plants could be eaten or used for healing. 
                    So, Shennong decided to taste every herb himself — hundreds and thousands of them!
                  </p>

                  <p className="text-foreground leading-relaxed">
                    He tested one plant after another, learning which could cure illnesses and which were poisonous. 
                    It's said that, in one single day, he tasted seventy kinds of herbs and even got poisoned 
                    many times — but he kept going, just to understand nature better.
                  </p>

                  <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                    The Birth of Herbal Medicine
                  </h3>

                  <p className="text-foreground leading-relaxed">
                    From his experiences, he discovered many useful plants and wrote the first herbal book in China, 
                    called <em className="text-primary">"The Divine Farmer's Classic of Materia Medica"</em>. 
                    That's why we say Shennong was the founder of Chinese herbal medicine.
                  </p>

                  <div className="my-8 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-card rounded-lg border border-border text-center">
                      <span className="text-3xl font-bold text-primary">365</span>
                      <p className="text-sm text-muted-foreground mt-1">Herbs Documented</p>
                    </div>
                    <div className="p-4 bg-card rounded-lg border border-border text-center">
                      <span className="text-3xl font-bold text-primary">5000+</span>
                      <p className="text-sm text-muted-foreground mt-1">Years of History</p>
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed">
                    His legacy lives on today in every Chinese medicine clinic and herbal remedy. 
                    The spirit of Shennong — the willingness to sacrifice for the good of others — 
                    remains at the heart of Traditional Chinese Medicine.
                  </p>
                </div>

                {/* Article Footer */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-serif font-bold">M</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">TCM Medimate</p>
                        <p className="text-xs text-muted-foreground">Official Account</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">Published Jan 2025</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
