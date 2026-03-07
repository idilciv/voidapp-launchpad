import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import earthHorizon from "@/assets/earth-horizon.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
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
    <div className="relative min-h-[200vh] bg-background text-foreground font-sans overflow-x-hidden flex flex-col">
      {/* Earth horizon background */}
      <div className="absolute inset-0 z-0">
        <img
          src={earthHorizon}
          alt=""
          className="absolute bottom-0 left-0 w-full h-auto object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-6xl mx-auto w-full">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Mistify
        </span>
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Coming Soon
        </span>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center max-w-3xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.15] mb-6 text-foreground"
          >
            Attention is the most valuable asset in 21th century, protect it.
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed"
          >
            Mistify is a focus app that blocks distracting apps to help you reduce your screen time.
          </motion.p>

          <motion.form
            custom={2}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground text-sm"
              required
            />
            <Button type="submit" variant="glow" size="lg" className="h-12 px-8 font-semibold whitespace-nowrap">
              Get Notified
            </Button>
          </motion.form>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 md:mt-24 flex justify-center"
        >
          <div className="relative w-[280px] md:w-[320px]">
            {/* Phone frame */}
            <div className="relative rounded-[3rem] border-[6px] border-[hsl(var(--muted-foreground)/0.3)] bg-black shadow-[0_0_60px_hsl(var(--foreground)/0.08)] overflow-hidden">
              {/* Notch / Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />
              {/* Screen area - replace the placeholder with your app screenshot */}
              <div className="aspect-[9/19.5] w-full bg-background/50 flex items-center justify-center">
                <span className="text-muted-foreground/40 text-xs font-mono tracking-wider">
                  APP PREVIEW
                </span>
              </div>
            </div>
            {/* Subtle glow behind phone */}
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/0.04),transparent_70%)] -z-10" />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
