import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ourWorkImage from "@/assets/our-work.png"

const categories = ['All', 'Web Apps', 'Websites', 'Mobile Apps', 'Custom Software'];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    description: 'A comprehensive e-commerce solution with inventory management, payment integration, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: [],
    // ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Apps',
    description: 'Patient management system with appointment scheduling, medical records, and telemedicine features.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    technologies: [],
    //  ['Vue.js', 'Python', 'MongoDB'],
  },
  {
    title: 'Corporate Website',
    category: 'Websites',
    description: 'Modern responsive website for a financial services company with CMS integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: [],
    // ['Next.js', 'Tailwind CSS', 'Strapi'],
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile Apps',
    description: 'Cross-platform mobile app with real-time tracking, payment integration, and push notifications.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop',
    technologies: [],
    // ['React Native', 'Firebase', 'Stripe'],
  },
  {
    title: 'Inventory Management System',
    category: 'Custom Software',
    description: 'Enterprise inventory solution with barcode scanning, reporting, and multi-warehouse support.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
    technologies: [],
    //  ['Angular', '.NET Core', 'SQL Server'],
  },
  {
    title: 'Real Estate Platform',
    category: 'Websites',
    description: 'Property listing website with virtual tours, mortgage calculator, and lead management.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    technologies: [],
    // ['WordPress', 'PHP', 'MySQL'],
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Apps',
    description: 'iOS and Android app for workout tracking, nutrition logging, and progress analytics.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
    technologies: [],
    // ['Flutter', 'Node.js', 'MongoDB'],
  },
  {
    title: 'HR Management System',
    category: 'Custom Software',
    description: 'Complete HR solution with employee management, payroll, attendance, and performance tracking.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
    technologies: [],
    // ['React', 'Java', 'PostgreSQL'],
  },
  {
    title: 'Diamond Software',
    category: 'Custom Software',
    description: 'Diamond Software is a comprehensive software solution for diamond cutting and polishing.',
    image: 'https://www.3niinfotech.com/wp-content/uploads/2022/06/3niinfotech-diamond-solution_main-1.png',
    technologies: [],
    // ['Flutter', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Jewelry Management System',
    category: 'Custom Software',
    description: 'A comprehensive jewelry management platform for inventory tracking, customer management, and sales analytics with real-time reporting.',
    image: 'https://agethemes.com/wp-content/uploads/edd/2022/06/at-jewellery-1.png',
    technologies: [],
    // ['React', 'Node.js', 'MongoDB', 'Stripe API'],
  },
  {
    title: 'CRM System',
    category: 'Custom Software',
    description: 'A comprehensive jewelry management platform for inventory tracking, customer management, and sales analytics with real-time reporting.',
    image: 'https://img.freepik.com/free-vector/isometric-crm-illustration_52683-83950.jpg?semt=ais_hybrid&w=740&q=80',
    technologies: [],
    // ['React', 'Node.js', 'MongoDB', 'Stripe API'],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Portfolio Hero Banner */}
      <section className="relative overflow-hidden py-5 md:py-14 bg-[#FFFBF0]">

        {/* Background Accent */}
        {/* <div className="absolute inset-0 bg-[#654321]/10 opacity-40" /> */}

        {/* Animated Blur Shape */}
        {/* <motion.div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#0A2342]/20 blur-3xl"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity }}
        /> */}

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-7 md:px-20 items-center">

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
                Our Work
              </span>

              <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-[#0A2342]">
                Crafting Digital <br />
                <span className="text-[#654321]">Experiences</span> <br />
                That Perform
              </h1>

              <p className="mt-3 text-[#654321]/80 text-lg max-w-md">
                Discover a curated collection of digital solutions designed and
                developed to deliver performance, scalability, and business impact.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <button className="bg-[#0A2342] text-[#FFFBF0] px-7 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                  View Projects
                </button>

                <button className="border border-[#0A2342]/30 px-7 py-3 rounded-full text-sm font-medium hover:bg-[#0A2342]/5 transition">
                  Contact Us
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center md:justify-end">
              <img
                src={ourWorkImage}
                alt="Our Portfolio"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#FFFBF0] border-b border-[#654321]/20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-[#0A2342] text-[#FFFBF0]"
                  : "bg-[#654321]/10 text-[#654321] hover:bg-[#654321]/20"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding !pb-14 bg-[#FFFBF0]">
        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    className="group bg-white rounded-2xl overflow-hidden shadow-md border border-[#654321]/20 h-full"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#0A2342]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div className="w-12 h-12 rounded-full bg-[#654321] flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-[#FFFBF0]" />
                        </motion.div>
                      </div>
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#654321] text-xs font-medium text-[#FFFBF0]">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#0A2342] mb-2 group-hover:text-[#654321] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#654321]/80 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-[#654321]/10 text-xs text-[#654321]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#654321]/80">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <div className="pb-14 bg-[#FFFBF0] flex items-center justify-center">
        <Link
          to="/contact"
          className="group flex border-b border-[#654321] items-center gap-2 text-lg font-medium text-[#0A2342] hover:text-[#654321] transition-all duration-300"
        >
          See Industry Solutions
          <svg
            className="w-5 h-5 transition-all duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* CTA */}
      <section className='bg-[#FFFBF0]'>
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
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-[#FFFBF0]/80 max-w-2xl mx-auto mb-8">
              Let's bring your ideas to life. Contact us to discuss your project requirements and get a free quote.
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
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
}