import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Code,
  Globe,
  Smartphone,
  Shield,
  CheckCircle2,
  Users,
  Award,
  Clock,
  MapPin,
  Heart,
  ChevronDown,
} from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaLaravel,
  FaAngular,
  FaVuejs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useEffect, useRef, useState } from 'react';
import BannerImage from "@/assets/hero-bg.avif"

const services = [
  {
    icon: Code,
    title: 'Custom Web Software',
    description:
      'Secure, scalable, and business-focused web applications tailored to your unique requirements.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Modern, responsive, SEO-optimized websites that drive results and engage your audience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Application',
    description:
      'Android, iOS, and hybrid mobile app development for seamless user experiences.',
  },
  {
    icon: Shield,
    title: 'AMC Service',
    description:
      'Annual maintenance, updates, security patches, and comprehensive IT support.',
  },
];

const whyChooseUs = [
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description:
      'Rigorous testing and quality checks at every stage of development.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Skilled developers with expertise in the latest technologies.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description:
      'Successfully delivered projects across multiple industries.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description:
      'Committed to meeting deadlines without compromising quality.',
  },
];

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: ".NET Core", icon: SiDotnet },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Java", icon: FaJava },
  { name: "PHP", icon: FaPhp },
  { name: "Laravel", icon: FaLaravel },
  { name: "Angular", icon: FaAngular },
  { name: "Vue.js", icon: FaVuejs },
  { name: "MySQL", icon: SiMysql },
  { name: "SQL Server", icon: DiMsqlServer },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
];

const faqData = [
  {
    question: "What types of software development services do you offer?",
    answer: "We offer custom web applications, mobile apps, CRM software, website development, and annual maintenance services. Our expertise includes React, Node.js, .NET, Java, PHP, and modern database technologies."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple websites may take 2-4 weeks, while complex custom software can take 3-6 months. We provide detailed timelines during the planning phase."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive AMC services including updates, security patches, bug fixes, and 24/7 technical support to ensure your software runs smoothly."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We offer flexible payment plans and provide detailed quotes after understanding your requirements."
  },
  {
    question: "Can you work with existing systems and databases?",
    answer: "Absolutely! We have experience integrating with legacy systems, migrating databases, and ensuring seamless compatibility with your existing infrastructure."
  },
  {
    question: "Do you sign NDAs for confidential projects?",
    answer: "Yes, we prioritize client confidentiality and are happy to sign NDAs. Your intellectual property and project details remain completely secure."
  }
]

