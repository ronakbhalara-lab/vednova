import AboutImage from "@/assets/about-us.jpg";
import Team1 from "@/assets/team-1.png";
import Team2 from "@/assets/team-2.png";
import Team3 from "@/assets/team-3.png";
import Team5 from "@/assets/team-4.png";
import Team4 from "@/assets/team-5.png";
import Team6 from "@/assets/team-6.png";
import Team7 from "@/assets/team-7.png";
import Team8 from "@/assets/team-8.png";
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Eye, Heart, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest communication and transparent practices in every interaction.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to achieve shared success.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to quality and exceeding expectations in all we do.',
  },
];

const teamData = {
  ceo: {
    name: 'Rahul Munjani',
    designation: 'CEO',
    image: Team1
  },
  leaders: [
    {
      name: 'Mayank Ghadiya',
      designation: 'Team Leader',
      image: Team2
    },
    {
      name: 'Sneha Patel',
      designation: 'Team Leader',
      image: Team3
    }
  ],
  employees: [
    {
      name: 'Kishan Hadgala',
      designation: 'Full Stack Intern',
      image: Team4
    },
    {
      name: 'Ronak Bhalara',
      designation: 'Full Stack Developer',
      image: Team5
    },
    {
      name: 'Rajkumar Mali',
      designation: 'Full Stack Developer',
      image: Team6
    }
  ],
  marketing: [
    {
      name: 'Vibhuti Makvana',
      designation: 'Telecaller Executive',
      image: Team7
    },
    {
      name: 'Krisha Solanki',
      designation: 'Digital Marketing',
      image: Team8
    }
  ]
}

// Combine all team members for the carousel
const team = [
  teamData.ceo,
  ...teamData.leaders,
  ...teamData.employees,
  ...teamData.marketing
].map(member => ({
  name: member.name,
  role: member.designation,
  image: member.image
}));

const timeline = [
  {
    year: '2022',
    title: 'The Humble Beginning',
    description: 'Started our journey from a small home office with passion and determination.',
    projects: 1,
    isCompleted: true,
    highlights: [
      'Founded the company with a single home project',
      'Established our core development principles',
      'Built foundation for future growth'
    ]
  },
  {
    year: '2024',
    title: 'First Office & Expansion',
    description: 'Moved to our first official office space and expanded our client portfolio.',
    projects: 3,
    isCompleted: true,
    milestone: true,
    highlights: [
      'Officially opened our first office location',
      'Successfully delivered 3 major projects',
      'Expanded team with dedicated developers'
    ]
  },
  {
    year: '2026',
    title: 'Recognition & Success',
    description: 'Achieved significant growth and recognition as a reliable IT solutions provider.',
    projects: 7,
    isCompleted: true,
    milestone: true,
    highlights: [
      'Completed Diamond Jewelry E-commerce Platform',
      'Delivered Smart Attendance Management System',
      'Successfully launched 7 projects total',
      'Established strong client relationships'
    ]
  },
  {
    year: 'Present',
    title: 'Current Excellence',
    description: 'Continuing to deliver innovative solutions with an expanded service portfolio.',
    projects: '10+',
    isCompleted: false,
    highlights: [
      'Ongoing maintenance and support for all projects',
      'Exploring AI and ML integration services',
      'Planning international market expansion',
      'Developing proprietary software solutions'
    ]
  }
];

