import { Link } from 'react-router-dom';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { Code, Globe, Smartphone, Shield, ArrowRight, Check, ClipboardList, ShieldCheck, CheckCircle, Settings, Rocket, Palette, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useEffect, useState } from 'react';

const services = [
  {
    icon: Code,
    title: 'Custom Web Software',
    description: 'Build powerful, secure, and scalable web applications tailored to your business needs. From enterprise solutions to SaaS platforms, we deliver software that drives efficiency and growth.',
    features: [
      'Enterprise Resource Planning (ERP)',
      'Customer Relationship Management (CRM)',
      'Workflow Automation Systems',
      'API Development & Integration',
      'Database Design & Optimization',
      'Cloud-Native Architecture',
    ],
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Create stunning, responsive, and SEO-optimized websites that captivate your audience and convert visitors into customers. We build websites that look great and perform even better.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'E-commerce Solutions',
      'Content Management Systems',
      'Performance Optimization',
      'Analytics Integration',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Application',
    description: 'Develop feature-rich mobile applications for iOS and Android platforms. Whether native or cross-platform, we create apps that deliver exceptional user experiences.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform (React Native, Flutter)',
      'UI/UX Design',
      'App Store Optimization',
      'Push Notifications & Analytics',
    ],
  },
  {
    icon: Shield,
    title: 'AMC Service',
    description: 'Keep your systems running smoothly with our comprehensive Annual Maintenance Contract services. We provide ongoing support, updates, and security to ensure business continuity.',
    features: [
      '24/7 Technical Support',
      'Security Updates & Patches',
      'Performance Monitoring',
      'Regular Backups',
      'Bug Fixes & Improvements',
      'Priority Response Time',
    ],
  },
];

const items = [
  {
    icon: ClipboardList,
    label: "Review",
    description: "Requirement analysis, feasibility check, and project planning.",
    color: "bg-emerald-500",
  },
  {
    icon: ShieldCheck,
    label: "Source Safe",
    description: "Secure version control and source code management.",
    color: "bg-yellow-500",
  },
  {
    icon: CheckCircle,
    label: "Test Case",
    description: "Test case creation and quality assurance validation.",
    color: "bg-amber-600",
  },
  {
    icon: Settings,
    label: "Automations",
    description: "Process automation to improve speed and efficiency.",
    color: "bg-sky-500",
  },
  {
    icon: Rocket,
    label: "Deploy",
    description: "Application deployment with performance monitoring.",
    color: "bg-red-500",
  },
  {
    icon: Code,
    label: "Development",
    description: "Custom software development using modern technologies.",
    color: "bg-rose-500",
  },
  {
    icon: Palette,
    label: "Design",
    description: "UI/UX design focused on usability and brand identity.",
    color: "bg-indigo-500",
  },
  {
    icon: BarChart3,
    label: "Analysis",
    description: "Data analysis and insights for better decision-making.",
    color: "bg-fuchsia-500",
  },
];

