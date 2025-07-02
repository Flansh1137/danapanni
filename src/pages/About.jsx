import { useEffect, useRef } from "react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Heart, Users, Target, Globe, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-in").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-green-600">
              danapaani
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
              <Link to="/about" className="text-green-600 font-medium border-b-2 border-green-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
            </nav>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">Join/Giving</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="container mx-auto text-center max-w-4xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About danapaani</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            At Danapaani, we unite compassion with action — creating real change, one meal, one life at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To eliminate hunger and empower lives by making food, education, and support accessible to all. We believe in building a better world — one act of kindness at a time.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 fade-in">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Heart />, title: "Compassion", desc: "Every effort we make begins with empathy and love for others." },
              { icon: <Shield />, title: "Transparency", desc: "Your contributions are visible, trackable, and impactful." },
              { icon: <Users />, title: "Community", desc: "We thrive by bringing people together with shared purpose." },
              { icon: <Target />, title: "Impact", desc: "We focus on results that truly change lives." },
              { icon: <Globe />, title: "Global Reach", desc: "Connecting hearts across borders and cultures." },
              { icon: <Award />, title: "Excellence", desc: "We’re committed to the highest standards in everything we do." },
            ].map((val, i) => (
              <Card key={i} className="text-center p-6 fade-in">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>In 2020, we set out with a single vision — to bring dignity through food and hope through connection.</p>
              <p>From humble beginnings, our mission expanded globally, helping thousands in need through meals, support, and community projects.</p>
              <p>We now serve 120,000+ people and continue to grow as a beacon of kindness and human connection.</p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-64 lg:h-80 fade-in"></div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="container mx-auto text-center fade-in">
          <h2 className="text-3xl font-bold mb-12">Our Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "120,000+", label: "Active Donors" },
              { number: "$50M+", label: "Funds Raised" },
              { number: "2,500+", label: "Projects Completed" },
              { number: "65+", label: "Countries Reached" },
            ].map((stat, i) => (
              <div key={i} className="fade-in">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you donate, volunteer, or spread awareness — every action helps us nourish lives and restore hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">Start Fundraising</Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg">Make a Donation</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 sm:px-6 lg:px-8 fade-in">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">danapaani NGO</div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-full" />
              <div className="w-8 h-8 bg-white/20 rounded-full" />
              <div className="w-8 h-8 bg-white/20 rounded-full" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">© 2025 danapaani NGO</h4>
            <div className="space-y-2 text-sm">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm leading-relaxed">
              Danapaani is committed to fighting hunger and restoring dignity through meals and love. With your support, no one has to sleep hungry.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
