import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Heart, Users, Target, Globe, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-green-600">
                gocingo
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-green-600 font-medium border-b-2 border-green-600"
              >
                About
              </Link>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Resources
              </a>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
              Join/Giving
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About Gocingo
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We are the world's largest social fundraising platform, dedicated to
            building better futures through collective charity and community
            support.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To empower communities worldwide by making charitable giving
              accessible, transparent, and impactful. We believe that great
              futures are built with small acts of charity that create lasting
              change.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Compassion
                </h3>
                <p className="text-gray-600">
                  We lead with empathy and understanding, ensuring every action
                  is driven by genuine care for those in need.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Every donation is tracked and reported, ensuring complete
                  visibility into how funds are used to create impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community
                </h3>
                <p className="text-gray-600">
                  We believe in the power of collective action and building
                  strong, supportive communities worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <p className="text-gray-600">
                  We focus on creating measurable, sustainable change that
                  improves lives and strengthens communities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  Our platform connects donors and causes across borders,
                  creating a worldwide network of positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  We strive for the highest standards in everything we do, from
                  platform security to program effectiveness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Gocingo emerged from a simple but powerful
                  idea: that technology could make charitable giving more
                  accessible, transparent, and effective than ever before.
                </p>
                <p>
                  What started /* as */ a small team of passionate individuals
                  has grown into a global platform that has facilitated over $50
                  million in donations to causes around the world.
                </p>
                <p>
                  Today, we're proud to serve over 120,000 active users who have
                  supported thousands of causes across health, education,
                  disaster relief, and community development.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 lg:h-80"></div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Impact by the Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                120,859+
              </div>
              <div className="text-lg opacity-90">Active Donors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$50M+</div>
              <div className="text-lg opacity-90">Funds Raised</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-lg opacity-90">Projects Funded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">65+</div>
              <div className="text-lg opacity-90">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're looking to donate, volunteer, or start your own
            fundraiser, we're here to help you make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Start Fundraising
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
            >
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">Gocingo NGO</div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">© 2023 Gocingo NGO</h4>
              <div className="space-y-2 text-sm">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet. Consectetur adipiscing elit. sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
