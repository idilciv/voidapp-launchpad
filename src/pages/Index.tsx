import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Target, BarChart3 } from "lucide-react";
import { toast } from "sonner";

const features = [
  {
    icon: Shield,
    title: "Smart Shielding",
    description: "Intelligently blocks distracting apps based on your habits and schedule.",
  },
  {
    icon: Target,
    title: "Deep Focus Sessions",
    description: "Enter distraction-free zones with timed focus sessions tailored to you.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visualize your attention recovery journey with detailed analytics.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("You're on the list! We'll be in touch.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-6xl mx-auto">
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-primary">M</span>istify
        </span>
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Coming Soon
        </span>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-xs font-mono text-primary tracking-[0.3em] uppercase mb-6"
          >
            Digital Renaissance
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Reclaim Your
            <br />
            <span className="text-primary">Attention Span.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Mistify blocks distracting apps to help you focus on what truly matters.
          </motion.p>

          <motion.form
            custom={3}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground font-mono text-sm"
              required
            />
            <Button type="submit" variant="glow" size="lg" className="h-12 px-8 font-semibold">
              Join the Waitlist
            </Button>
          </motion.form>
        </motion.div>

        {/* Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={fadeUp}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors duration-300"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-border">
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 Mistify. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
