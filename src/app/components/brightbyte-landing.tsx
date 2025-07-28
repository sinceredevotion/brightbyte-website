"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, ExternalLink, Menu, X, Globe, Terminal, Cpu, Database } from 'lucide-react';

const BrightByteLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [codeLines, setCodeLines] = useState<string[]>([]);
  const [activeMetric, setActiveMetric] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Unique animated code snippets that type out
  const codeSnippets = [
    "const magic = await buildAmazingWebsite();",
    "performance.optimize('blazing-fast');",
    "user.experience = 'absolutely-delightful';",
    "revenue.increase(3.5x);",
    "competitors.outrank('easily');"
  ];

  // Real-time metrics animation
  const metrics = [
    { label: "Sites Deployed", value: 847, suffix: "+" },
    { label: "Performance Score", value: 98, suffix: "/100" },
    { label: "Client Revenue Growth", value: 340, suffix: "%" },
    { label: "Code Quality", value: 99.9, suffix: "%" }
  ];

  // Matrix-style binary rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = "01";
    const font_size = 10;
    const columns = canvas.width / font_size;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#3B82F6';
      ctx.font = font_size + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for code
  useEffect(() => {
    let currentSnippet = 0;
    let currentChar = 0;
    let currentLine = '';

    const typeInterval = setInterval(() => {
      if (currentChar < codeSnippets[currentSnippet].length) {
        currentLine += codeSnippets[currentSnippet][currentChar];
        currentChar++;
        
        setCodeLines(prev => {
          const newLines = [...prev];
          newLines[currentSnippet] = currentLine;
          return newLines;
        });
      } else {
        currentSnippet = (currentSnippet + 1) % codeSnippets.length;
        currentChar = 0;
        currentLine = '';
        
        setTimeout(() => {
          if (currentSnippet === 0) {
            setCodeLines([]);
          }
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Animated metrics counter
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // const handleMouseMove = (e: MouseEvent) => {
    //   setMousePosition({ x: e.clientX, y: e.clientY });
    // };

    window.addEventListener('scroll', handleScroll);
    //window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      //window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Code Architecture",
      description: "Enterprise-grade foundations that scale from startup to IPO without breaking.",
      highlight: "99.9% Uptime Guaranteed"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Performance Engineering",
      description: "Sub-second load times that convert 3x better than industry average.",
      highlight: "< 0.8s Load Time"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Growth Optimization",
      description: "Data-driven development that increases revenue, not just looks pretty.",
      highlight: "340% Avg Revenue Boost"
    }
  ];

  const portfolio = [
    {
      title: "Neural Trading Platform",
      category: "AI-Powered FinTech",
      description: "Real-time ML algorithm trading with $2.3B daily volume handling",
      image: "bg-gradient-to-br from-blue-600 to-purple-700",
      tech: ["React", "TensorFlow.js", "WebRTC", "Redis"],
      metrics: "2.3B daily volume",
      impact: "+$850M client profits",
      link: "/portfolios/neural"
    },
    {
      title: "Quantum E-Commerce",
      category: "Next-Gen Retail",
      description: "AI recommendation engine with 89% conversion rate improvement",
      image: "bg-gradient-to-br from-emerald-500 to-teal-600",
      tech: ["Next.js", "GraphQL", "Stripe", "ML Pipeline"],
      metrics: "89% conversion boost",
      impact: "10x revenue growth",
      link: "/portfolios/quantum"
    },
    {
      title: "BioTech Data Visualizer",
      category: "Scientific Computing",
      description: "Real-time genomic data processing for breakthrough cancer research",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      tech: ["React", "D3.js", "WebAssembly", "Python"],
      metrics: "10TB data processed",
      impact: "3 medical breakthroughs",
      link: "/portfolios/biotech"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden relative">
      {/* Binary Matrix Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
      />

      {/* Unique glowing cursor with code trail */}
      {/* <div 
        className="fixed w-6 h-6 pointer-events-none z-50 transition-all duration-200"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      >
        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
        <div className="absolute inset-0 w-full h-full bg-blue-400 rounded-full animate-ping opacity-75"></div>
      </div> */}

      {/* Navigation with live metrics */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-sm">BB</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-xl font-bold">BrightByte</span>
              
              {/* Live status indicator */}
              <div className="hidden sm:flex items-center space-x-2 text-xs bg-green-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-medium">LIVE • Building Magic</span>
              </div>
            </div>

            {/* Desktop Navigation with live metrics */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => smoothScroll('about')} className="hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => smoothScroll('services')} className="hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => smoothScroll('portfolio')} className="hover:text-blue-600 transition-colors">Portfolio</button>
              <div className="text-xs text-gray-500">
                {metrics[activeMetric].label}: <span className="text-blue-600 font-bold animate-pulse">{metrics[activeMetric].value}{metrics[activeMetric].suffix}</span>
              </div>
              <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer" 
                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Hire Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => smoothScroll('about')} className="block w-full text-left py-2 hover:text-blue-600">About</button>
              <button onClick={() => smoothScroll('services')} className="block w-full text-left py-2 hover:text-blue-600">Services</button>
              <button onClick={() => smoothScroll('portfolio')} className="block w-full text-left py-2 hover:text-blue-600">Portfolio</button>
              <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer" 
                 className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-center">
                Hire Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Live Code Demo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-sm font-semibold text-gray-700">LIVE: Currently Building 23 Projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Code That
              </span>
              <br />
              <span className="text-gray-900">Prints Money</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              We don&apos;t just build websites. We engineer revenue-generating machines 
              that outperform competitors by <span className="text-blue-600 font-bold">340%</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer"
                 className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 relative overflow-hidden">
                <span className="relative z-10">Start Your $10M Project</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button onClick={() => smoothScroll('portfolio')} 
                      className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                See $850M Results
              </button>
            </div>

            {/* Real-time metrics ticker */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-blue-200">
                <span className="text-gray-600">Revenue Generated: </span>
                <span className="text-green-600 font-bold">$850M+</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-200">
                <span className="text-gray-600">Load Time: </span>
                <span className="text-purple-600 font-bold">0.8s avg</span>
              </div>
            </div>
          </div>

          {/* Live Code Terminal */}
          <div className="lg:block">
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 relative overflow-hidden">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">BrightByte Terminal</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">$ brightbyte --initialize-success</div>
                {codeLines.map((line, index) => (
                  <div key={index} className="text-blue-300">
                    <span className="text-gray-500">→ </span>
                    {line}
                    <span className="animate-pulse">|</span>
                  </div>
                ))}
                <div className="text-yellow-400 mt-4">
                  ✨ Magic Status: <span className="text-green-400 animate-pulse">ACTIVE</span>
                </div>
              </div>

              {/* Floating particles in terminal */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-4 right-4 w-1 h-1 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-8 w-1 h-1 bg-green-500 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique scroll indicator with code */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Unique DNA Visualization */}
      <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* DNA Helix Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" fill="none" className="animate-pulse">
              <animate attributeName="d" dur="4s" repeatCount="indefinite" 
                values="M0,50 Q25,25 50,50 T100,50;M0,50 Q25,75 50,50 T100,50;M0,50 Q25,25 50,50 T100,50"/>
            </path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">NEURAL NETWORK: ACTIVE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                Ex-FAANG Engineers
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Building Your Empire
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We&apos;re not your typical agency. Our team includes senior engineers who&apos;ve scaled 
                systems at <span className="font-semibold text-blue-600">Amazon</span> (handling 100M+ requests/day) 
                and <span className="font-semibold text-purple-600">IBM Watson</span> (processing terabytes of AI data).
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every line of code is engineered for <span className="font-bold text-green-600">profit maximization</span>, 
                not just pretty interfaces. We&apos;ve generated <span className="font-bold text-blue-600">$850M+</span> in 
                client revenue through performance optimization alone.
              </p>

              {/* Unique live metrics display */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-blue-600 mb-1">99.97%</div>
                    <div className="text-sm text-gray-600">System Uptime</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div className="bg-blue-500 h-1 rounded-full animate-pulse" style={{width: '99.97%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-purple-600 mb-1">0.3s</div>
                    <div className="text-sm text-gray-600">Avg Load Time</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                      <div className="bg-purple-500 h-1 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certification badges with unique styling */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>AWS Certified</span>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
                  <span>Google Cloud Expert</span>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-1000"></div>
                  <span>Performance Specialist</span>
                </div>
              </div>
            </div>
            
            {/* Unique 3D-style feature grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="group bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Terminal className="w-8 h-8 mb-3" />
                      <h3 className="font-semibold mb-2">Military-Grade Security</h3>
                      <p className="text-sm opacity-90">Bank-level encryption & penetration tested</p>
                      <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded-full inline-block">
                        Zero Breaches
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Zap className="w-8 h-8 mb-3" />
                      <h3 className="font-semibold mb-2">AI-Powered Optimization</h3>
                      <p className="text-sm opacity-90">Machine learning for conversion rates</p>
                      <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded-full inline-block">
                        340% Revenue Boost
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 pt-12">
                  <div className="group bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Database className="w-8 h-8 mb-3" />
                      <h3 className="font-semibold mb-2">Quantum-Scale Architecture</h3>
                      <p className="text-sm opacity-90">Built for 100M+ concurrent users</p>
                      <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded-full inline-block">
                        Infinite Scale
                      </div>
                    </div>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Globe className="w-8 h-8 mb-3" />
                      <h3 className="font-semibold mb-2">Global Edge Network</h3>
                      <p className="text-sm opacity-90">Sub-100ms response worldwide</p>
                      <div className="mt-3 text-xs bg-white/20 px-2 py-1 rounded-full inline-block">
                        Lightning Fast
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Unique Hover Effects */}
      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <Cpu className="w-4 h-4 text-blue-600 animate-spin" />
              <span className="text-sm font-semibold text-gray-700">SYSTEM STATUS: OPTIMIZING PROFITS</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revenue-Engineered Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t just build features. We engineer profit-generating systems that 
              outperform your competition and scale infinitely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} 
                   className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden">
                
                {/* Unique glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 group-hover:text-purple-600 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Unique highlight badge */}
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-3 py-1 rounded-full mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-700">{service.highlight}</span>
                  </div>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Deploy Now <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Real Impact Metrics */}
      <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Unique animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_var(--tw-gradient-stops))] from-purple-600 via-transparent to-transparent animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-sm font-semibold text-green-800">PROFIT GENERATED: $850,000,000+</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Billion-Dollar Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects. Real revenue. Real competitive advantages that compound over time.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Link 
              key={index} 
              href={project.link}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                {/* Unique project preview with metrics overlay */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Live metrics overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{project.category}</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-bold">{project.metrics}</span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <ExternalLink className="w-5 h-5 text-gray-800"/>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact metrics */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg mb-4 border border-green-200">
                    <div className="text-sm text-green-800 font-semibold">{project.impact}</div>
                  </div>
                  
                  {/* Tech stack with unique styling */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} 
                            className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Case Study →
                    </div>
                    <div className="text-xs text-gray-500">
                      ROI: <span className="text-green-600 font-bold">2,847%</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10">Build Your $10M Project</span>
              <ExternalLink className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section with Unique Interactive Elements */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        {/* Unique animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_24%,_rgba(255,255,255,0.05)_25%,_rgba(255,255,255,0.05)_26%,_transparent_27%,_transparent_74%,_rgba(255,255,255,0.05)_75%,_rgba(255,255,255,0.05)_76%,_transparent_77%,_transparent),_linear-gradient(0deg,_transparent_24%,_rgba(255,255,255,0.05)_25%,_rgba(255,255,255,0.05)_26%,_transparent_27%,_transparent_74%,_rgba(255,255,255,0.05)_75%,_rgba(255,255,255,0.05)_76%,_transparent_77%,_transparent)] bg-[size:50px_50px]"></div>
        </div>
        
        {/* Floating elements with unique animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Live project counter */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span className="text-sm font-semibold">CURRENTLY BUILDING: 23 PROJECTS</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Your Competitors Are
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300">
                Already Behind
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
              Every day you wait is another day your competitors gain market share. 
              We&apos;ve generated <span className="font-bold text-yellow-300">$850M+</span> for our clients. 
              <span className="block mt-2">When do you want to start winning?</span>
            </p>
          </div>
          
          {/* Unique CTA section with countdown timer */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Limited Availability</h3>
                  <p className="text-white/80 mb-6">
                    We only take on 5 new projects per month to ensure quality. 
                    Secure your spot before your competitors do.
                  </p>
                  
                  <div className="flex space-x-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">2</div>
                      <div className="text-white/60">Spots Left</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-300">48hr</div>
                      <div className="text-white/60">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-300">∞</div>
                      <div className="text-white/60">ROI Potential</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$10M+</div>
                  <div className="text-white/80 mb-4">Average Client Revenue Impact</div>
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full mb-2">
                    <div className="bg-gradient-to-r from-green-300 to-emerald-300 h-full rounded-full animate-pulse" style={{width: '89%'}}></div>
                  </div>
                  <div className="text-sm text-white/60">89% of clients see 10x ROI within 6 months</div>
                </div>
              </div>
            </div>
            
            {/* Main CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer"
                 className="group bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3 relative overflow-hidden">
                <span className="relative z-10">Start My $10M Project</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="mailto:hello@brightbyte.dev" 
                 className="text-white px-10 py-6 rounded-full text-xl font-bold border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Schedule Strategy Call
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">$850M+</div>
                <div className="text-white/70">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.97%</div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">0.3s</div>
                <div className="text-white/70">Average Load Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-white/70">Scale Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with unique branding */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">BB</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <div className="text-xl font-bold">BrightByte</div>
                <div className="text-xs text-gray-400">Engineering Profit Since 2024</div>
              </div>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 BrightByte Systems. Revenue-optimized by design.</p>
              <div className="text-sm mt-1 flex items-center justify-center md:justify-end space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Currently generating $2.3M daily for clients</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default BrightByteLanding;