const stats = [
  { value: 4, label: 'Countries', icon: Clock, suffix: '+' },
  { value: 20, label: 'Projects Completed', icon: Award, suffix: '+' },
  { value: 40, label: 'Happy Clients', icon: Heart, suffix: '+' },
  { value: 15, label: 'Team Members', icon: Users, suffix: '+' },
];

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
      if (isInView && !hasAnimated.current) {
        hasAnimated.current = true;
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / (endTime - startTime), 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.round(easeOutQuart * value);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-10">
        {/* Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={BannerImage}
            alt="Digital Solutions Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-4xl text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-black backdrop-blur border mb-6"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#654321]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-medium">
                Trusted IT Partner Since 2022
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              Building Smart{' '}
              <span className="inline-block px-3 py-1 bg-[#FFFBF0] text-[#0A2342] rounded-md">
                Digital Solutions
              </span>{' '}
              for the Future
            </motion.h1>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-white/90 mb-8"
            >
              <span>Web</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Mobile</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>CRM Software</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>Custom Software</span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 px-8"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              {/* <Button
                asChild
                size="lg"
                className="
            px-8
            bg-white/15
            text-white
            border-2
            border-white/70
            backdrop-blur-md
            hover:bg-white/25
            hover:border-white
            transition-all
          "
              >
                <Link to="/portfolio">View Our Working</Link>
              </Button> */}
            </motion.div>
          </div>

          {/* Right Side - Location Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-auto w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <h3 className="text-white text-xl font-semibold mb-6 pb-3 border-b border-white/20">
                <MapPin className="inline-block w-5 h-5 mr-2" />
                Global Presence
              </h3>

              <div className="space-y-4">
                {/* Dubai */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Dubai, UAE</h4>
                    <p className="text-white/70 text-sm">Middle East Headquarters</p>
                  </div>
                </div>

                {/* New York */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">New York, USA</h4>
                    <p className="text-white/70 text-sm">North America Office</p>
                  </div>
                </div>

                {/* Canada */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Honkong, China</h4>
                    <p className="text-white/70 text-sm">Asian Operations</p>
                  </div>
                </div>

                {/* UK */}
                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">London, UK</h4>
                    <p className="text-white/70 text-sm">European Hub</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-white/70 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-white/70 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      {/* <section className="py-12 bg-primary">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ================= SERVICES ================= */}
      <section className="section-padding bg-[#FFFBF0]">
        <div className="container-custom">

          {/* Section Header */}
          <SectionHeader
            label="What We Offer"
            title="Our Services"
            description="Comprehensive IT solutions tailored to help your business grow."
            align="center"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A2342]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-[#FFFBF0] mx-auto mb-3" />

                <div className="text-4xl md:text-5xl font-bold text-[#FFFBF0] mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </div>

                <div className="text-sm text-[#FFFBF0]/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section-padding bg-[#FFFBF0]">
        <div className="container-custom">
          <SectionHeader
            label="Why Choose Us"
            title="Your Trusted Technology Partner"
            description="We combine expertise with a client-first approach."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  className="
              group
              bg-white
              rounded-2xl
              p-6
              shadow-md hover:shadow-xl
              border border-[#654321]/20
              transition-all duration-300
              hover:-translate-y-2
              h-full
            "
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className="
                  w-12 h-12
                  rounded-xl
                  bg-[#0A2342]
                  flex items-center justify-center
                  group-hover:bg-[#654321]
                  group-hover:scale-110
                  transition-all duration-300
                  flex-shrink-0
                "
                    >
                      <item.icon className="w-6 h-6 text-[#FFFBF0]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="
                    text-lg font-semibold mb-2
                    text-[#0A2342]
                    transition-colors duration-300
                  "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                    text-sm leading-relaxed
                    text-[#654321]/80
                    transition-colors duration-300
                  "
                      >
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY STACK ================= */}
      <section className="section-padding !pt-4 overflow-hidden">
        <div className="container-custom">
          <SectionHeader
            label="Technology Stack"
            title="Technologies We Work With"
            description="Modern, scalable, and industry-leading technologies to build powerful digital solutions."
            align="center"
          />
        </div>

        {/* Slider Wrapper */}
        <div className="relative mt-12">
          <motion.div
            className="flex gap-6 w-max bg-[#0A2342]"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {/* Duplicate for infinite loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="
            flex flex-col items-center justify-center
            min-w-[160px]
            h-[120px]
            transition-all
          "
              >
                <tech.icon className="w-10 h-10 text-[#FFFBF0] mb-2" />
                <span className="text-sm font-medium text-[#FFFBF0]">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section-padding !pt-4 bg-[#FFFBF0]">
        <div className="container-custom">
          <SectionHeader
            label="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and process."
            align="center"
          />

          <div className="max-w-3xl mx-auto mt-12">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <div className="bg-white rounded-xl border border-[#654321]/20 overflow-hidden hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#FFFBF0]/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-[#0A2342] pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-[#654321] transition-transform duration-300 flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedFaq === index ? 'auto' : 0,
                      opacity: expandedFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-[#654321]/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#FFFBF0]">
        <div className="
    w-full max-w-[1100px] mx-auto 
    !py-10 !pt-14 section-padding 
    bg-[#0A2342] 
    border-t border-t-4 border-[#654321]
    rounded-tl-2xl rounded-tr-2xl 
    text-center
  ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFBF0] mb-4">
            Ready to Transform Your Business?
          </h2>

          <p className="text-lg text-[#FFFBF0]/80 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation today.
          </p>

          <Button
            asChild
            size="lg"
            className="
    group
    bg-[#FFFBF0]
    text-[#0A2342]
    px-8
    hover:bg-[#FFFBF0]
    hover:text-[#0A2342]
  "
          >
            <Link to="/contact" className="inline-flex items-center gap-2">

              {/* Text Wrapper */}
              <span className="relative inline-block">
                Start Your Project

                {/* Underline */}
                <span
                  className="
          absolute
          left-0
          bottom-0
          h-[2px]
          w-full
          bg-[#0A2342]
          scale-x-0
          origin-left
          transition-transform duration-300 ease-out
          group-hover:scale-x-100
        "
                />
              </span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

        </div>
      </section>

    </Layout>
  );
}
