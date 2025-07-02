import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Bdge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/Accordion";
import {
  Play,
  Heart,
  Users,
  GraduationCap,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
                className="text-green-600 hover:text-green-700 font-medium border-b-2 border-green-600"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Great futures are built
            <br />
            with a small charity
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The world's largest social fundraising platform, optimized for your
            charity is a more easy way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
              Donate now
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 px-8 py-3 text-lg"
            >
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </section>

      {/* Stats and Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 65% Card */}
            <Card className="bg-green-600 text-white p-6 relative overflow-hidden">
              <CardContent className="p-0">
                <div className="text-4xl font-bold mb-2">65%</div>
                <div className="text-sm opacity-90 mb-4">
                  of the Funded Projects Greater organized in our funding,
                  helping families find housing all across Africa
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-0"
                >
                  View more
                </Badge>
              </CardContent>
            </Card>

            {/* Health Card */}
            <Card className="bg-gray-900 text-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-20">
                  <div className="text-sm text-gray-300 mb-2">Health</div>
                  <div className="text-lg font-semibold">
                    Life skills for 2,587 Children in South Africa.
                  </div>
                </div>
                <div className="absolute bottom-4 left-6">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white border-0"
                  >
                    Join 1500+ People Donate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Education Card */}
            <Card className="bg-gray-700 text-white relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-20">
                  <div className="text-sm text-gray-300 mb-2">Education</div>
                  <div className="text-lg font-semibold">
                    Summer food, scholarships to orphans India
                  </div>
                </div>
                <div className="absolute bottom-4 left-6">
                  <Badge
                    variant="secondary"
                    className="bg-white/20 text-white border-0"
                  >
                    Join 1500+ People Donate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Your health Card */}
            <Card className="bg-lime-400 text-gray-900 relative overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-20">
                  <div className="text-4xl mb-4">🤲</div>
                  <div className="text-lg font-semibold">
                    Your health for better
                  </div>
                </div>
                <div className="absolute bottom-4 left-6">
                  <Heart className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
      <section className="bg-lime-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Fundraising on Gocingo takes
            <br />
            just a few minutes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">😊</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Give Happiness
              </h3>
              <p className="text-gray-700">
                Giving happiness to those who need it, also makes our hearts
                happy every day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">💝</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Share Love
              </h3>
              <p className="text-gray-700">
                When you share love with those around you, you share a better
                world.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white text-2xl">🏗️</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Build Society
              </h3>
              <p className="text-gray-700">
                Building a solid, respectful and compassionate caring society
                for all of us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraisers in Extreme Need */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Fundraisers In Extreme Need
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900 text-white relative overflow-hidden h-64">
              <CardContent className="p-6 h-full flex flex-col justify-end">
                <div className="text-lg font-semibold mb-2">
                  Help Turkey and Syria Earthquake Relief Fund
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 text-white relative overflow-hidden h-64">
              <CardContent className="p-6 h-full flex flex-col justify-end">
                <div className="text-lg font-semibold mb-2">
                  Health sector in Nigeria
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-600 text-white relative overflow-hidden h-64">
              <CardContent className="p-6 h-full flex flex-col justify-end">
                <div className="text-lg font-semibold mb-2">
                  Flood in Manipur
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 text-white relative overflow-hidden h-64">
              <CardContent className="p-6 h-full flex flex-col justify-end">
                <div className="text-lg font-semibold mb-2">
                  Education in Iraq
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 text-white relative overflow-hidden h-64">
              <CardContent className="p-6 h-full flex flex-col justify-end">
                <div className="text-lg font-semibold mb-2">
                  Help poor children from Gaza to access treatment
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-600 text-white relative overflow-hidden h-64">
              <CardContent className="p-6 h-full flex flex-col justify-end">
                <div className="text-lg font-semibold mb-2">
                  Child Labour in World
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
          </div>

          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Join our community for donating and be a part of a positive change
            in the world. With over
          </p>

          <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
            120,859+
          </div>
          <p className="text-gray-600 mb-6">people already joining</p>

          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
            Join Us now. Join today.
          </Button>
        </div>
      </section>

      {/* Scrolling Banner */}
      <section className="bg-green-600 py-4 overflow-hidden">
        <div className="flex animate-scroll">
          <div className="flex items-center space-x-8 text-white text-lg font-semibold whitespace-nowrap">
            <span>let's help each other</span>
            <span>*</span>
            <span>let's help each other</span>
            <span>*</span>
            <span>let's help each other</span>
            <span>*</span>
            <span>let's help each other</span>
            <span>*</span>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet our team
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            The world's largest social fundraising platform, optimized for your
            charity is a more easy way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Courteney Henry</h3>
              <p className="text-gray-600">Founder of Gocingo</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Brooklyn Simmons</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Jerome Bell</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-4"></div>
              <h3 className="font-semibold text-gray-900">Dianne Williams</h3>
              <p className="text-gray-600">Marketing Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-600">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                Is there a free trial available?
              </AccordionTrigger>
              <AccordionContent>
                Gocingo is free, Gocingo Charity has free. to receive it in the
                form of registrants on your platform and it will get hold of it
                in a few words. Don't miss out on what it...
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What features are included in the free trial?
              </AccordionTrigger>
              <AccordionContent>
                All features are included in our free platform access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What features are included in the free trial?
              </AccordionTrigger>
              <AccordionContent>
                All features are included in our free platform access.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                Is there a limit to the duration of the free trial?
              </AccordionTrigger>
              <AccordionContent>
                There is no time limit on our free access.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
