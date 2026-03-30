import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeOption, setActiveOption] = useState('scholarship');

  const scholarshipOptions = {
    scholarship: {
      title: 'Tuition Waiver',
      description: 'A waiver would enable deeper engagement with coursework and peer learning.',
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

      <main className="bg-white text-text">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-border">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-sm font-medium">Anjali Ancy</div>
            <a
              href="#contact"
              className="text-sm px-4 py-2 bg-accent text-white rounded hover:opacity-80 transition"
            >
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-medium mb-4 leading-tight">
              Clinical insight meets AI precision
            </h1>
            <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-2xl">
              I've spent 3+ years translating healthcare research into machine learning solutions—from dermatology to public health data to data governance. Now I'm seeking your support to formalize production ML expertise.
            </p>
            <a
              href="#credentials"
              className="text-sm px-4 py-2 bg-secondary text-text rounded hover:bg-tertiary transition inline-block"
            >
              Learn more
            </a>
          </div>
        </section>

        {/* Credentials Section */}
        <section id="credentials" className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-8">Background</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Research & Publications</h3>
                <p className="text-text-secondary text-sm">
                  4 peer-reviewed publications in Mycoses, Journal of Investigative Dermatology, and Indian Dermatology Online Journal. Research spans clinical validation, microbiome analysis, and healthcare digital infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Conferences & Presentations</h3>
                <p className="text-text-secondary text-sm">
                  Presented at IMCAS World Congress 2025 (Paris), AI & the City 2025 (Toronto/IIIT), AI World Health Summit 2025, and World Congress of Dermatology 2023.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Technical Expertise</h3>
                <p className="text-text-secondary text-sm">
                  3+ years in healthcare analytics: NLP pipelines, patient sentiment analysis, genomic data analysis, RAG-based LLM governance, time series forecasting ($300M budgets), clinical outcomes evaluation.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Community</h3>
                <p className="text-text-secondary text-sm">
                  External PR Lead at Healthcare Data Analytics Association (3,000+ members). 6 languages. Community strategist at Electric Minds (AI literacy non-profit). Susan McFarland Volunteer Award.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gap Analysis */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-8">The Opportunity</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium mb-3">What I'm Missing</h3>
                <p className="text-text-secondary text-sm">
                  Formal training in production ML deployment, healthcare compliance frameworks (HIPAA, data governance), and scalable architecture patterns for clinical systems. Gaps identified while working on genomics and LLM projects.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3">What I'm Doing Now</h3>
                <p className="text-text-secondary text-sm">
                  M.Tech in Enterprise Business Analytics at NUS (in progress). Data Science Consultant at Aligned Automation (60% project duration reduction). This knowledge would apply directly to active healthcare ML work and research.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-8">Current Work</h2>
            <div className="space-y-4">
              {[
                { label: 'SkinAid NLP research', progress: 85 },
                { label: 'Healthcare ML consulting', progress: 70 },
                { label: 'Genomic data analysis', progress: 50 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-xs text-text-tertiary">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-1">
                    <div
                      className="bg-accent h-1 rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-text-secondary text-sm mt-6">
              During the summer school, I would be done with coursework and consultant work. This would enable deeper engagement with learning while applying production ML techniques to active research projects.
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-8">Why This Works</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Immediate Application</h3>
                <p className="text-text-secondary text-sm">
                  I will apply knowledge to active projects within weeks. Your curriculum directly scales to clinical impact.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Cohort Contribution</h3>
                <p className="text-text-secondary text-sm">
                  My clinical expertise raises the level of peer discussion. Real healthcare use cases inform coursework.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Alignment</h3>
                <p className="text-text-secondary text-sm">
                  I believe that the ultimate career move is being in a place of meaning, where I can learn and grow. This course provides that—making me an ideal candidate to benefit from your program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Ask */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-8">What I'm Asking For</h2>
            <p className="text-text-secondary text-sm mb-6">
              I'm open to flexible structures. Select an option to learn more:
            </p>

            {/* Toggle */}
            <div className="flex gap-3 mb-8">
              {Object.keys(scholarshipOptions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveOption(key)}
                  className={`text-sm px-4 py-2 rounded transition ${
                    activeOption === key
                      ? 'bg-accent text-white'
                      : 'bg-secondary text-text hover:bg-tertiary'
                  }`}
                >
                  {scholarshipOptions[key].title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active Option */}
            <div className="p-6 bg-secondary rounded border border-border">
              <h3 className="text-base font-medium mb-3">
                {scholarshipOptions[activeOption].title}
              </h3>
              <p className="text-text-secondary text-sm">
                {scholarshipOptions[activeOption].description}
              </p>
              <p className="text-text-tertiary text-xs mt-4">
                Goal: Make attendance feasible without compromising engagement with the program.
              </p>
            </div>

            <div className="mt-8 p-4 bg-secondary rounded border border-border">
              <h4 className="text-sm font-medium mb-3">Other Options</h4>
              <ul className="text-text-secondary text-sm space-y-2">
                <li>• Hybrid arrangements (partial scholarship + payment plan)</li>
                <li>• Other creative structures you might propose</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-12 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-base italic text-text-secondary">
              "Cost shouldn't determine whether clinically-trained ML practitioners can access professional development that advances patient care."
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 px-6 border-b border-border bg-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-medium mb-6">Get in Touch</h2>
            <p className="text-text-secondary text-sm mb-8">
              I'm excited about this program and confident in the fit. I'd like to discuss how we can structure this arrangement.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:anjaliancy.a@gmail.com"
                className="text-sm px-4 py-3 bg-accent text-white rounded hover:opacity-80 transition text-center"
              >
                Email: anjaliancy.a@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/anjali-ancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-3 bg-accent text-white rounded hover:opacity-80 transition text-center"
              >
                LinkedIn Profile
              </a>
            </div>

            <p className="text-text-tertiary text-xs">
              Phone: +65-82655114 | Available for calls within 24-48 hours
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-white border-t border-border">
          <div className="max-w-3xl mx-auto">
            <p className="text-text-tertiary text-xs">
              © {new Date().getFullYear()} Anjali Ancy. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