export default function Services() {
  const radius = 160;

  const rotation = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useAnimationFrame((t) => {
    // speed control (0.02 = slow, 0.05 = fast)
    rotation.set((t * 0.03) % 360);
  });
  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      const currentRotation = ((latest % 360) + 360) % 360;

      let closestIndex = 0;
      let smallestDiff = Infinity;

      items.forEach((_, i) => {
        // base angle (same offset as icons)
        const baseAngle = (360 / items.length) * i - 90;

        // final visible angle
        const visibleAngle = (baseAngle + currentRotation + 360) % 360;

        // distance from right side (0deg)
        const diff = Math.min(
          Math.abs(visibleAngle - 0),
          Math.abs(visibleAngle - 360)
        );

        if (diff < smallestDiff) {
          smallestDiff = diff;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    });

    return () => unsubscribe();
  }, []);


  return (
    <Layout>
      <div className=' overflow-hidden'>
        {/* Hero Section */}
        <section className="relative py-14 overflow-hidden bg-[#FFFBF0]">
          {/* Background Accent */}
          <div className="absolute inset-0 bg-[#654321]/10 opacity-40" />

          <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT – SERVICE CONTENT */}
            <div className="space-y-6">
              <span
                className="
          inline-block rounded-full
          bg-[#0A2342]/10
          px-4 py-1
          text-sm font-medium
          text-[#0A2342]
        "
              >
                Our Services
              </span>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#0A2342]">
                End-to-End{" "}
                <span className="text-[#654321]">
                  Software Development
                </span>
                <br /> Services
              </h1>

              <p className="text-lg text-[#654321]/80 max-w-xl">
                We follow a structured, transparent, and result-driven process to
                deliver high-quality software solutions — from planning to deployment.
              </p>

              <Button
                asChild
                size="lg"
                className="
          bg-[#0A2342]
          text-[#FFFBF0]
          hover:opacity-90
        "
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* RIGHT – ROTATING PROCESS + ACTIVE INFO */}
            <div className="relative flex justify-center items-center">

              {/* Rotating Icons */}
              <motion.div
                className="relative w-[320px] h-[320px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ rotate: rotation }}
              >
                {items.map((item, i) => {
                  const angle = (360 / items.length) * i - 10;
                  const rad = (angle * Math.PI) / 180;
                  const x = radius * Math.cos(rad);
                  const y = radius * Math.sin(rad);
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg`} >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  );
                })}
              </motion.div>

              {/* CENTER CONTENT (FIXED, NOT ROTATING) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-[220px] px-4 py-4">
                  <span className="text-xs font-medium text-[#654321] uppercase tracking-wide">
                    Current Stage
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-[#0A2342]">
                    {items[activeIndex].label}
                  </h3>

                  <p className="mt-2 text-sm text-[#654321]/80">
                    {items[activeIndex].description}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-[#FFFBF0]">
          <div className="container-custom space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-16 items-center`}
                >
                  {/* Icon Card */}
                  <motion.div
                    className="w-full lg:w-2/5"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="
              relative
              bg-white
              rounded-3xl
              p-8 md:p-12
              shadow-lg
              border border-[#654321]/20
              overflow-hidden
            ">
                      <motion.div
                        className="
                  absolute top-0 right-0
                  w-48 h-48
                  rounded-full
                  bg-[#654321]/30
                  blur-3xl
                "
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                      />

                      <div className="relative">
                        <motion.div
                          className="
                    w-20 h-20
                    rounded-2xl
                    bg-[#0A2342]
                    flex items-center justify-center
                    mb-6
                  "
                          transition={{ duration: 0.5 }}
                        >
                          <service.icon className="w-10 h-10 text-[#FFFBF0]" />
                        </motion.div>

                        <h3 className="text-2xl md:text-3xl font-bold text-[#0A2342]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5 space-y-6">
                    <p className="text-lg text-[#654321]/80 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="
                    w-5 h-5
                    rounded-full
                    bg-[#654321]
                    flex items-center justify-center
                    flex-shrink-0
                  ">
                            <Check className="w-3 h-3 text-[#FFFBF0]" />
                          </div>
                          <span className="text-sm text-[#0A2342]">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="
                bg-[#0A2342]
                text-[#FFFBF0]
                hover:opacity-90
              "
                    >
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-[#FFFBF0]">
          <div className="container-custom">
            <SectionHeader
              label="Our Process"
              title="How We Work"
              description="A streamlined approach to delivering exceptional results for every project."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "Understanding your needs, goals, and challenges through in-depth consultation.",
                },
                {
                  step: "02",
                  title: "Planning",
                  description:
                    "Creating a detailed roadmap with timelines, milestones, and deliverables.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Building your solution with agile methodology and regular progress updates.",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description:
                    "Rigorous testing, deployment, and ongoing support for success.",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.1}>
                  <div
                    className="
              relative
              bg-white
              rounded-2xl
              p-6
              shadow-md
              border border-[#654321]/20
              h-full
            "
                  >
                    <span
                      className="
                text-5xl
                font-bold
                text-[#654321]/40
                absolute
                top-4
                right-4
              "
                    >
                      {item.step}
                    </span>

                    <div className="pt-8">
                      <h3 className="text-xl font-semibold text-[#0A2342] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#654321]/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#FFFBF0]">
          <div className="
    w-full max-w-[900px] mx-auto
    !py-10 !pt-14 section-padding
    bg-[#0A2342]
    border-t border-t-4 border-[#654321]
    rounded-tl-2xl rounded-tr-2xl
    text-center
  ">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FFFBF0] mb-4">
                Need a Custom Solution?
              </h2>

              <p className="text-lg text-[#FFFBF0]/80 max-w-2xl mx-auto mb-8">
                Every business is unique. Let's discuss how we can create a tailored solution
                that perfectly fits your requirements.
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
                    Get Free Consultation

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
            </AnimatedSection>
          </div>
        </section>

      </div>
    </Layout>
  );
}