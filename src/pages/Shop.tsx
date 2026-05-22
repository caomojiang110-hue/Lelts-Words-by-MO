import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, Package } from "lucide-react";

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "alipay",
  });

  const product = {
    name: "Traditional Herbal Sachet",
    price: 20,
    currency: "CNY",
    rating: 4.8,
    reviews: 128,
    description: "Handcrafted herbal sachet filled with authentic Chinese medicinal herbs. Perfect for aromatherapy, relaxation, and promoting wellness. Each sachet is carefully made using traditional techniques passed down through generations.",
    features: [
      "100% Natural Herbs",
      "Handmade with Care",
      "Traditional Recipe",
      "Beautiful Gift Packaging",
    ],
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! We will contact you for delivery.");
    setFormData({ name: "", phone: "", address: "", paymentMethod: "alipay" });
    setShowCheckout(false);
    setQuantity(1);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-r from-primary/10 via-accent/20 to-background">
        <div className="container relative z-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            TCM Shop
          </h1>
          <p className="text-muted-foreground mt-2">Authentic Traditional Chinese Medicine Products</p>
        </div>
      </section>

      {/* Product Display */}
      <section className="py-8">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image Placeholder */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-border bg-card aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <Package className="h-24 w-24 text-primary/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Product Image</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-primary font-medium">TCM Product</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-1">
                  {product.name}
                </h2>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-accent-foreground fill-accent-foreground" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-foreground font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">CNY {product.price}</span>
                <span className="text-muted-foreground">/ piece</span>
              </div>

              {/* Description */}
              <p className="text-foreground/80 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <Label className="text-foreground">Quantity:</Label>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium text-foreground">
                    {quantity}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-muted-foreground">
                  Total: <span className="text-primary font-bold">CNY {product.price * quantity}</span>
                </span>
              </div>

              {/* Buy Button */}
              <Button
                size="lg"
                className="w-full"
                onClick={() => setShowCheckout(true)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="flex flex-col items-center text-center">
                  <Truck className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-muted-foreground">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Complete Your Order
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowCheckout(false)}
                >
                  X
                </Button>
              </div>

              {/* Order Summary */}
              <div className="p-4 bg-accent/30 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {quantity}</p>
                  </div>
                  <p className="font-bold text-primary">CNY {product.price * quantity}</p>
                </div>
              </div>

              <form onSubmit={handlePurchase} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="checkout-name">Full Name</Label>
                  <Input
                    id="checkout-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout-phone">Phone Number</Label>
                  <Input
                    id="checkout-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout-address">Delivery Address</Label>
                  <Textarea
                    id="checkout-address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Enter your full delivery address"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Payment Method</Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                    className="grid grid-cols-3 gap-3"
                  >
                    <div>
                      <RadioGroupItem
                        value="alipay"
                        id="checkout-alipay"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="checkout-alipay"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-border bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="text-sm font-medium">Alipay</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="wechat"
                        id="checkout-wechat"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="checkout-wechat"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-border bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="text-sm font-medium">WeChat</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="bank"
                        id="checkout-bank"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="checkout-bank"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-border bg-card p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="text-sm font-medium">Bank</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Place Order - CNY {product.price * quantity}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default Shop;
