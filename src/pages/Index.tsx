import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import earthHorizon from "@/assets/earth-horizon.jpg";
import handWithApp from "@/assets/phone-mockup.png";

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    const { error } = await supabase.from("waitlist").insert({ email });
    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast.info("You're already on the list!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    toast.success("You're on the list! We'll be in touch.");
    setEmail("");
  };

  return (
    <div className="relative min-h-screen min-h-[100dvh] bg-background text-foreground font-sans overflow-hidden flex flex-col">
      {/* Earth horizon background */}
      <div className="absolute inset-0 z-0">
        <img
          src={earthHorizon}
          alt=""
          className="absolute bottom-0 left-0 w-full h-[50%] sm:h-[60%] object-cover object-bottom"
        />
        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6 max-w-6xl mx-auto w-full">
        <span className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
          Void
        </span>
        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Coming Soon
        </span>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center max-w-3xl mx-auto px-4 sm:px-6 md:px-12 pt-2 sm:pt-4 md:pt-12 pb-0">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.15] mb-3 sm:mb-4 text-foreground"
          >
            Attention is the most valuable asset in 21st century, protect it.
          </motion.h1>
          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-muted-foreground px-2 sm:px-0"
          >
            Void is a focus app that blocks distracting apps to help you reduce your screen time.
          </motion.p>
        </motion.div>

        {/* Email Input Form */}
        <motion.form
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 md:mb-10 px-2 sm:px-0"
        >
          <Input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 sm:h-12 bg-secondary border-border text-foreground placeholder:text-muted-foreground text-sm"
            required
          />
          <Button type="submit" variant="glow" size="lg" className="h-11 sm:h-12 px-6 sm:px-8 font-semibold whitespace-nowrap text-sm sm:text-base" disabled={loading}>
            {loading ? "Joining..." : "Get Notified"}
          </Button>
        </motion.form>

        {/* Phone Mockup */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center w-full mt-2 sm:mt-auto -mb-8 sm:-mb-8 md:-mb-12"
        >
          <img
            src={handWithApp}
            alt="Void app preview"
            className="w-[160vw] sm:w-[90vw] md:w-[1200px] md:max-w-[90vw] h-auto mx-auto block relative z-20"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
