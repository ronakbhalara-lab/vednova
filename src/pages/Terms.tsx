import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#654321] font-sans">

      {/* Header */}
      <header className="bg-[#0A2342] text-[#FFFBF0] py-12 px-4 text-center">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="mt-3 text-sm opacity-90">
          Vednova - The Software Company
        </p>
      </header>
      {/* Content */}
      <main className="max-w-5xl mx-auto px-5 py-12 pt-4 space-y-10">

        <Button
          asChild
          size="lg"
          className="
    group
    bg-[#FFFBF0]
    text-[#0A2342]
    hover:bg-[#FFFBF0]
    hover:text-[#0A2342]
  "
        >
          <Link to="/" className="inline-flex !p-0 items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            {/* Text Wrapper */}
            <span className="relative inline-block">
              Back to Home

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
          </Link>
        </Button>

        <Section title="1. Introduction">
          These Terms & Conditions (“Terms”) govern your use of the Vednova
          website and services. By accessing our website or using our services,
          you agree to comply with and be bound by these Terms. If you do not
          agree, please do not use our services.
        </Section>

        <Section title="2. Services">
          Vednova provides professional services including web development,
          custom website development, software solutions, and SEO services.
          Service scope, timelines, and deliverables will be defined in written
          agreements or project discussions.
        </Section>

        <Section title="3. Use of Website">
          You agree to use our website only for lawful purposes. You must not:
          <ul className="list-disc pl-5 mt-3 space-y-2">
            <li>Use the website for fraudulent or illegal activities</li>
            <li>Attempt to gain unauthorized access to systems or data</li>
            <li>Disrupt website functionality or security</li>
            <li>Copy or misuse website content without permission</li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          All content, code, designs, logos, graphics, and materials on this
          website are the intellectual property of Vednova unless stated
          otherwise. Unauthorized reproduction, distribution, or use is
          strictly prohibited.
        </Section>

        <Section title="5. Client Responsibilities">
          Clients agree to provide accurate information, content, and timely
          feedback required for project completion. Delays caused by missing
          information may impact delivery timelines.
        </Section>

        <Section title="6. Payments and Billing">
          Payment terms will be agreed upon before project commencement.
          Invoices must be paid within the agreed timeframe. Failure to make
          payments may result in suspension or termination of services.
        </Section>

        <Section title="7. Confidentiality">
          Both parties agree to keep confidential information private and not
          disclose it to third parties unless required by law or agreed in
          writing.
        </Section>

        <Section title="8. Limitation of Liability">
          Vednova shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of our website or
          services. We do not guarantee uninterrupted or error-free services.
        </Section>

        <Section title="9. Third-Party Services">
          Our services or website may include third-party tools or links.
          Vednova is not responsible for the performance, content, or policies
          of third-party services.
        </Section>

        <Section title="10. Termination">
          Vednova reserves the right to suspend or terminate services if these
          Terms are violated, payments are not made, or misuse is detected.
        </Section>

        <Section title="11. Governing Law">
          These Terms shall be governed by and interpreted in accordance with
          the laws of India. Any disputes shall be subject to the jurisdiction
          of Indian courts.
        </Section>

        <Section title="12. Changes to These Terms">
          Vednova may update these Terms at any time. Changes will be posted on
          this page with an updated effective date. Continued use of services
          constitutes acceptance of the revised Terms.
        </Section>

        <Section title="13. Contact Information">
          <p>If you have any questions about these Terms & Conditions, please contact us:</p>
          <p className="mt-2 font-semibold">
            Email: <span className="font-normal">support@vednovaitsolution.in</span>
          </p>
        </Section>

      </main>

      {/* Footer */}
      <footer className="bg-[#0A2342] text-[#FFFBF0] text-center py-4 text-sm">
        ©2023 Vednova - The Software Company. All rights reserved.
      </footer>
    </div>
  );
};

/* Reusable Section Component */
const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-xl font-semibold border-b-2 border-[#654321] inline-block pb-1">
        {title}
      </h2>
      <div className="mt-4 text-sm leading-7">
        {children}
      </div>
    </section>
  );
};

export default Terms;
