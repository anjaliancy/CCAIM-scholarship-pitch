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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet" />
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
{/* Why This Program / Narrative Section */}
        <section className="py-20 px-6 bg-secondary/30 border-y border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-text italic">The Path to This Moment</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary font-serif">
              <p>
                I have always known that my education was the means to step up, contribute, and add value. 
                With this in mind, I previously sought master's programmes in the UK, drawn to how the 
                region approaches the nuances of combining data expertise with human experience. 
                However, financial challenges precluded me from taking those steps at the time.
              </p>
              
              <p className="font-bold text-text">
                This opportunity comes at the perfect time.
              </p>
              
              <p>
                I am no longer simply an aspirant; I am an ambitious graduate who understands that 
                targeted learning and meaningful conversation are the true catalysts for impact. 
                I am eager to immerse myself in this program, knowing that it will enable me to 
                bring a far stronger level of value to the clinical projects I facilitate.
              </p>
            </div>

            {/* Decorative Plum Divider */}
            <div className="mt-10 flex justify-center">
              <div className="w-24 h-px bg-accent/40" />
            </div>
          </div>
        </section>

{/* Professional Experience Section */}
        <section id="work" className="py-20 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Selected Research & Experience</h2>
            
            <div className="space-y-12">
              {/* Project 1: SkinAid */}
              <div className="relative pl-8 border-l-2 border-accent/30">
                {/* Decorative Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <h3 className="text-xl font-bold text-text">Data Science Lead – SkinAid Project</h3>
                  <span className="text-sm font-medium italic text-text-tertiary">IMCAS World Congress, Paris | 2025</span>
                </div>
                <ul className="space-y-3 text-text-secondary text-base leading-relaxed">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Developed NLP pipelines (sentiment analysis, topic modelling) to extract patient insights from digital conversations around chronic dermatological conditions, directly applicable to clinical programme evaluation.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Presented findings at IMCAS World Congress 2025: <em>Demand Forecasting for Dermatology Clinics: Enhancing Resource Allocation with Predictive Models.</em></span>
                  </li>
                </ul>
              </div>

              {/* Project 2: Genomic Data */}
              <div className="relative pl-8 border-l-2 border-accent/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <h3 className="text-xl font-bold text-text">Genomic Data Researcher</h3>
                  <span className="text-sm font-medium italic text-text-tertiary">Collaborative Research, Vancouver | 2024</span>
                </div>
                <ul className="space-y-3 text-text-secondary text-base leading-relaxed">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Analysed biomedical genomic datasets using statistical modelling and bioinformatics algorithms to identify genetic patterns and clinical markers.</span>
                  </li>
                </ul>
              </div>

              {/* Project 3: Generative AI */}
              <div className="relative pl-8 border-l-2 border-accent/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <h3 className="text-xl font-bold text-text">Generative AI Researcher</h3>
                  <span className="text-sm font-medium italic text-text-tertiary">Marsham Edge, Singapore | 2024</span>
                </div>
                <ul className="space-y-3 text-text-secondary text-base leading-relaxed">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Developed a prototype generative AI tool for AI maturity assessment in the megaprojects domain, leveraging LLM and RAG-based architectures—methods transferable to clinical decision support systems.</span>
                  </li>
                </ul>
              </div>
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
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h3 className="text-lg font-bold mb-3 text-text">Tuition Reduction</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                  A partial scholarship where I can contribute back through program-related work, such as research assistance or community building.
                </p>
              </div>

              {/* Option 3: Creative Options */}
              <div className="p-6 bg-white/40 border border-plum/10 rounded-xl shadow-sm flex flex-col">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mb-4 font-bold">3</div>
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
