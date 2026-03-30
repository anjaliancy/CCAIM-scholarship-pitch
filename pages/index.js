import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeOption, setActiveOption] = useState('scholarship');

  const scholarshipOptions = {
    scholarship: {
      title: 'Tuition Waiver/Reduction',
      description: 'A waiver would enable deeper engagement with coursework and peer learning.',
      icon: '🎓',
    },
    workstudy: {
      title: 'Tuition Reduction',
      description: 'A partial scholarship would enable me to share in the benefits of the program-related work (content, research, community building).',
      icon: '⚙️',
    },
  };

  return (
    <>
      <Head>
        <title>Anjali Ancy | ML in Healthcare Summer School Scholarship Pitch</title>
        <meta name="description" content="Interactive scholarship request for ML in Healthcare Summer School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧬</text></svg>" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream text-navy overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-lg font-display font-bold">Anjali Ancy</div>
            <a
              href="#contact"
              className="px-4 py-2 bg-accent text-white rounded-md text-sm font-semibold hover:bg-blue-600 transition"
            >
              Get in Touch
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Clinical insight meets AI precision
            </h1>
            <p
              className="text-xl text-slate mb-8 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              I've spent 3+ years translating healthcare research into machine learning solutions—from dermatology to public health data to data governance. Now I'm seeking your support to formalize production ML expertise.
            </p>
            <a
              href="#story"
              className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              See my story
            </a>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22100%22%20height=%22100%22%3E%3Ccircle%20cx=%2250%22%20cy=%2250%22%20r=%2730%27%20fill=%22%230ea5e9%22/%3E%3C/svg%3E')] bg-repeat"></div>
              <div className="text-center z-10 px-8">
                <div className="text-6xl mb-4">🧬</div>
                <p className="text-2xl font-display font-bold text-slate">Research-backed ML for healthcare impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="story" className="py-20 px-6 bg-white/40 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-16 text-center">What I've built</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: '📚',
                  title: '4 peer-reviewed publications',
                  description: 'Mycoses (2024), Journal of Investigative Dermatology (2024), Indian Dermatology Online Journal (2024, 2026). Clinical validation, microbiome analysis, healthcare digital infrastructure.',
                },
                {
                  icon: '🎤',
                  title: '4 international conference presentations',
                  description: 'IMCAS World Congress 2025 (Paris), AI & the City 2025 (Toronto/IIIT), AI World Health Summit 2025 (6 posters), World Congress of Dermatology 2023.',
                },
                {
                  icon: '🏥',
                  title: 'Applied healthcare analytics (3+ years)',
                  description: 'NLP pipelines for patient sentiment analysis, genomic data analysis, RAG-based LLM governance, time series forecasting on $300M budgets, clinical outcomes evaluation.',
                },
                {
                  icon: '🌍',
                  title: '3,000+ member network in volunteer groups',
                  description: 'External PR Lead, Healthcare Data Analytics Association. 6 languages. Community strategist at Electric Minds (AI literacy non-profit). Susan McFarland Volunteer Award.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="stagger-item p-6 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-slate text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Gap Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">What's missing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-red-50 rounded-lg border border-red-200">
                <div className="text-3xl mb-4">⚠️</div>
                <h3 className="font-bold text-lg mb-3">I'm missing</h3>
                <p className="text-slate">Formal training in production ML deployment, healthcare compliance frameworks (HIPAA, data governance), and scalable architecture patterns for clinical systems—gaps identified while working on genomics + LLM projects.</p>
              </div>
              <div className="p-8 bg-success/10 rounded-lg border border-success/30">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="font-bold text-lg mb-3">Right now I'm doing</h3>
                <p className="text-slate">M.Tech in Enterprise Business Analytics at NUS (in progress). Most Recent Experience: Data Science Consultant at Aligned Automation (60% project duration reduction). This knowledge would plug directly into active healthcare ML work and research.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Ventures */}
        <section className="py-20 px-6 bg-navy text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Why timing matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: 'SkinAid NLP research',
                  progress: 85,
                },
                {
                  label: 'Healthcare ML consulting',
                  progress: 70,
                },
                {
                  label: 'Genomic data analysis',
                  progress: 50,
                },
              ].map((item, i) => (
                <div key={i} className="stagger-item">
                  <p className="text-sm text-blue-200 mb-2 font-semibold">{item.label}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-accent h-full transition-all duration-700"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{item.progress}% active</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 text-sm">
              During the summer school, I would be done with my coursework and consultant gigs and this would enable deeper engagement with further opportunities whilst immediately applying production ML techniques to active research projects.
            </p>
          </div>
        </section>

        {/* The ROI */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Why this is good for you</h2>
            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'Immediate application',
                  desc: 'I'll apply knowledge to active projects within weeks. Your curriculum directly scales to clinical impact.',
                },
                {
                  num: '2',
                  title: 'Cohort amplifier',
                  desc: 'My clinical expertise raises the level of peer discussion. Real healthcare use cases inform coursework.',
                },
                {
                  num: '3',
                  title: 'True Value',
                  desc: 'I believe that the ultimate career move for me is to be in a place of meaning, where I can learn and grow. This course provides this to me - making me an ideal candidate to benefit from your program.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="stagger-item p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 flex gap-6"
                >
                  <div className="text-4xl font-display font-bold text-accent w-16 flex-shrink-0">{item.num}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Ask - Interactive Options */}
        <section className="py-20 px-6 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">What I'm asking for</h2>
            <p className="text-center text-slate mb-12 max-w-2xl mx-auto">
              I'm open to flexible structures. Here are some options that could work:
            </p>

            {/* Toggle Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {Object.keys(scholarshipOptions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveOption(key)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    activeOption === key
                      ? 'bg-accent text-white'
                      : 'bg-gray-200 text-navy hover:bg-gray-300'
                  }`}
                >
                  {scholarshipOptions[key].icon} {scholarshipOptions[key].title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active Option Display */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-accent">
              <div className="text-5xl mb-4">{scholarshipOptions[activeOption].icon}</div>
              <h3 className="text-2xl font-display font-bold mb-3">
                {scholarshipOptions[activeOption].title}
              </h3>
              <p className="text-slate text-lg">
                {scholarshipOptions[activeOption].description}
              </p>
              <div className="mt-6 p-4 bg-white/60 rounded border border-blue-200">
                <p className="text-sm text-slate">
                  Goal: Make attendance feasible without compromising my engagement with the program.
                </p>
              </div>
            </div>

            {/* Additional flexibility */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg border border-gray-300">
              <h4 className="font-bold mb-4">I'm also open to:</h4>
              <ul className="space-y-2 text-slate">
                <li>✓ Hybrid arrangements (partial scholarship + payment plan)</li>
                <li>✓ Other creative structures you might propose</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why this matters */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 border-l-4 border-accent bg-accent/5 rounded">
              <p className="text-xl text-slate italic font-display">
                "Cost shouldn't determine whether clinically-trained ML practitioners can access professional development that advances patient care."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 bg-navy text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-8">Let's make this happen</h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm genuinely excited about this program and confident the fit is strong. I'd love to discuss how we can structure this in a way that works for everyone.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="mailto:anjaliancy.a@gmail.com"
                className="p-6 bg-accent hover:bg-blue-600 rounded-lg font-semibold transition transform hover:-translate-y-1"
              >
                📧 Send an Email
              </a>
              <a
                href="https://linkedin.com/in/anjali-ancy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition transform hover:-translate-y-1"
              >
                💼 Connect on LinkedIn
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              Availability: Open to calls/meetings within 24–48 hours | Phone: +65-82655114
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-navy/95 border-t border-gray-700 py-8 px-6 text-center text-gray-400">
          <p className="text-sm">
            Created with intent. | Anjali Ancy | {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </>
  );
}
