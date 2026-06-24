import type { Metadata } from "next";
import EnquiryForm from "@/components/sections/EnquiryForm";

export const metadata: Metadata = {
  title: "Admission Enquiry",
  description:
    "Enquire about admission at Excel Education, Beanibazar. Book a free demo class or request a callback. Class 8, SSC & HSC batches available.",
};

export default function AdmissionPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#f59e0b] uppercase tracking-wide mb-2">Admission</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Enquire About Admission
          </h1>
          <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
            Fill in the form below, or call / WhatsApp us directly. We&apos;ll
            get back to you within a few hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc]">
              <h2 className="text-lg font-semibold text-[#1e293b] mb-4">
                Contact Directly
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#e2e8f0] hover:border-[#1e3a8a]/30 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a] shrink-0">
                    📞
                  </span>
                  <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider">Call</p>
                    <p className="text-sm font-medium text-[#1e293b] group-hover:text-[#1e3a8a] transition-colors">
                      +880 1XXX-XXXXXX
                    </p>
                  </div>
                </a>
                <a
                  href="https://wa.me/8801XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20admission%20at%20Excel%20Education."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#e2e8f0] hover:border-[#25D366]/30 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                    💬
                  </span>
                  <div>
                    <p className="text-xs text-[#94a3b8] uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm font-medium text-[#1e293b] group-hover:text-[#25D366] transition-colors">
                      Chat with us
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc]">
              <h2 className="text-lg font-semibold text-[#1e293b] mb-3">
                Location
              </h2>
              <p className="text-sm text-[#64748b] leading-relaxed">
                📍 Excel Education<br />
                Beanibazar, Sylhet<br />
                Bangladesh
              </p>
            </div>

            {/* Class timings */}
            <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc]">
              <h2 className="text-lg font-semibold text-[#1e293b] mb-3">
                Class Timings
              </h2>
              <ul className="text-sm text-[#64748b] space-y-2">
                <li><strong>Class 8:</strong> Sat, Mon, Wed — 4:00–6:00 PM</li>
                <li><strong>SSC:</strong> 6:30–8:30 PM (various days)</li>
                <li><strong>HSC:</strong> 8:00–10:30 AM (various days)</li>
              </ul>
              <p className="text-xs text-[#94a3b8] mt-3">
                Office hours: 9 AM – 8 PM, Saturday – Thursday
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
