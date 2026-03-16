import { Check, Mail } from "lucide-react";

export default function Registration() {
  const registrationTypes = [
    {
      type: "Student",
      price: "$250",
      popular: false,
      features: [
        "Conference Proceedings (IEEE)",
        "Access to All Sessions",
        "Coffee Breaks & Lunches",
        "Conference Kit & Materials",
        "Certificate of Attendance"
      ]
    },
    {
      type: "Academic / Researcher",
      price: "$450",
      popular: true,
      features: [
        "Conference Proceedings (IEEE)",
        "Access to All Sessions",
        "Coffee Breaks & Lunches",
        "Conference Kit & Materials",
        "Certificate of Attendance",
        "Networking Reception Access"
      ]
    },
    {
      type: "Industry Professional",
      price: "$650",
      popular: false,
      features: [
        "Conference Proceedings (IEEE)",
        "Access to All Sessions",
        "Coffee Breaks & Lunches",
        "Conference Kit & Materials",
        "Certificate of Attendance",
        "Networking Reception Access",
        "Gala Dinner Invitation",
        "Premium Networking Opportunities"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[300px] bg-deep">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-[56px] font-bold italic text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Registration
          </h1>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold italic text-ink mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Choose Your Registration Type
            </h2>
            <p className="text-[16px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>
              Early bird rates available until September 15, 2025
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {registrationTypes.map((reg) => (
              <div
                key={reg.type}
                className={`relative rounded-[20px] p-10 transition-all duration-200 ${
                  reg.popular
                    ? 'bg-ink text-white scale-105 shadow-xl'
                    : 'bg-white border border-rule hover:border-cipher hover:shadow-lg'
                }`}
              >
                {reg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cipher text-white text-[12px] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-[13px] font-semibold uppercase tracking-[2px] mb-4 ${reg.popular ? 'text-white/70' : 'text-slate'}`} style={{ fontFamily: 'var(--font-body)' }}>
                    {reg.type}
                  </h3>
                  <div className={`text-[40px] font-bold mb-2 ${reg.popular ? 'text-white' : 'text-cipher'}`} style={{ fontFamily: 'var(--font-mono)' }}>
                    {reg.price}
                  </div>
                  <p className={`text-[13px] ${reg.popular ? 'text-white/60' : 'text-slate'}`} style={{ fontFamily: 'var(--font-body)' }}>
                    per person
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {reg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={18} className={`flex-shrink-0 mt-0.5 ${reg.popular ? 'text-cipher' : 'text-cipher'}`} />
                      <span className={`text-[14px] ${reg.popular ? 'text-white' : 'text-ink'}`} style={{ fontFamily: 'var(--font-body)' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full h-11 rounded-xl text-[14px] font-semibold transition-all ${
                    reg.popular
                      ? 'bg-white text-cipher hover:shadow-lg'
                      : 'bg-cipher text-white hover:shadow-lg hover:shadow-cipher/40'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>

          <p className="text-[13px] text-slate italic text-center mt-8" style={{ fontFamily: 'var(--font-body)' }}>
            Need an invitation letter for visa purposes?{' '}
            <a href="mailto:registration@vcris2025.org" className="text-cipher hover:underline">
              Contact us →
            </a>
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[44px] font-bold italic text-ink text-center mb-16" style={{ fontFamily: 'var(--font-display)' }}>
            What's Included
          </h2>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: "IEEE Proceedings",
                description: "Your work published in IEEE Xplore digital library with full indexing in DBLP and major academic databases."
              },
              {
                title: "Networking Opportunities",
                description: "Connect with 200+ researchers and practitioners from 40+ countries during sessions, breaks, and social events."
              },
              {
                title: "Hybrid Access",
                description: "Attend in-person in Hanoi or join virtually. All sessions recorded and available for 90 days post-conference."
              },
              {
                title: "Conference Materials",
                description: "Comprehensive conference kit including program booklet, USB drive with proceedings, and VCRIS 2025 credentials."
              },
              {
                title: "Catering & Refreshments",
                description: "Daily lunches, morning and afternoon coffee breaks featuring local Vietnamese cuisine and international options."
              },
              {
                title: "Certificate",
                description: "Official certificate of attendance suitable for academic records, professional development, and funding reports."
              }
            ].map((item) => (
              <div key={item.title}>
                <div className="w-12 h-12 rounded-full bg-cipher/10 flex items-center justify-center mb-4">
                  <Check size={24} className="text-cipher" />
                </div>
                <h3 className="text-[18px] font-semibold text-ink mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.title}
                </h3>
                <p className="text-[15px] text-slate leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[44px] font-bold italic text-ink text-center mb-16" style={{ fontFamily: 'var(--font-display)' }}>
            How to Register
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {[
              { step: "01", title: "Select Type", description: "Choose your registration category" },
              { step: "02", title: "Fill Form", description: "Complete the registration form" },
              { step: "03", title: "Payment", description: "Secure online payment" },
              { step: "04", title: "Confirmation", description: "Receive confirmation email" }
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-cipher text-white flex items-center justify-center mx-auto mb-4 text-[20px] font-bold" style={{ fontFamily: 'var(--font-mono)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-[16px] font-semibold text-ink mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.description}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-cipher/30 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-deep py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Mail size={40} className="text-cipher mx-auto mb-4" />
          <h3 className="text-[32px] font-bold italic text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Questions About Registration?
          </h3>
          <p className="text-[16px] text-white/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Our registration team is here to help
          </p>
          <a
            href="mailto:registration@vcris2025.org"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cipher text-white text-[15px] font-semibold hover:shadow-lg hover:shadow-cipher/40 transition-all"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact Registration Team
          </a>
        </div>
      </section>
    </div>
  );
}
