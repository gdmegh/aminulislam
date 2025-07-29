
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, ShieldCheck, Link2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import ProjectImpactChart from '@/components/project-impact-chart';

const chartData = [
  { name: 'Resolution Time', 'Reduction': 35 },
  { name: 'User Satisfaction', 'Increase': 50 },
  { name: 'Case Escalations', 'Reduction': 40 },
  { name: 'Admin Efficiency', 'Increase': 60 },
];

const ComplaintManagementPage = () => {
  const study = caseStudies.find(cs => cs.slug === 'complaint-management-system');

  if (!study) {
    notFound();
  }

  const painPoints = [
    {
      title: "Fragmented Communication",
      description: "Lacked a central system, leading to scattered complaint data and difficult tracking for both complainants and administrators.",
      number: "01"
    },
    {
      title: "Inefficient Case Handling",
      description: "Manual processes for assigning, escalating, and resolving cases were slow, error-prone, and lacked transparency.",
      number: "02"
    },
    {
      title: "Poor Stakeholder Coordination",
      description: "Difficulty in referring cases to external stakeholders and tracking their input, causing significant delays in resolution.",
      number: "03"
    },
    {
      title: "Lack of Data Insights",
      description: "No effective way to analyze complaint trends, identify root causes, or measure performance, hindering systemic improvements.",
      number: "04"
    }
  ];

  const usabilityFindings = [
    {
      round: "Round 1",
      findings: [
        "Users need a clear, at-a-glance dashboard for case status.",
        "The process of referring a case to a stakeholder is unclear."
      ]
    },
    {
      round: "Round 2",
      findings: [
        "Users want automated notifications for case updates.",
        "The interface for attaching evidence documents needs to be simplified.",
        "Administrators require more robust reporting and filtering options.",
        "Mobile access is crucial for field agents and stakeholders."
      ]
    }
  ];

  const accessibilityFeatures = [
    {
      title: "WCAG 2.1 Compliance",
      description: "Ensured the platform meets AA standards, including keyboard navigation and screen reader compatibility.",
      icon: "1"
    },
    {
      title: "Clear Language & Instructions",
      description: "Used simple, jargon-free language to make the complaint process understandable for all users, regardless of technical skill.",
      icon: "2"
    },
    {
      title: "Responsive for All Devices",
      description: "The design is fully responsive, ensuring a seamless experience for users on desktops, tablets, and smartphones.",
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
                System Design
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
                  <span>Sept 2021 - Feb 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>30+ Participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Lead UX/UI Designer</span>
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Understanding the Stakeholders</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">To build an effective system, I conducted in-depth interviews and workshops with complainants, case managers, and referral partners to map their workflows and frustrations.</p>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Focus</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      The research focused on identifying bottlenecks in the existing complaint lifecycle, from initial submission to final resolution. We mapped communication pathways, escalation procedures, and the specific needs of external stakeholders who were critical to resolving complex cases.
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
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The research crystallized the problem: organizations needed a unified, transparent platform to manage complaints efficiently while seamlessly collaborating with external partners.</p>
                </div>

                <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-foreground font-headline">Problem Statement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                     Complainants face a frustrating, opaque process, while case managers are burdened by manual administrative tasks and disjointed communication channels. The inability to efficiently loop in and track feedback from referral stakeholders creates significant delays and prevents effective resolution, eroding trust and satisfaction.
                    </p>
                    
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Personas</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Complainant</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I just want to submit my issue easily and see what's being done about it."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Case Manager</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need a single view of all my cases, their history, and an easy way to escalate or refer them."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Referral Stakeholder</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need a secure, simple way to receive case details, provide my input, and send it back without getting lost in email chains."
                                </p>
                            </div>
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The System Administrator</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need to see performance metrics, identify recurring issues, and manage user roles across the platform."
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
                      <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">Case Flow Architecture</h3>
                      <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                         I designed an information architecture focused on a logical case flow, from creation and assignment to investigation, referral, and resolution. This structure became the backbone of the platform.
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Designing the Solution</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The core idea was a centralized dashboard for case managers, a simple portal for complainants, and a secure, isolated interface for referral stakeholders.</p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Design Decisions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Based on brainstorming and low-fidelity wireframing, several key features were prioritized.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• **Role-Based Dashboards:** Each user persona gets a tailored view showing only what's relevant to them.</li>
                      <li>• **Secure Stakeholder Portal:** A unique, expiring link provides external partners access to a single case without needing to log in.</li>
                      <li>• **Automated Status Updates:** Complainants receive email or SMS notifications at key stages of the case lifecycle.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prototype & Test Stage */}
              <section id="prototype-test" className="mb-20">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <CheckCircle className="w-5 h-5"/>
                    <span>PROTOTYPE & TEST</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Building and Validating</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Interactive prototypes were built and tested with all user groups to refine workflows and validate design choices before development.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Highlights</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Prototypes focused on the end-to-end user journey, from a complainant submitting a new case to a stakeholder providing feedback via the secure portal.
                      </p>
                      <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View Interactive Prototype
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
                      The final platform dramatically reduced case resolution times and improved transparency. Case managers could handle higher volumes, and stakeholder collaboration became a seamless part of the workflow.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Learnings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This project highlighted the importance of designing for an entire ecosystem, not just a single user. The success of the stakeholder portal proved that considering the needs of external partners is critical for complex workflows.
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
                              <Bar dataKey="Increase" fill="hsl(var(--primary))" name="Increase (%)" radius={[4, 4, 0, 0]} />
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
                      title: "Analytics Dashboard",
                      description: "Develop a comprehensive analytics dashboard for administrators to track trends and identify root causes."
                    },
                    {
                      step: "02", 
                      title: "AI-Powered Triage",
                      description: "Integrate a machine learning model to automatically categorize and assign incoming complaints to the correct team."
                    },
                    {
                      step: "03",
                      title: "Knowledge Base",
                      description: "Create a public-facing knowledge base with answers to common questions to reduce inbound complaint volume."
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

export default ComplaintManagementPage;

    