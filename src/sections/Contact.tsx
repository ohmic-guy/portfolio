import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { SiInstagram, SiX } from "react-icons/si";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const socials = [
  { href: "https://linkedin.com/in/ohmicguy", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/ohmic-guy", icon: Github, label: "GitHub" },
  { href: "https://instagram.com/sudo_why", icon: SiInstagram, label: "Instagram" },
  { href: "https://x.com/ohmic_guy", icon: SiX, label: "X" },
  { href: "mailto:omkarankit2004@gmail.com", icon: Mail, label: "Email" },
];

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    alert("Message intercepted and queued for transmission.");
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6 uppercase leading-tight">
                  Let's Build <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-500">
                    Something Dangerous.
                  </span>
                </h2>
                <p className="text-gray-400 font-sans text-lg mb-8 max-w-md">
                  Open to freelance, internships, and research collaboration.
                  Whether it's breaking systems or building intelligent ones,
                  initiate contact below.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 lg:mt-0">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 bg-cyan-950/40 text-cyan-400 rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 hover:neon-glow transition-all"
                    data-testid={`contact-social-${label.toLowerCase()}`}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#050510]/80 p-6 md:p-8 rounded-xl border border-cyan-500/10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-cyan-400">IDENTIFIER</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-transparent border-cyan-500/30 focus-visible:ring-cyan-400 text-white font-sans placeholder:text-gray-600 rounded-sm"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-cyan-400">COMM_LINK</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="bg-transparent border-cyan-500/30 focus-visible:ring-cyan-400 text-white font-sans placeholder:text-gray-600 rounded-sm"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono text-cyan-400">PAYLOAD</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter your message..."
                            {...field}
                            className="bg-transparent border-cyan-500/30 focus-visible:ring-cyan-400 text-white font-sans placeholder:text-gray-600 rounded-sm min-h-[120px]"
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400 font-mono text-xs" />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    className="w-full py-4 bg-cyan-500/10 text-cyan-400 border border-cyan-400 rounded-sm font-display font-bold tracking-widest hover:bg-cyan-400/20 neon-glow transition-all flex items-center justify-center gap-2 group"
                    data-testid="btn-submit"
                  >
                    <span>TRANSMIT</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
