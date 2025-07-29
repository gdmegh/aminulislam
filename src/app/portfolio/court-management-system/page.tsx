
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, Gavel, Scale } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import ProjectImpactChart from '@/components/project-impact-chart';

const chartData = [
  { name: 'Case Processing Time', 'Reduction': 50 },
  { name: 'Filing Errors', 'Reduction': 70 },
  { name: 'Admin Overhead', 'Reduction': 40 },
  { name: 'Document Retrieval Time', 'Reduction': 80 },
];

const CourtManagementPage = () => {
  const study = caseStudies.find(cs => cs.slug === 'court-management-system');

  if (!study) {
    notFound();
  }

  const painPoints = [
    {
      title: "Overwhelming Paperwork & Manual Processes",
      description: "Courts were drowning in physical case files, leading to storage issues, difficult document retrieval, and frequent misfiling.",
      number: "01"
    },
    {
      title: "Inefficient Case Scheduling & Delays",
      description: "Manual scheduling led to frequent conflicts, case backlogs, and long waiting periods for hearings, frustrating all parties involved.",
      number: "02"
    },
    {
      title: "Lack of Transparency for Litigants",
      description: "Lawyers and citizens had no easy way to check case status, hearing dates, or access court documents, requiring physical visits.",
      number: "03"
    },
    {
      title: "Data Silos & Poor Reporting",
      description: "Information was scattered across various systems and records, making it impossible to generate analytics on court performance or case trends.",
      number: "04"
    }
  ];

  const usabilityFindings = [
    {
      round: "Round 1 (Judges & Lawyers)",
      findings: [
        "Users require a powerful but simple search function to find case files instantly.",
        "The calendaring feature needs to clearly show conflicts and availability."
      ]
    },
    {
      round: "Round 2 (Admin Staff & Litigants)",
      findings: [
        "The digital case filing process must be intuitive with clear instructions to reduce errors.",
        "Mobile access for checking case status is a high-priority feature for litigants.",
        "Automated notifications for hearing dates and document submissions are critical.",
        "Admin staff need a dashboard to monitor daily dockets and staff workload."
      ]
    }
  ];

  const accessibilityFeatures = [
    {
      title: "Secure Role-Based Access",
      description: "Ensures that judges, lawyers, and administrative staff only see the information and actions relevant to their roles.",
      icon: "1"
    },
    {
      title: "WCAG Compliant Interface",
      description: "The platform adheres to accessibility standards, making it usable for individuals with disabilities.",
      icon: "2"
    },
    {
      title: "Bilingual Support",
      description: "The system supports multiple languages to cater to a diverse population of users.",
      icon: "3"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow" id="main-content">
      {/* Hero Section */}
      <section className="bg-card text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-primary">
                Enterprise System Design
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-headline">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Jan 2021 - Dec 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>50+ Participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Lead Product Designer</span>
                </div>
              </div>
            </div>
            <div className="relative">
                {study.metrics && (
                    <ProjectImpactChart data={study.metrics} chartType={study.chartType} />
                )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
              
              {/* Empathize Stage */}
              <section id="empathize" className="mb-20">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <Users2 className="w-5 h-5"/>
                    <span>EMPATHIZE</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Understanding the Justice System's Users</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Research involved observing court proceedings, and conducting deep-dive interviews with judges, lawyers, clerks, and citizens to map the entire judicial process and its pain points.</p>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Methodology</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      Conducted process analysis, stakeholder workshops, and ethnographic studies within courtrooms. The goal was to build a holistic view of the operational, legal, and human challenges of the current system.
                    </p>
                  </div>

                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                       {study.metrics && (
                        <ProjectImpactChart data={study.metrics} chartType={study.chartType} />
                      )}
                    </div>
                  </div>
                </div>
              </section>

              {/* Define Stage */}
              <section id="define" className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <Pencil className="w-5 h-5"/>
                    <span>DEFINE</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Defining the Core Problem</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The judiciary's reliance on manual, paper-based systems creates massive inefficiencies, limits access to justice, and prevents data-driven governance. A digital transformation was necessary.</p>
                </div>

                <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-foreground font-headline">Problem Statement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                     The judicial process is crippled by administrative bottlenecks, from slow case filing and chaotic scheduling to insecure document handling. This lack of a unified digital infrastructure erodes public trust and delays justice, impacting lawyers, judges, and citizens alike.
                    </p>
                    
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Personas</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Judge</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need my entire case docket for the day available digitally, with all relevant files and evidence accessible with a single click."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Lawyer</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need to file new cases online, submit evidence securely, and receive immediate updates on hearing schedules."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Court Administrator</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "My job is to manage the court's calendar and resources. I need a tool that automates scheduling and prevents conflicts."
                                </p>
                            </div>
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Citizen (Litigant)</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I just want to know what's happening with my case without having to travel to the courthouse."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-8 font-headline text-center">Key Pain Points</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {painPoints.map((point, index) => (
                          <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all">
                            <div className="flex items-start gap-4">
                              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                                {point.number}
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">Judicial Process Flow Architecture</h3>
                      <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                         I designed the system's architecture to mirror the entire lifecycle of a case, from initial filing and evidence submission to scheduling, hearings, and final verdict.
                        </p>
                        <div className="rounded-lg shadow-lg overflow-hidden">
                           {study.metrics && (
                            <ProjectImpactChart data={study.metrics} chartType={study.chartType} />
                          )}
                        </div>
                      </div>
                    </div>
                </div>
              </section>

              {/* Ideate Stage */}
              <section id="ideate" className="mb-20">
                 <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <Bot className="w-5 h-5"/>
                    <span>IDEATE</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Designing Digital Justice</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The solution was envisioned as a modular, secure platform with distinct interfaces for each user persona, ensuring a focused and efficient experience for all.</p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Design Decisions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ideation focused on security, efficiency, and transparency.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• **E-Filing Portal:** A public-facing portal for lawyers to file cases and submit documents 24/7.</li>
                      <li>• **Judge's Digital Bench:** A tablet-friendly interface for judges to manage their docket, review cases, and sign orders digitally.</li>
                      <li>• **Automated Calendaring:** An intelligent scheduling module that avoids conflicts and optimizes courtroom utilization.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prototype & Test Stage */}
              <section id="prototype-test" className="mb-20">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <Gavel className="w-5 h-5"/>
                    <span>PROTOTYPE & TEST</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Building and Validating</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">High-fidelity, interactive prototypes for each module were built and rigorously tested with judges, lawyers, and court staff to ensure usability and security.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Highlights</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Prototypes simulated the end-to-end flow, from a lawyer filing a new case to a judge reviewing it on their digital bench during a hearing.
                      </p>
                      <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View E-Filing Prototype
                        </a>
                         <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View Judge's Bench Prototype
                        </a>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">Usability Study Results</h3>
                        <div className="grid md:grid-cols-1 gap-4">
                            {usabilityFindings.map((round, index) => (
                            <div key={index}>
                                <h4 className="font-bold text-foreground mb-2">{round.round}</h4>
                                <ul className="space-y-2">
                                {round.findings.map((finding, findingIndex) => (
                                    <li key={findingIndex} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground text-sm">{finding}</span>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
              </section>

              {/* Impact & Results */}
              <section id="impact" className="mb-20">
                <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">Impact & Results</h2>
                <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
                  <div className="bg-green-500/10 rounded-2xl p-8 border border-green-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Project Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The system drastically cut case processing times, reduced administrative errors, and provided unprecedented transparency. The pilot implementation led to a significant reduction in case backlogs and increased public trust in the judicial system.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Learnings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Transforming a centuries-old, paper-based institution requires deep empathy and a phased approach. The success hinged on designing a system that respected existing legal protocols while introducing modern efficiencies.
                    </p>
                  </div>
                </div>

                 <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2"><TrendingUp className="w-6 h-6 text-primary"/> Key Metrics &amp; Impact</h3>
                    <div style={{ width: '100%', height: 300 }}>
                      <ResponsiveContainer>
                          <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: "hsl(var(--background))",
                                  borderColor: "hsl(var(--border))",
                                  color: "hsl(var(--foreground))"
                                }}
                              />
                              <Bar dataKey="Reduction" fill="hsl(var(--accent))" name="Reduction (%)" radius={[4, 4, 0, 0]} />
                          </BarChart>
                      </ResponsiveContainer>
                    </div>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next" className="mb-20">
                <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">Next Steps</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Public Portal Launch",
                      description: "Develop and launch a public-facing portal for citizens to track their case status and access public records."
                    },
                    {
                      step: "02", 
                      title: "Integration with Police Records",
                      description: "Integrate with law enforcement databases to automatically pull in First Information Reports (FIRs) and other relevant documents."
                    },
                    {
                      step: "03",
                      title: "AI-Powered Analytics",
                      description: "Implement machine learning models to analyze case data for predicting case duration and identifying judicial trends."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                      <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm mb-4 mx-auto">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourtManagementPage;

    