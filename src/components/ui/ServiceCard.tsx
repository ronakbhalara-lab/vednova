import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  delay?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="
        group relative
        bg-white
        rounded-2xl
        p-6 md:p-8
        border border-[#654321]/20
        shadow-md hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Icon Container */}
      <motion.div
        className="
          w-14 h-14
          rounded-xl
          bg-[#0A2342]
          flex items-center justify-center
          mb-5
          group-hover:scale-110
          transition-transform duration-300
        "
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
      >
        <Icon className="w-7 h-7 text-[#FFFBF0]" />
      </motion.div>

      {/* Title */}
      <h3 className="
        text-xl font-semibold
        text-[#0A2342]
        mb-3
        group-hover:text-[#654321]
        transition-colors duration-300
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4 text-[#654321]/80">
        {description}
      </p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-[#654321]/80"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A2342] flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Hover Accent Line */}
      <motion.div
        className="
          absolute bottom-0 left-0 right-0 h-1
          bg-[#0A2342]
          rounded-b-2xl
        "
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}
