import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, Clock, Youtube } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['132 Kedar Business Center', 'Bapa Sitaram Chowk, Katargam , Surat - 395004'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 99740 37039', '+91 84690 99634'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@vednovaitsolution.in'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat : 9:30 AM - 6:30 PM'],
  },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/company/vednova-it-solution/posts/?feedView=all', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/vednova.it.solution_/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/vednovaitsolution1', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.youtube.com/@vednovaitsolution', icon: Youtube, label: 'Youtube' },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // 🔒 Phone number: digits only, max 10
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, ""); // remove non-numbers

      if (digitsOnly.length > 10) return;

      setFormData((prev) => ({
        ...prev,
        phone: digitsOnly,
      }));
      return;
    }

    // default for other fields
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent",
        description: "We will contact you within 24 hours",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1500));

  //   toast({
  //     title: 'Message Sent!',
  //     description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
  //   });

  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     service: '',
  //     message: '',
  //   });
  //   setIsSubmitting(false);
  // };

  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-50" />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container-custom relative z-10">
          <SectionHeader
            label="Get in Touch"
            title="Contact Us"
            description="Have a project in mind or need our services? We'd love to hear from you. Reach out and let's start a conversation."
          />
        </div>
      </section> */}

      {/* Contact Content */}
      <section className="section-padding bg-[#FFFBF0]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#654321]/20">
                <h3 className="text-2xl font-bold text-[#0A2342] mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[#FFFBF0]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-[#FFFBF0]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        placeholder="1234567890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-[#FFFBF0]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="
                    flex h-10 w-full rounded-md
                    border border-[#654321]/30
                    bg-[#FFFBF0]
                    px-3 py-2 text-sm
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#0A2342]
                  "
                      >
                        <option value="">Select a service</option>
                        <option value="web-software">Custom Web Software</option>
                        <option value="website">Website Development</option>
                        <option value="mobile">Mobile Application</option>
                        <option value="amc">AMC Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#FFFBF0] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0A2342] text-[#FFFBF0] hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-[#FFFBF0]/30 border-t-[#FFFBF0] rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="space-y-6">

                <div>
                  <h3 className="text-2xl font-bold text-[#0A2342] mb-2">
                    Let's Talk
                  </h3>
                  <p className="text-[#654321]/80">
                    We're here to help you achieve your digital goals. Reach out through any of the channels below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                      className="bg-white rounded-2xl p-5 shadow-md border border-[#654321]/20"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#654321] flex items-center justify-center mb-3">
                        <info.icon className="w-5 h-5 text-[#FFFBF0]" />
                      </div>

                      <h4 className="font-semibold text-[#0A2342] mb-1">
                        {info.title}
                      </h4>

                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-[#654321]/80">
                          {detail}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="font-semibold text-[#0A2342] mb-4">
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-[#0A2342] flex items-center justify-center text-[#FFFBF0] hover:bg-[#654321] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding !pt-0 bg-[#FFFBF0]">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-4">
              Have Questions?
            </h2>

            <p className="text-[#654321]/80 max-w-xl mx-auto mb-6">
              We're always happy to help. If you have any questions about our services,
              pricing, or process, don't hesitate to reach out.
            </p>

            <p className="text-[#654321] font-medium">
              Response time: Within 24 hours
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}