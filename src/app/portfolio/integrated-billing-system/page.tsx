
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, Smartphone, DollarSign } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';

const chartData = [
  { name: 'Invoicing Time', 'Reduction': 60 },
  { name: 'On-time Payments', 'Increase': 40 },
  { name: 'Billing Errors', 'Reduction': 85 },
  { name: 'Customer Retention', 'Increase': 20 },
];

const IntegratedBillingSystemPage = () => {
  const study = caseStudies.find(cs => cs.slug === 'integrated-billing-system');

  if (!study) {
    notFound();
  }

  const painPoints = [
    {
      title: "Manual Invoicing & Human Error",
      description: "Businesses spend countless hours creating and sending invoices manually, leading to mistakes, and delayed payments.",
      number: "01"
    },
    {
      title: "Complex Subscription Management",
      description: "Managing different subscription tiers, prorations, and upgrades/downgrades manually is a significant operational headache.",
      number: "02"
    },
    {
      title: "Payment Reconciliation Challenges",
      description: "Matching incoming payments with outstanding invoices is a time-consuming and error-prone process for finance teams.",
      number: "03"
    },
    {
      title: "Lack of Financial Insights",
      description: "Without a centralized system, it's difficult to get a clear view of key metrics like Monthly Recurring Revenue (MRR) and customer churn.",
      number: "04"
    }
  ];

  const usabilityFindings = [
    {
      round: "Round 1 (Business Owners)",
      findings: [
        "Users need a dashboard with key financial metrics visible at a glance.",
        "The process of creating a new subscription plan needs to be highly intuitive."
      ]
    },
    {
      round: "Round 2 (Finance Managers)",
      findings: [
        "Automated reminders for overdue invoices are a must-have feature.",
        "Integration with accounting software (like QuickBooks) is a critical requirement.",
        "The customer portal needs a clear layout for viewing invoices and updating payment methods.",
        "Bulk import/export of customer and invoice data is necessary."
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-card text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-primary">
                SaaS Product Design
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
                  <span>Timeline Placeholder</span>
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
                <Image 
                    src={study.image}
                    alt={study.title}
                    width={800}
                    height={600}
                    data-ai-hint={study.hint}
                    className="rounded-lg shadow-xl"
                />
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Understanding Financial Workflows</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Conducted interviews with small business owners, accountants, and finance managers to map out the entire billing process, from customer acquisition to revenue reporting.</p>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Focus</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      The research focused on identifying the most time-consuming and error-prone stages of the billing cycle. We explored challenges in subscription management, payment processing, and financial reporting to pinpoint key areas for automation and improvement.
                    </p>
                  </div>

                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <Image 
                          src="https://placehold.co/1200x800.png"
                          alt="Finance team meeting" 
                          width={1200} 
                          height={800} 
                          data-ai-hint="finance meeting"
                          className="w-full h-auto object-cover" 
                      />
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
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Businesses are bogged down by inefficient, manual billing processes that stifle growth, strain resources, and create poor customer experiences.</p>
                </div>

                <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-foreground font-headline">Problem Statement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                     The absence of an automated, integrated billing system forces businesses to rely on a patchwork of spreadsheets and manual tools. This leads to revenue leakage from billing errors, wasted hours on administrative tasks, and a lack of real-time financial data needed for strategic decision-making.
                    </p>
                    
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Personas</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Small Business Owner</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need to get paid on time without spending half my week chasing invoices. I need a simple system that just works."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Finance Manager</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need accurate revenue reports and a clear audit trail. Our current process is a reconciliation nightmare."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Accountant</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need the system to handle complex tax calculations and integrate with our accounting software seamlessly."
                                </p>
                            </div>
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The End Customer</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I want to easily view my past invoices, update my credit card, and understand my subscription."
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
                      <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">Billing Lifecycle Architecture</h3>
                      <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                         The system architecture was designed around the end-to-end billing lifecycle, from product and plan creation to automated invoicing, dunning management for failed payments, and finally, revenue analytics.
                        </p>
                        <div className="rounded-lg shadow-lg overflow-hidden">
                          <Image 
                              src="https://placehold.co/1200x800.png"
                              alt="Billing Lifecycle Flowchart" 
                              width={1200} 
                              height={800} 
                              data-ai-hint="flowchart diagram"
                              className="w-full h-auto object-cover" 
                          />
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Designing an Automated System</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The core idea was a modular SaaS platform that businesses could configure to their specific needs, with a powerful admin dashboard and a self-service portal for their customers.</p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Design Decisions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ideation focused on automation, flexibility, and data visibility.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• **Flexible Product Catalog:** Allow businesses to create diverse products, plans, and add-ons with different billing cycles.</li>
                      <li>• **Automated Invoicing Engine:** A core engine to generate and deliver invoices automatically based on subscription schedules.</li>
                      <li>• **Customer Self-Service Portal:** A secure portal for end-customers to manage their subscriptions, view payment history, and update billing information.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prototype & Test Stage */}
              <section id="prototype-test" className="mb-20">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <DollarSign className="w-5 h-5"/>
                    <span>PROTOTYPE & TEST</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Building and Validating</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">High-fidelity prototypes of the admin dashboard and customer portal were created and tested with target users to refine the user experience and validate the workflow.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Highlights</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Prototypes simulated the complete journey: a business owner setting up a new subscription plan, a customer signing up, and the finance manager viewing the revenue dashboard.
                      </p>
                      <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View Admin Dashboard Prototype
                        </a>
                         <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View Customer Portal Prototype
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
                      The SaaS platform dramatically reduced the time businesses spent on billing by up to 60%. It virtually eliminated manual billing errors and provided clear, real-time financial dashboards, empowering owners to make better strategic decisions.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Learnings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building a billing system requires an obsessive focus on accuracy, security, and flexibility. The design had to be robust enough to handle complex edge cases while remaining simple enough for non-technical users to manage their business finances.
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
                      title: "Advanced Reporting",
                      description: "Develop a customizable reporting engine for users to build their own financial reports and dashboards."
                    },
                    {
                      step: "02", 
                      title: "Usage-Based Billing",
                      description: "Implement metered and usage-based billing models to support a wider range of SaaS business types."
                    },
                    {
                      step: "03",
                      title: "Marketplace & Integrations",
                      description: "Build out a marketplace for third-party integrations with accounting, CRM, and tax software."
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

export default IntegratedBillingSystemPage;
