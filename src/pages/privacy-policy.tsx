import React from "react";

const Policy = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#654321] font-sans">

      {/* Header */}
      <header className="bg-[#0A2342] text-[#FFFBF0] py-12 px-4 text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm opacity-90">
          Vednova - The Software Company
        </p>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-5 py-12 space-y-10">

        <Section title="Introduction">
          Vednova - The Software Company (“Vednova”, “we”, “our”, or “us”) respects
          your privacy and is committed to protecting the personal information
          you share with us. This Privacy Policy explains how we collect, use,
          store, and safeguard your information when you visit our website or
          use our services including web development, custom websites, software
          solutions, and SEO services.
        </Section>

        <Section title="Information We Collect">
          <ul className="list-disc pl-5 space-y-2">
            <li>Personal details such as name, email address, and phone number</li>
            <li>Company or business-related information</li>
            <li>Project and technical requirements shared during discussions</li>
            <li>IP address, browser type, device information, and usage data</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide web development, software, and SEO services</li>
            <li>To respond to inquiries and communicate with clients</li>
            <li>To manage projects and improve service quality</li>
            <li>To enhance website performance and user experience</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>
        </Section>

        <Section title="Data Protection and Security">
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. However, no internet transmission is
          completely secure, and we cannot guarantee absolute security.
        </Section>

        <Section title="Sharing of Information">
          Vednova does not sell, trade, or rent your personal information. Your
          data may only be shared with trusted service providers, legal
          authorities when required by law, or to protect our legal rights.
        </Section>

        <Section title="Cookies and Tracking Technologies">
          Our website may use cookies to improve functionality and analyze
          website traffic. You can choose to disable cookies through your
          browser settings, though some features may not function properly.
        </Section>

        <Section title="Third-Party Links">
          Our website may contain links to third-party websites. Vednova is not
          responsible for the privacy practices or content of external sites.
          We encourage users to review their privacy policies.
        </Section>

        <Section title="Data Retention">
          We retain personal information only as long as necessary to fulfill
          the purposes outlined in this policy or as required by law. Data is
          securely deleted once it is no longer needed.
        </Section>

        <Section title="Your Rights">
          You have the right to access, correct, or request deletion of your
          personal information. You may also withdraw consent where applicable
          by contacting us directly.
        </Section>

        <Section title="Children's Privacy">
          Vednova does not knowingly collect personal data from individuals
          under the age of 18+. If such data is identified, it will be removed
          promptly.
        </Section>

        <Section title="Changes to This Privacy Policy">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. Continued use
          of our services indicates acceptance of the updated policy.
        </Section>

        <Section title="Contact Information">
          <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
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

export default Policy;
