import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Excel Education, Beanibazar, Sylhet.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="text-[#64748b]">Last updated: June 2026</p>

        <h2>What We Collect</h2>
        <p>
          When you submit an enquiry form, we collect: student name, parent/guardian
          name, phone number, WhatsApp number (optional), email (optional), class
          level, group, subjects of interest, area/location, and your message.
        </p>

        <h2>How We Use It</h2>
        <p>
          We use this information solely to respond to your enquiry, provide
          information about our courses, and follow up regarding admission. We do
          not sell, rent, or share your personal data with third parties.
        </p>

        <h2>Data Storage</h2>
        <p>
          Enquiry data is transmitted securely and stored in our database. Only
          authorised staff at Excel Education can access it.
        </p>

        <h2>Children&apos;s Data</h2>
        <p>
          Our enquiry form collects student names and class information. This data
          is collected with the consent of the parent or guardian submitting the
          form and is used only for admission purposes.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time by contacting us at the phone number or email listed on
          our website.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact us at:<br />
          Excel Education, Beanibazar, Sylhet, Bangladesh<br />
          Phone: +880 1XXX-XXXXXX
        </p>
      </div>
    </div>
  );
}
