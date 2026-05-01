import { Mail, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#0a1628] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-white text-center text-3xl md:text-5xl font-bold tracking-[0.12em] uppercase">
              CONTACT US
            </h2>
            <div
              className="mt-10 rounded-full"
              style={{
                width: '28rem',
                maxWidth: '72vw',
                height: '3px',
                backgroundColor: '#FA4616',
                boxShadow: '0 0 12px rgba(250, 70, 22, 0.3)',
              }}
            />
          </div>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-center text-lg mt-8">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-4 mb-6">
              <h3 className="font-mono text-white text-center">Get in Touch</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3b82f6]/10 border border-[#1e3a5f]">
                  <Mail className="text-[#3b82f6]" size={20} />
                </div>
                <div>
                  <p className="text-white mb-1">Email</p>
                  <a
                    href="mailto:anderson.paige@ufl.edu"
                    className="text-[#3b82f6] hover:underline"
                  >
                    anderson.paige@ufl.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3b82f6]/10 border border-[#1e3a5f]">
                  <Linkedin className="text-[#3b82f6]" size={20} />
                </div>
                <div>
                  <p className="text-white mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/company/ufnsc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b82f6] hover:underline"
                  >
                    linkedin.com/company/ufnsc
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3b82f6]/10 border border-[#1e3a5f]">
                  <Phone className="text-[#3b82f6]" size={20} />
                </div>
                <div>
                  <p className="text-white mb-1">Phone</p>
                  <a
                    href="tel:+16148326794"
                    className="text-[#3b82f6] hover:underline"
                  >
                    (614) 832-6794
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
