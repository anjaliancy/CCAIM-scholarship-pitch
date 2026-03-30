import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeOption, setActiveOption] = useState('scholarship');

  const scholarshipOptions = {
    scholarship: {
      title: 'Tuition Waiver',
      description: `I'll apply knowledge to active projects within weeks. Your curriculum directly scales to clinical impact.`,
    },
    workstudy: {
      title: 'Tuition Reduction',
      description: 'A partial scholarship would enable me to share in the benefits of program-related work (content, research, community building).',
    },
  };

  return (
    <>
      <Head>
        <title>Anjali Ancy | ML in Healthcare Scholarship</title>
        <meta name="description" content="Scholarship request for ML in Healthcare Summer School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main container now uses 'bg-primary' (Cream) and 'text-text' (Plum) */}
      <main className="bg-primary text-text min-h-screen">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-border">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-sm font-bold tracking-tight text-text">Anjali Ancy</div>
            <a
              href="#contact"
              className="text-sm px-4 py-2 bg-accent text-white rounded hover:opacity-90 transition"
            >
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 leading-tight text-text">
              Clinical insight meets AI precision
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl">
              I've spent 3+ years translating healthcare research into machine learning solutions—from dermatology to public health data to data governance. Now I'm seeking your support to formalize production ML expertise.
            </p>
            <a
              href="#credentials"
              className="text-sm px-5 py-2.5 bg-secondary text-text border border-border rounded hover:bg-tertiary transition inline-block font-medium"
            >
              Learn more
            </a>
          </div>
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="py-16 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-10">Background</h2>
            <div className="space-y-8">
              {[
                { label: 'Research & Publications', content: '4 peer-reviewed publications in Mycoses, JID, and IDOJ. Research spans clinical validation, microbiome analysis, and healthcare digital infrastructure.' },
                { label: 'Conferences', content: 'Presented at IMCAS World Congress 2026 (Paris), AI & the City 2025, and AI World Health Summit.' },
                { label: 'Technical Expertise', content: 'NLP pipelines, patient sentiment analysis, genomic data analysis, RAG-based LLM governance, and time series forecasting.' },
                { label: 'Community', content: 'External PR Lead at Healthcare Data Analytics Association. Multilingual (6 languages). Community strategist at Electric Minds.' }
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-tertiary mb-2">{item.label}</h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Projects - Progress bars using Dark Pink */}
        <section className="py-16 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-10">Current Work</h2>
            <div className="space-y-6">
              {[
                { label: 'SkinAid NLP research', progress: 85 },
                { label: 'Healthcare ML consulting', progress: 70 },
                { label: 'Genomic data analysis', progress: 50 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-text">{item.label}</span>
                    <span className="text-xs font-mono text-text-tertiary">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-tertiary rounded-full h-1.5">
                    <div
                      className="bg-dark-pink h-1.5 rounded-full transition-all duration-700"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* What I'm Asking For - Three Options Layout */}
        <section className="py-16 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">What I'm Asking For</h2>
            <p className="text-text-secondary text-base mb-10">
              I am committed to this program and open to flexible structures that make attendance feasible. 
              I am proposing the following options:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Option 1: Tuition Waiver */}
              <div className="p-6 bg-white/40 border border-plum/10 rounded-xl shadow-sm flex flex-col">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h3 className="text-lg font-bold mb-3 text-text">Tuition Waiver</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  A full waiver would allow me to dedicate my summer entirely to the curriculum and peer learning without financial constraint.
                </p>
              </div>

              {/* Option 2: Tuition Reduction */}
              <div className="p-6 bg-white/40 border border-plum/10 rounded-xl shadow-sm flex flex-col">
                <div className="w-10 h-10 bg-dark-pink text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h3 className="text-lg font-bold mb-3 text-text">Tuition Reduction</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  A partial scholarship where I can contribute back through program-related work, such as research assistance or community building.
                </p>
              </div>

              {/* Option 3: Creative Options */}
              <div className="p-6 bg-white/40 border border-plum/10 rounded-xl shadow-sm flex flex-col">
                <div className="w-10 h-10 bg-text-tertiary text-white rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h3 className="text-lg font-bold mb-3 text-text">Creative Options</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  I am open to hybrid arrangements, installment plans, or other creative structures you might propose to ensure a mutual fit.
                </p>
              </div>
            </div>

            <p className="mt-10 text-text-tertiary text-xs italic text-center">
              Goal: Ensure professional development that directly translates to clinical patient care.
            </p>
          </div>
        </section>
        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 bg-tertiary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's connect</h2>
            <p className="text-text-secondary mb-10 max-w-lg mx-auto">
              I'm excited about the possibility of contributing to this cohort.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:anjaliancy.a@gmail.com"
                className="px-8 py-3 bg-accent text-white rounded-lg font-bold hover:scale-105 transition transform"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/anjali-ancy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-text border border-border rounded-lg font-bold hover:bg-secondary transition shadow-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border bg-primary">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <p className="text-text-tertiary text-xs font-medium">
              © {new Date().getFullYear()} Anjali Ancy
            </p>
            <p className="text-text-tertiary text-xs italic">
              Built with Next.js & Helvetica
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
