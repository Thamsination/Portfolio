'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="text-center"
          style={{ marginBottom: '4rem' }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900" style={{ marginBottom: '2rem' }}>
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: January 28, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-gray max-w-none"
          style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I am Christian Thams, and I operate this website (christianthams.com). I am committed to protecting your privacy and handling your personal data responsibly. This privacy policy explains how I collect, use, and protect your information when you use my website, in compliance with the General Data Protection Regulation (GDPR).
            </p>
          </section>

          {/* Data Controller */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Data Controller
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The data controller responsible for your personal data is:
            </p>
            <div className="bg-gray-50 rounded-lg" style={{ padding: '1.5rem', marginTop: '1rem' }}>
              <p className="text-gray-700">
                Christian Thams<br />
                Copenhagen, Denmark<br />
                Email: <a href="mailto:hello@christianthams.com" className="text-gray-900 hover:underline">hello@christianthams.com</a>
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              What Data I Collect
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ marginBottom: '1rem' }}>
              I only collect personal data that you voluntarily provide through the contact form on this website:
            </p>
            <ul className="list-disc list-inside text-gray-600" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Subject of your inquiry</li>
              <li>Message content</li>
            </ul>
            <p className="text-gray-600 leading-relaxed" style={{ marginTop: '1rem' }}>
              This website uses GoatCounter for anonymous visitor statistics. GoatCounter does not use cookies, does not collect personal data, and is fully GDPR compliant. You can view the public statistics at{' '}
              <a href="https://thamsination.goatcounter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">
                thamsination.goatcounter.com
              </a>.
            </p>
          </section>

          {/* Purpose */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Purpose of Data Processing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I use the personal data you provide solely to:
            </p>
            <ul className="list-disc list-inside text-gray-600" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              <li>Respond to your inquiries and messages</li>
              <li>Communicate with you about potential projects or collaborations</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Legal Basis for Processing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The legal basis for processing your personal data is your consent (Article 6(1)(a) GDPR), which you provide by checking the consent checkbox when submitting the contact form. You can withdraw your consent at any time by contacting me.
            </p>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Contact form submissions are processed through FormSpree, a third-party form handling service. FormSpree acts as a data processor on my behalf and is committed to GDPR compliance. For more information, please see{' '}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">
                FormSpree&apos;s Privacy Policy
              </a>.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, typically for up to 12 months after your last interaction. You may request deletion of your data at any time.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed" style={{ marginBottom: '1rem' }}>
              Under the GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-600" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Right of Access</strong> - You can request a copy of your personal data</li>
              <li><strong>Right to Rectification</strong> - You can request correction of inaccurate data</li>
              <li><strong>Right to Erasure</strong> - You can request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing</strong> - You can request limitation of processing</li>
              <li><strong>Right to Data Portability</strong> - You can request your data in a portable format</li>
              <li><strong>Right to Object</strong> - You can object to processing of your data</li>
              <li><strong>Right to Withdraw Consent</strong> - You can withdraw your consent at any time</li>
            </ul>
            <p className="text-gray-600 leading-relaxed" style={{ marginTop: '1rem' }}>
              To exercise any of these rights, please contact me at{' '}
              <a href="mailto:hello@christianthams.com" className="text-gray-900 hover:underline">
                hello@christianthams.com
              </a>.
            </p>
          </section>

          {/* Complaints */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Right to Lodge a Complaint
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you believe that your data protection rights have been violated, you have the right to lodge a complaint with a supervisory authority. In Denmark, this is the Danish Data Protection Agency (Datatilsynet):{' '}
              <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">
                www.datatilsynet.dk
              </a>.
            </p>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. I encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-lg" style={{ padding: '2rem' }}>
            <h2 className="text-2xl font-bold text-gray-900" style={{ marginBottom: '1rem' }}>
              Contact Me
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy or how I handle your personal data, please contact me at{' '}
              <a href="mailto:hello@christianthams.com" className="text-gray-900 hover:underline">
                hello@christianthams.com
              </a>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
