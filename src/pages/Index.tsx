import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ShoppingBag } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Cultural Knowledge",
      description: "Explore the ancient wisdom of Traditional Chinese Medicine through fascinating stories and educational content.",
      path: "/culture",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Activity Experience",
      description: "Join our immersive TCM workshops including Baduanjin, sachet making, massage therapy, and pulse diagnosis.",
      path: "/activities",
      color: "text-accent-foreground",
    },
    {
      icon: ShoppingBag,
      title: "Shop Products",
      description: "Browse our curated collection of authentic TCM products including herbal sachets and wellness items.",
      path: "/shop",
      color: "text-secondary",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-accent/20 to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent-foreground/20 blur-3xl" />
        </div>
        
        <div className="container relative z-10 text-center py-20">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Traditional Chinese Medicine</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Medimate
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
            Discover the ancient wisdom of Traditional Chinese Medicine. We provide cultural experiences, 
            educational content, and authentic TCM products for international students and travelers in China.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="font-medium">
              <Link to="/culture">
                <BookOpen className="mr-2 h-5 w-5" />
                Cultural Knowledge
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-medium">
              <Link to="/activities">
                <Calendar className="mr-2 h-5 w-5" />
                Activity Experience
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-medium">
              <Link to="/shop">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Products
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the rich heritage of Traditional Chinese Medicine through our comprehensive offerings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="group p-8 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg bg-primary/10 ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              About TCM Medimate
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              TCM Medimate aims to promote the international dissemination of traditional Chinese medicine (TCM) culture, 
              providing TCM cultural experience services and derivative product sales for international students 
              and tourists in China.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our platform, you can learn about ancient Chinese medical wisdom, participate in hands-on 
              workshops, and bring home authentic TCM products that embody centuries of healing tradition.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
