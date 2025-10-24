import { Mail, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#f0f4ff] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Banner */}
        <div className="bg-gradient-to-r from-[#0021A5] to-[#0021A5]/90 rounded-2xl shadow-lg p-8 md:p-10 mb-12 text-center">
          <h2 className="text-white mb-4">Contact Us</h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="bg-gradient-to-r from-[#0021A5]/10 to-[#FA4616]/10 rounded-xl p-4 mb-6">
              <h3 className="text-gray-900 text-center">Get in Touch</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0021A5]/10">
                  <Mail className="text-[#0021A5]" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:anderson.paige@ufl.edu"
                    className="text-[#0021A5] hover:underline"
                  >
                    anderson.paige@ufl.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0021A5]/10">
                  <Linkedin className="text-[#0021A5]" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/company/ufnatsec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0021A5] hover:underline"
                  >
                    linkedin.com/company/ufnatsec
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#0021A5]/10">
                  <Phone className="text-[#0021A5]" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Phone</p>
                  <a
                    href="tel:+16148326794"
                    className="text-[#0021A5] hover:underline"
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