export default function About() {
  return (
    <Layout>
      <div className="overflow-hidden">
        {/* Minimalist About Banner */}
        <section className="container-custom bg-[#FFFBF0]">
          <div className="px-2 py-5 md:px-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* LEFT CONTENT */}
              <div>
                <span
                  className="
            inline-block rounded-full
            bg-[#0A2342]/10
            px-4 py-1
            text-sm font-medium
            text-[#0A2342]
          "
                >
                  About Us
                </span>

                <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-[#0A2342]">
                  We're here to <br />
                  <span className="text-[#654321]">build technology</span> <br />
                  for you.
                </h1>

                <p className="mt-3 text-[#654321]/80 text-base leading-relaxed max-w-md">
                  Since 2022, Vednova IT Solution has been delivering reliable,
                  scalable, and future-ready IT services that empower businesses
                  to grow with confidence.
                </p>

                <div className="mt-5">
                  <button
                    className="
              bg-[#654321]
              text-[#FFFBF0]
              px-7 py-3
              rounded-full
              text-sm font-medium
              hover:bg-[#5a3b1e]
              transition
            "
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="md:pl-0 pl-6 relative flex justify-center md:justify-end">
                {/* Image Wrapper */}
                <div
                  className="
            relative
            w-[320px] h-[320px]
            md:w-[360px] md:h-[360px]
            rounded-full
            border-[6px]
            border-[#0A2342]
            overflow-visible
          "
                >
                  <img
                    src={AboutImage}
                    alt="About Vednova"
                    className="w-full h-full rounded-full object-cover"
                  />

                  {/* Badge – EXACTLY TOUCHING BORDER */}
                  <div
                    className="
              absolute
              -left-12
              bottom-8
              bg-[#654321]
              text-[#FFFBF0]
              rounded-full
              w-24 h-24
              flex flex-col
              items-center
              justify-center
              text-center
              text-[11px]
              font-medium
              shadow-xl
            "
                  >
                    <span className="text-lg leading-none">★</span>
                    Trusted <br /> IT Partner
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding !pt-6 bg-[#FFFBF0]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              <AnimatedSection direction="left">
                <div
                  className="
            bg-white
            rounded-3xl
            p-8 md:p-10
            shadow-lg
            border border-[#654321]/20
            h-full
          "
                >
                  <div
                    className="
              w-14 h-14
              rounded-xl
              bg-[#0A2342]
              flex items-center justify-center
              mb-6
            "
                  >
                    <Target className="w-7 h-7 text-[#FFFBF0]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0A2342] mb-4">
                    Our Mission
                  </h3>

                  <p className="text-[#654321]/80 leading-relaxed">
                    To empower businesses with cutting-edge technology solutions that drive growth,
                    efficiency, and innovation. We are committed to delivering exceptional value through
                    our expertise, dedication, and client-centric approach.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.1}>
                <div
                  className="
            bg-white
            rounded-3xl
            p-8 md:p-10
            shadow-lg
            border border-[#654321]/20
            h-full
          "
                >
                  <div
                    className="
              w-14 h-14
              rounded-xl
              bg-[#0A2342]
              flex items-center justify-center
              mb-6
            "
                  >
                    <Eye className="w-7 h-7 text-[#FFFBF0]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0A2342] mb-4">
                    Our Vision
                  </h3>

                  <p className="text-[#654321]/80 leading-relaxed">
                    To be the leading IT solutions provider, recognized for our innovation, reliability,
                    and the lasting partnerships we build with our clients. We envision a future where
                    technology seamlessly enables business success.
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding !pt-10 bg-[#FFFBF0]">
          <div className="container-custom">
            <SectionHeader
              label="Our Values"
              title="What Drives Us"
              description="Core principles that guide everything we do."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-md border border-[#654321]/20 text-center h-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#654321] mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <value.icon className="w-8 h-8 text-[#FFFBF0]" />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-[#0A2342] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-[#654321]/80">
                      {value.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-[#FFFBF0]">
          <div className="container-custom">
            <SectionHeader
              label="Our Journey"
              title="Company Timeline"
              description="Key milestones that shaped our growth and success story."
            />

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#654321]/30 md:-translate-x-0.5" />

              <div className="space-y-10 md:space-y-14">
                {timeline.map((item, index) => (
                  <AnimatedSection key={item.year} delay={index * 0.1} direction="up">

                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start gap-4">
                      <div className="flex flex-col items-center z-10">
                        <div className="w-8 h-8 rounded-full bg-[#0A2342] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#FFFBF0]" />
                        </div>
                        <span className="mt-2 text-sm font-bold text-[#654321]">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="bg-white rounded-xl p-4 shadow-sm border border-[#654321]/20">
                          <h3 className="text-base font-semibold text-[#0A2342]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm text-[#654321]/80">
                            {item.description}
                          </p>

                          <div className="mt-3 flex items-center gap-2 text-sm text-[#654321]/80">
                            <div className="w-2 h-2 rounded-full bg-[#0A2342]" />
                            {item.projects} Projects
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div
                      className={`hidden md:flex items-center gap-10 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                    >
                      {/* Content Card */}
                      <div
                        className={`w-1/2 flex ${index % 2 === 0 ? "justify-end" : "justify-start"
                          }`}
                      >
                        <div className="bg-white rounded-2xl p-6 shadow-md border border-[#654321]/20 max-w-md">
                          <div className="flex items-center gap-4 mb-2">
                            <span className="text-2xl font-bold text-[#654321]">
                              {item.year}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-[#654321]/80">
                              <div className="w-2 h-2 rounded-full bg-[#0A2342]" />
                              {item.projects} Projects
                            </div>
                          </div>

                          <h3 className="text-lg font-semibold text-[#0A2342]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm text-[#654321]/80">
                            {item.description}
                          </p>

                          {item.highlights && (
                            <ul className="mt-3 pt-3 border-t border-[#654321]/20 space-y-1">
                              {item.highlights.map((highlight, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-[#654321]/80"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#0A2342] mt-1.5" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-[#0A2342] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#FFFBF0]" />
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="w-1/2" />
                    </div>

                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding !pt-10 bg-[#FFFBF0]">
          <div className="container-custom">
            <SectionHeader
              label="Our Team"
              title="Meet the Experts"
              description="Talented professionals dedicated to your success."
            />

            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {team.map((member, index) => (
                    <CarouselItem key={member.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <AnimatedSection delay={index * 0.1}>
                        <motion.div
                          className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#654321]/20 group"
                          whileHover={{ y: -5 }}
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#0A2342] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                          </div>

                          <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-[#0A2342]">
                              {member.name}
                            </h3>
                            <p className="text-sm text-[#654321]">
                              {member.role}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatedSection>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex left-0 bg-[#0A2342] text-white hover:bg-[#654321] border-none" />
                <CarouselNext className="hidden md:flex right-0 bg-[#0A2342] text-white hover:bg-[#654321] border-none" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Want to Join Our Journey?
              </h2>

              <p className="text-lg text-[#FFFBF0]/80 max-w-2xl mx-auto mb-8">
                Whether you're looking for a technology partner or a career opportunity,
                we'd love to hear from you.
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
                    Get in Touch

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