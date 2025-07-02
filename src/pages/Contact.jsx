import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Textarea } from "../components/ui/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-green-600">
                danapaani
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
                className="text-gray-700 hover:text-green-600 font-medium"
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
                className="text-green-600 font-medium border-b-2 border-green-600"
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
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our platform, need support, or want to partner
            with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email Us
                        </h3>
                        <p className="text-gray-600 mb-2">
                          For general inquiries and support
                        </p>
                        <a
                          href="mailto:hello@danapaani.org"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          hello@danapaani.org
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Call Us
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Speak with our support team
                        </p>
                        <a
                          href="tel:+1-555-0123"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          +1 (555) 012-3456
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Visit Us
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Our headquarters location
                        </p>
                        <address className="text-green-600 not-italic">
                          123 Charity Street
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Office Hours
                        </h3>
                        <p className="text-gray-600 mb-2">
                          When our team is available
                        </p>
                        <div className="text-green-600">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                          <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="fundraiser">
                            Start a Fundraiser
                          </SelectItem>
                          <SelectItem value="donation">
                            Donation Help
                          </SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Help</h2>
          <p className="text-lg text-gray-600 mb-12">
            Looking for immediate answers? Check out our most frequently asked
            questions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do I start a fundraiser?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn the step-by-step process to create your first
                  fundraising campaign.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How are donations processed?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Understand our secure payment processing and fund
                  distribution.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-md transition-shadow">
              <CardContent className="p-0 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What are the fees?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Transparent information about our platform fees and costs.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">danapaani NGO</div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">© 2023 danapaani NGO</h4>
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

export default Contact;
