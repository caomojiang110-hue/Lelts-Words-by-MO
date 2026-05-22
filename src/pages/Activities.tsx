import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Calendar, MapPin, Clock, Check } from "lucide-react";

const Activities = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wechat: "",
    paymentMethod: "alipay",
  });

  const activities = [
    {
      title: "Baduanjin (Eight Brocade)",
      description: "Learn the ancient Chinese qigong exercise that promotes health and vitality through eight silk-smooth movements.",
      duration: "2 hours",
    },
    {
      title: "Herbal Sachet Making",
      description: "Create your own aromatic herbal sachet using traditional medicinal herbs and techniques.",
      duration: "1.5 hours",
    },
    {
      title: "Tuina Massage Experience",
      description: "Experience traditional Chinese therapeutic massage that balances your body's energy.",
      duration: "1 hour",
    },
    {
      title: "Pulse Diagnosis Workshop",
      description: "Discover the art of reading pulses to understand body conditions in TCM diagnostics.",
      duration: "2 hours",
    },
  ];

  const highlights = [
    "Professional TCM instructors",
    "Authentic cultural experience",
    "Take-home herbal products",
    "Certificate of participation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted! We will contact you soon.");
    setFormData({ name: "", phone: "", wechat: "", paymentMethod: "alipay" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-primary/10 via-accent/20 to-background">
        <div className="container relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Activity Experience
          </h1>
          <p className="text-foreground/80 max-w-xl text-lg">
            Immerse yourself in authentic Traditional Chinese Medicine practices through our hands-on workshops
          </p>
        </div>
      </section>

      {/* Activity Info */}
      <section className="py-12 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-background border border-border">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">Beijing TCM Cultural Center</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-background border border-border">
              <div className="p-3 rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium text-foreground">Every Saturday & Sunday</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-background border border-border">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium text-foreground">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Available Experiences
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {activities.map((activity, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{activity.description}</p>
                  <p className="text-sm">
                    <span className="text-primary font-medium">Duration:</span> {activity.duration}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlights */}
          <div className="p-6 rounded-lg bg-accent/30 border border-border mb-12">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Activity Highlights
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="container max-w-xl">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">
                Register for Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="wechat">WeChat ID</Label>
                  <Input
                    id="wechat"
                    value={formData.wechat}
                    onChange={(e) => setFormData({ ...formData, wechat: e.target.value })}
                    placeholder="Enter your WeChat ID"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                    className="grid grid-cols-3 gap-4"
                  >
                    <div>
                      <RadioGroupItem
                        value="alipay"
                        id="alipay"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="alipay"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-border bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="text-sm font-medium">Alipay</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="wechat"
                        id="wechat-pay"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="wechat-pay"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-border bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="text-sm font-medium">WeChat Pay</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="bank"
                        id="bank"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="bank"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-border bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="text-sm font-medium">Bank Card</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
