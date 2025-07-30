
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, Smartphone, DollarSign, BrainCircuit, Rocket, FilePlus, Repeat, Send, CreditCard, BarChart2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import ProjectImpactChart from '@/components/project-impact-chart';

const chartData = [
  { name: 'Invoicing Time', 'Reduction': 60 },
  { name: 'On-time Payments', 'Increase': 40 },
  { name: 'Billing Errors', 'Reduction': 85 },
  { name: 'Customer Retention', 'Increase': 20 },
];

const researchOutcomeData = [
    { name: 'Billing Errors', value: 45 },
    { name: 'Complex Subscriptions', value: 30 },
    { name: 'Manual Reconciliation', value: 15 },
    { name: 'Poor Reporting', value: 10 },
];

const futureRoadmapData = [
  { year: 'Years 1-2', 'AI & ML': 20, 'Advanced Analytics': 30, 'Global Payments': 10 },
  { year: 'Years 3-5', 'AI & ML': 40, 'Advanced Analytics': 60, 'Global Payments': 40 },
  { year: 'Years 6-10', 'AI & ML': 80, 'Advanced Analytics': 90, 'Global Payments': 80 },
];

const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];


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
  
  const diagramSteps = [
    { icon: FilePlus, title: 'Plan Creation', description: 'Define products, services, and pricing tiers.' },
    { icon: Repeat, title: 'Subscriptions', description: 'Customers subscribe to plans.' },
    { icon: Send, title: 'Automated Invoicing', description: 'System generates and sends invoices based on cycles.' },
    { icon: CreditCard, title: 'Payment Processing', description: 'Securely handle payments via integrated gateways.' },
    { icon: BarChart2, title: 'Revenue Analytics', description: 'Track MRR, churn, and other key financial metrics.' }
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Understanding Financial Workflows</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Conducted interviews with 40+ small business owners, accountants, and finance managers to map out the entire billing process, from customer acquisition to revenue reporting.</p>
                </div>
                
                <div className="space-y-12">
                   <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">Research Interview Outcome</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                            The qualitative interviews with 40 participants revealed that billing errors were the most significant pain point, followed closely by the complexities of managing subscriptions.
                        </p>
                        <div style={{ width: '100%', height: 350 }}>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                    data={researchOutcomeData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                    {researchOutcomeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                        backgroundColor: "hsl(var(--background))",
                                        borderColor: "hsl(var(--border))",
                                        color: "hsl(var(--foreground))"
                                        }}
                                    />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
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
                        <div className="relative p-8 overflow-hidden">
                          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                            {diagramSteps.map((step, index) => (
                              <React.Fragment key={index}>
                                <div className="flex flex-col items-center text-center max-w-[120px]">
                                  <div className="bg-primary/10 border border-primary/20 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                                    <step.icon className="w-8 h-8 text-primary" />
                                  </div>
                                  <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                                </div>
                                {index < diagramSteps.length - 1 && (
                                   <div className="hidden md:block h-px w-16 bg-border mx-4"></div>
                                )}
                                 {index < diagramSteps.length - 1 && (
                                   <div className="md:hidden w-px h-12 bg-border my-4"></div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
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

              {/* Future Roadmap */}
              <section id="next" className="mb-20">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <Rocket className="w-5 h-5"/>
                    <span>FUTURE ROADMAP</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">A 100-Year Vision for Billing</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">This system is built to evolve. The long-term vision is to create a fully autonomous financial OS for businesses, leveraging future technology integrations.</p>
                </div>
                 <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center gap-2"><BrainCircuit className="w-6 h-6 text-primary"/> Phased Technology Integration Plan</h3>
                    <p className="text-muted-foreground text-center mb-8">The roadmap prioritizes key technology areas to be integrated over the next decade, laying the groundwork for a century of innovation.</p>
                    <div style={{ width: '100%', height: 300 }}>
                       <ResponsiveContainer>
                          <AreaChart data={futureRoadmapData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: "hsl(var(--background))",
                                  borderColor: "hsl(var(--border))",
                                  color: "hsl(var(--foreground))"
                                }}
                              />
                              <Legend />
                              <Area type="monotone" dataKey="AI & ML" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.6)" name="AI & ML Integration" />
                              <Area type="monotone" dataKey="Advanced Analytics" stackId="1" stroke="hsl(var(--accent))" fill="hsl(var(--accent) / 0.6)" name="Advanced Analytics" />
                              <Area type="monotone" dataKey="Global Payments" stackId="1" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3) / 0.6)" name="Global Payment Gateways" />
                          </AreaChart>
                      </ResponsiveContainer>
                    </div>
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

    