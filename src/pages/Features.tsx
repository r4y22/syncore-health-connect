import { useEffect, useRef, useState } from "react";
import { Brain, FileText, Users, DollarSign, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Brain,
      title: "Smarter chart review, powered by AI",
      description: "All information is easily accessible, no need to scroll through pages. Summaries are auto generated, and you can ask Syncore anything about the patient's history.",
      color: "syncore-blue"
    },
    {
      icon: FileText,
      title: "Documentation and Workflow",
      description: "Built-in AI Scribe & auto-documentation, removing the hassle of filling out paperwork. Talk to the software - use your voice to fill out forms and take notes.",
      color: "syncore-purple"
    },
    {
      icon: Users,
      title: "Effortless Admin Management",
      description: "Add doctors, nurses, and technicians in seconds, no IT help needed. No training required: If you can use your email, you can use Syncore.",
      color: "syncore-pink"
    },
    {
      icon: DollarSign,
      title: "Simplified Billing, Full Visibility",
      description: "Track claims, payments, denials, and revenue in one clean dashboard. Syncore makes it easy to manage the full billing lifecycle without relying on external tools or messy spreadsheets.",
      color: "syncore-blue"
    },
    {
      icon: Shield,
      title: "Smarter Decisions. Safer Prescriptions.",
      description: "Clinical Assistant: Instant clinical recommendations from symptoms, history, and notes. Gets smarter with every case. Prescription Safety: Flags interactions, duplications, and dosage issues in real time.",
      color: "syncore-purple"
    }
  ];

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleFeatures(prev => [...prev, index]);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-50px 0px"
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-syncore-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-syncore-gradient">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase bg-syncore-gradient bg-clip-text text-transparent">
                  Core Features
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Powerful Features for{" "}
                <span className="bg-syncore-gradient bg-clip-text text-transparent">
                  Modern Healthcare
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how Syncore's advanced features transform healthcare workflows, 
                streamline operations, and enhance patient care through intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isVisible = visibleFeatures.includes(index);
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    ref={el => featureRefs.current[index] = el}
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Card className={`p-8 lg:p-12 border-2 hover:border-${feature.color}/30 transition-all duration-300 hover:shadow-2xl group ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } flex flex-col lg:flex gap-8 lg:gap-12`}>
                      {/* Icon and Content */}
                      <div className="flex-1 space-y-6">
                        <div className={`inline-flex p-4 rounded-2xl bg-${feature.color}/10 group-hover:bg-${feature.color}/20 transition-colors duration-300`}>
                          <Icon className={`w-8 h-8 text-${feature.color}`} />
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className={`group-hover:border-${feature.color} group-hover:text-${feature.color} transition-all duration-300`}
                        >
                          Learn More →
                        </Button>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br from-${feature.color}/20 to-${feature.color}/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                          <Icon className={`w-24 h-24 text-${feature.color}/60`} />
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-syncore-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Ready to Transform Your{" "}
                <span className="bg-syncore-gradient bg-clip-text text-transparent">
                  Healthcare Workflow?
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Join thousands of healthcare professionals who trust Syncore to streamline their operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-syncore-gradient hover:opacity-90 text-white">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;