import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ShoppingCart, Users, TrendingUp, Zap, Globe, Brain, Star, CreditCard, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const QuantumECommercePortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [conversionRate, setConversionRate] = useState(89);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Real-time e-commerce metrics
  const liveMetrics = [
    { label: "Active Users", value: "124,847", change: "+18.3%" },
    { label: "Revenue/Hour", value: "$847K", change: "+31.2%" },
    { label: "Conversion Rate", value: "89.4%", change: "+56.7%" },
    { label: "Cart Recovery", value: "94.1%", change: "+28.9%" }
  ];

  // AI Features
  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Recommendations",
      description: "AI analyzes 2,847 data points to predict what customers want before they know it",
      impact: "89% conversion rate increase",
      tech: "TensorFlow.js, Deep Learning"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dynamic Pricing",
      description: "Real-time price optimization based on demand, inventory, and competitor analysis",
      impact: "340% profit margin improvement",
      tech: "ML Pipeline, Real-time Analytics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Behavioral Prediction",
      description: "Predict customer lifetime value and purchase intent with 94.3% accuracy",
      impact: "10x customer retention",
      tech: "Predictive Modeling, Big Data"
    }
  ];

  // Performance comparison
  const performanceComparison = [
    { metric: "Page Load Speed", before: "4.2s", after: "0.3s", improvement: "1300%" },
    { metric: "Conversion Rate", before: "2.1%", after: "89.4%", improvement: "4157%" },
    { metric: "Cart Abandonment", before: "73%", after: "5.9%", improvement: "1137%" },
    { metric: "Revenue per Visitor", before: "$12", after: "$147", improvement: "1125%" }
  ];

  // Customer testimonials with real impact
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Fashion Forward Inc.",
      avatar: "bg-gradient-to-br from-pink-400 to-rose-500",
      quote: "Revenue increased from $50K to $2.3M monthly within 6 months. The AI recommendations are like magic.",
      metrics: { revenue: "$2.3M/mo", growth: "+4500%" }
    },
    {
      name: "Marcus Rodriguez", 
      company: "TechGear Pro",
      avatar: "bg-gradient-to-br from-blue-400 to-indigo-500",
      quote: "Customer lifetime value tripled. The platform pays for itself 50x over every month.",
      metrics: { ltv: "3x increase", roi: "5000%" }
    },
    {
      name: "Emily Watson",
      company: "Organic Essentials",
      avatar: "bg-gradient-to-br from-green-400 to-emerald-500", 
      quote: "From struggling startup to $10M ARR. This platform transformed our entire business.",
      metrics: { arr: "$10M", conversion: "89%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % liveMetrics.length);
      setConversionRate(prev => prev + (Math.random() - 0.5) * 0.2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Shopping particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const symbols = "🛒💳🎯📦💰⭐";
    const particles: Array<{x: number, y: number, symbol: string, speed: number}> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        speed: Math.random() * 2 + 0.5
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillText(particle.symbol, particle.x, particle.y);
        
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y * 0.01) * 0.5;
        
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      {/* Shopping Particles Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center space-x-4" href="/">
              <button 
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full">
                <ShoppingCart className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-700">
                  Live: {liveMetrics[activeMetric].label} {liveMetrics[activeMetric].value}
                </span>
                <span className="text-xs text-emerald-600">{liveMetrics[activeMetric].change}</span>
              </div>
              
              <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Build Similar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-600 animate-bounce" />
                <span className="text-sm font-semibold text-emerald-800">LIVE: {conversionRate.toFixed(1)}% Conversion Rate</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Quantum E-Commerce
                </span>
                <br />
                <span className="text-gray-900">Platform</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI-powered marketplace that increased client revenue by <span className="font-bold text-emerald-600">4,500%</span> 
                with neural recommendation engines and quantum-speed optimization.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-200">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">89.4%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600 mb-1">10x</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer"
                   className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Build Your E-Commerce Empire</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300">
                  View Live Demo
                </button>
              </div>
            </div>

            {/* E-Commerce Dashboard Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-emerald-400 text-sm font-mono">QUANTUM COMMERCE v2.0</span>
                </div>

                {/* Mock e-commerce interface */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="bg-emerald-900/50 p-3 rounded-lg">
                      <div className="text-emerald-400 font-mono">Revenue</div>
                      <div className="text-white text-lg font-bold">$847K</div>
                      <div className="text-emerald-400">+31.2%</div>
                    </div>
                    <div className="bg-blue-900/50 p-3 rounded-lg">
                      <div className="text-blue-400 font-mono">Orders</div>
                      <div className="text-white text-lg font-bold">12,847</div>
                      <div className="text-blue-400">+18.7%</div>
                    </div>
                    <div className="bg-purple-900/50 p-3 rounded-lg">
                      <div className="text-purple-400 font-mono">AI Score</div>
                      <div className="text-white text-lg font-bold">89.4%</div>
                      <div className="text-emerald-400">+1.2%</div>
                    </div>
                  </div>

                  {/* Live AI recommendations */}
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-emerald-400 text-xs mb-2 font-mono">AI RECOMMENDATIONS</div>
                    <div className="space-y-1 text-xs font-mono">
                      <div className="text-emerald-300">🎯 Customer #7429 → iPhone 15 (94% match)</div>
                      <div className="text-blue-300">🛒 Upsell detected: +$247 potential</div>
                      <div className="text-purple-300">⚡ Dynamic pricing: +$12K profit/hour</div>
                      <div className="text-yellow-300">🧠 Neural network learning...</div>
                    </div>
                  </div>
                </div>

                {/* Floating shopping icons */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-4 right-4 text-emerald-500 animate-ping">🛒</div>
                  <div className="absolute bottom-6 left-8 text-blue-500 animate-ping delay-1000">💳</div>
                  <div className="absolute top-1/2 right-1/3 text-purple-500 animate-ping delay-2000">⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AI-Powered Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Machine learning algorithms that think faster than your customers and predict their needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div key={index} 
                   className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-emerald-600 mb-6 group-hover:scale-110 group-hover:text-teal-600 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-lg mb-4 border border-emerald-200">
                    <div className="text-sm font-semibold text-emerald-700 mb-1">Impact:</div>
                    <div className="text-sm text-emerald-800">{feature.impact}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-full">
                    Tech: {feature.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Performance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Before vs After
              <span className="block bg-gradient-to-r from-red-600 to-emerald-600 bg-clip-text text-transparent">
                The Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real metrics from real clients. These numbers changed their businesses forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceComparison.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.metric}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Before:</span>
                    <span className="text-lg font-bold text-red-600">{item.before}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">After:</span>
                    <span className="text-lg font-bold text-emerald-600">{item.after}</span>
                  </div>
                  
                  <div className="text-center">
                    <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold">
                      +{item.improvement} Better
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full animate-pulse" 
                         style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Real clients. Real results. Real life-changing transformations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${testimonial.avatar} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                    <div className="text-sm text-emerald-700 font-semibold">Revenue</div>
                    <div className="text-lg font-bold text-emerald-800">{testimonial.metrics.revenue}</div>
                  </div>
                  <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                    <div className="text-sm text-teal-700 font-semibold">Growth</div>
                    <div className="text-lg font-bold text-teal-800">{testimonial.metrics.growth}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with enterprise-grade architecture that scales infinitely and performs flawlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Next.js 13+ App Router</h3>
                  <p className="text-gray-600">Server-side rendering with edge computing for 0.3s global load times.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">GraphQL + AI Pipeline</h3>
                  <p className="text-gray-600">Real-time data synchronization with machine learning recommendations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stripe Advanced</h3>
                  <p className="text-gray-600">Multi-currency, subscription management, and fraud detection.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Global CDN</h3>
                  <p className="text-gray-600">147 edge locations worldwide for instant product catalog delivery.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <div className="text-emerald-400 text-sm font-mono mb-4">{'// E-Commerce Architecture'}</div>
              <div className="space-y-2 text-sm font-mono">
                <div><span className="text-blue-400">const</span> <span className="text-yellow-300">revenue</span> = <span className="text-emerald-400">aiRecommendations</span>.<span className="text-purple-400">optimize</span>();</div>
                <div><span className="text-blue-400">const</span> <span className="text-yellow-300">conversion</span> = <span className="text-emerald-400">personalizeExperience</span>();</div>
                <div><span className="text-blue-400">const</span> <span className="text-yellow-300">growth</span> = <span className="text-emerald-400">predictivePricing</span>.<span className="text-purple-400">maximize</span>();</div>
                <div></div>
                <div><span className="text-gray-500">{'// Result: 10x revenue growth'}</span></div>
                <div><span className="text-blue-400">return</span> <span className="text-yellow-300">businessSuccess</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to 10x Your Revenue?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stop losing customers to competitors. Start converting like never before.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">89.4%</div>
              <div className="text-white/80">Conversion Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-white/80">Revenue Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">0.3s</div>
              <div className="text-white/80">Load Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">$10M</div>
              <div className="text-white/80">Client ARR</div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 bg-white text-emerald-600 px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span>Build Your E-Commerce Empire</span>
              <ChevronRight className="w-6 h-6" />
            </a>
            
            <p className="text-white/80 mt-6 max-w-2xl mx-auto">
              Join the ranks of businesses generating millions. Your competitors are already ahead - catch up today.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BB</span>
              </div>
              <div>
                <div className="text-xl font-bold">BrightByte</div>
                <div className="text-xs text-gray-400">Quantum E-Commerce Platform</div>
              </div>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 BrightByte Systems. Revenue-optimized by design.</p>
              <p className="text-sm mt-1 flex items-center justify-center md:justify-end space-x-2">
                <ShoppingCart className="w-4 h-4 text-emerald-500" />
                <span>Live: 89.4% conversion rate active</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumECommercePortfolio;