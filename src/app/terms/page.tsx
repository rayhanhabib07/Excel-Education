import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Excel Education, Beanibazar, Sylhet.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Terms &amp; Conditions</h1>
        <p className="text-[#64748b]">Last updated: June 2026</p>

        <h2>Services</h2>
        <p>
          Excel Education provides private tutoring services for Class 8, SSC, and
          HSC students under the NCTB national curriculum at our centre in
          Beanibazar, Sylhet, Bangladesh.
        </p>

        <h2>Admission</h2>
        <p>
          Admission is subject to seat availability. Submitting an enquiry form
          does not guarantee a seat. Confirmed admission requires completing the
          registration process and paying the applicable fees.
        </p>

        <h2>Fees &amp; Payment</h2>
        <p>
          Fees are payable monthly in advance. Fee amounts are listed on our
          Courses page and may be updated at the start of each academic term.
          Refunds are handled on a case-by-case basis.
        </p>

        <h2>Conduct</h2>
        <p>
          Students are expected to attend classes regularly, behave respectfully
          toward teachers and fellow students, and follow the institute&apos;s
          rules. Excel Education reserves the right to discontinue a
          student&apos;s enrolment in case of repeated misconduct.
        </p>

        <h2>Liability</h2>
        <p>
          While we strive for the best academic outcomes, results depend on
          individual student effort, attendance, and other factors. Excel
          Education does not guarantee specific exam results.
        </p>

        <h2>Website</h2>
        <p>
          This website is for informational purposes. We make reasonable efforts
          to keep content accurate and up to date, but course details, fees, and
          schedules may change. The most current information is available by
          contacting us directly.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at:<br />
          Excel Education, Beanibazar, Sylhet, Bangladesh<br />
          Phone: +880 1XXX-XXXXXX
        </p>
      </div>
    </div>
  );
}
