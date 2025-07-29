
"use client"
import React from 'react';
import { Users, Clock, Target, CheckCircle, ExternalLink, TrendingUp, Search, Pencil, Users2, Bot, FileText, Smartphone } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { caseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';

const chartData = [
  { name: 'Avg. Wait Time', 'Reduction': 45 },
  { name: 'Customer Satisfaction', 'Increase': 65 },
  { name: 'Staff Idle Time', 'Reduction': 30 },
  { name: 'Service Throughput', 'Increase': 25 },
];

const QueueManagementPage = () => {
  const study = caseStudies.find(cs => cs.slug === 'queue-management-system');

  if (!study) {
    notFound();
  }

  const painPoints = [
    {
      title: "Long & Unpredictable Wait Times",
      description: "Customers are frustrated by long waits with no clear information on when they will be served, leading to poor satisfaction.",
      number: "01"
    },
    {
      title: "Inefficient Staff Allocation",
      description: "Managers lack real-time data on queue lengths and service times, making it difficult to allocate staff effectively to meet demand.",
      number: "02"
    },
    {
      title: "Physical Presence Required",
      description: "Customers must be physically present to join a queue, wasting their time and leading to crowded waiting areas.",
      number: "03"
    },
    {
      title: "No Performance Analytics",
      description: "Lack of data makes it impossible to identify bottlenecks, measure staff performance, or make informed decisions for operational improvements.",
      number: "04"
    }
  ];

  const usabilityFindings = [
    {
      round: "Round 1 (Customers)",
      findings: [
        "Users want a simple, one-click way to join a queue remotely.",
        "Clear, real-time updates on their position in the queue are essential."
      ]
    },
    {
      round: "Round 2 (Staff)",
      findings: [
        "Staff need an intuitive interface to call the next customer and manage service stations.",
        "A dashboard view of all active queues is critical for managers.",
        "Users requested automated alerts when a queue gets too long.",
        "Simplifying the process for transferring a customer to another queue."
      ]
    }
  ];

  const accessibilityFeatures = [
    {
      title: "Multi-channel Notifications",
      description: "Provide queue updates via SMS and in-app push notifications to cater to users with different preferences and abilities.",
      icon: "1"
    },
    {
      title: "Voice-over & Screen Reader Support",
      description: "Ensure the customer-facing app is fully compatible with screen readers for visually impaired users.",
      icon: "2"
    },
    {
      title: "High Contrast UI",
      description: "A high-contrast color scheme for both the customer app and staff dashboard to improve readability for all users.",
      icon: "3"
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
                  <span>March 2020 - Dec 2020</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>40+ Participants</span>
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Understanding the Waiting Game</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Research involved observing customers in various waiting environments (banks, clinics, retail) and interviewing staff to understand the operational chaos and user frustration.</p>
                </div>
                
                <div className="space-y-12">
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-headline text-center">Research Methodology</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      Conducted observational studies, contextual interviews with staff and customers, and competitive analysis of existing queueing solutions. The goal was to map the emotional and logistical journey of waiting.
                    </p>
                  </div>

                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                    <div className="rounded-lg shadow-lg overflow-hidden">
                      <Image 
                          src="https://placehold.co/1200x800.png"
                          alt="Observational research in a waiting room" 
                          width={1200} 
                          height={800} 
                          data-ai-hint="people waiting"
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
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Businesses lose customer goodwill and operational efficiency due to disorganized, non-transparent queueing processes. Customers need control and information, while businesses need data and flexibility.</p>
                </div>

                <div className="space-y-12">
                    <h3 className="text-2xl font-bold text-foreground font-headline">Problem Statement</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                     The lack of a smart, integrated queueing system creates a frustrating experience for customers and a stressful, inefficient environment for staff. This disconnect leads to lower customer satisfaction, reduced staff productivity, and a lack of actionable data to improve service operations.
                    </p>
                    
                    <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <h3 className="text-xl font-bold text-foreground mb-6 font-headline text-center">User Personas</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Customer</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I hate waiting in line. I wish I could join the queue from my phone and get an alert when it's my turn."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Frontline Staff</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "It's hard to manage the rush. I need a simple way to call the next person and see how many are waiting for my service."
                                </p>
                            </div>
                            <div className="bg-secondary/20 rounded-lg p-6 border border-border/50">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Branch Manager</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I need to see wait times and staff performance in real-time to make sure we're meeting our service level goals."
                                </p>
                            </div>
                            <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 text-center">The Business Owner</h4>
                                <p className="text-foreground italic text-center text-sm">
                                    "I want to compare performance across all my locations and understand customer flow patterns to optimize my business."
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
                      <h3 className="text-2xl font-bold text-foreground my-8 font-headline text-center">System User Flow</h3>
                      <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                        <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                         I designed the architecture to support two primary user journeys: the customer's path from joining a queue to receiving service, and the staff's workflow for managing the queue and serving customers.
                        </p>
                        <div className="rounded-lg shadow-lg overflow-hidden">
                          <Image 
                              src="https://placehold.co/1200x800.png"
                              alt="User Flow Diagram for Queue Management" 
                              width={1200} 
                              height={800} 
                              data-ai-hint="user flow diagram"
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
                  <h2 className="text-3xl font-bold text-foreground font-headline">Designing a Seamless Flow</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The core concept was a dual-interface system: a simple, mobile-first experience for customers and a powerful, data-rich dashboard for staff and managers.</p>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Design Decisions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ideation focused on reducing customer anxiety and empowering staff.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• **Virtual Queuing:** Allow customers to join a queue via a QR code or app, freeing them to wait wherever they want.</li>
                      <li>• **Role-Based Dashboards:** Staff see a simple "call next" interface, while managers get a full analytics dashboard.</li>
                      <li>• **Multi-tenant Architecture:** Design a scalable system where each business can customize its queues, services, and branding.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Prototype & Test Stage */}
              <section id="prototype-test" className="mb-20">
                <div className="text-center mb-12">
                   <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-bold py-2 px-4 rounded-full text-sm mb-4">
                    <Smartphone className="w-5 h-5"/>
                    <span>PROTOTYPE & TEST</span>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground font-headline">Building and Validating</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Interactive prototypes were created for both the customer-facing mobile app and the staff dashboard, then tested in simulated real-world scenarios.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Prototype Highlights</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        Prototypes focused on the core loop: a customer joining a queue, receiving updates, and being called for service by a staff member using the dashboard.
                      </p>
                      <div className="space-y-4">
                        <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View Customer App Prototype
                        </a>
                         <a href="#" className="flex items-center gap-2 text-primary hover:underline font-medium">
                          <ExternalLink className="w-4 h-4" />
                          View Staff Dashboard Prototype
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
                      The platform successfully reduced average customer wait times by over 40% in pilot locations. Businesses saw a significant increase in customer satisfaction scores and improved staff efficiency due to data-driven operational insights.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
                    <h3 className="text-xl font-bold text-foreground mb-6 font-headline">Key Learnings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                     Designing a successful SaaS product requires balancing the needs of two distinct user groups—the end-customer and the business user. Simplicity for the customer and power for the business were the guiding principles that led to success.
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
                      title: "Appointment Booking",
                      description: "Integrate appointment scheduling to allow customers to book a time slot in advance, further reducing wait times."
                    },
                    {
                      step: "02", 
                      title: "Staff Performance Analytics",
                      description: "Build out a more detailed analytics module for managers to track individual staff performance and service times."
                    },
                    {
                      step: "03",
                      title: "Third-Party Integrations",
                      description: "Develop APIs to allow integration with other business systems like CRM or POS software."
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

export default QueueManagementPage;
