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
import HeroWithSlider from "../components/ui/HeorWithSlider";
import { Header } from "@radix-ui/react-accordion";
import HeaderSection from "../components/HeaderSection";
import EventsSection from "../components/ui/EventsSection";
import MarqueeScroll from "../components/ui/MarqueeScroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<HeaderSection/>
      {/* Hero Section */}
      <HeroWithSlider/>

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
            Fundraising on danapaani takes
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
      <EventsSection/>
     

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="container mx-auto text-center">
    {/* Icons or Image Placeholders */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-lg font-semibold text-gray-600">
        🍽️
      </div>
      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-lg font-semibold text-gray-600">
        🧒
      </div>
      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-lg font-semibold text-gray-600">
        🛍️
      </div>
      <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-lg font-semibold text-gray-600">
        💧
      </div>
    </div>

    {/* Text Content */}
    <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
      Become a part of our mission to bring food, clean water, and dignity to
      the underprivileged. Every small act of kindness counts.
    </p>

    <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
      120,859+
    </div>
    <p className="text-gray-600 mb-6">people have already joined hands with us</p>

    <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
      Join Us Today
    </Button>
  </div>
</section>


      {/* Scrolling Banner */}

      <MarqueeScroll/>
      
    

      {/* Meet Our Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Behind every meal served, child supported, and community uplifted—stands a passionate team dedicated to making a difference.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Team Member 1 */}
      <div className="text-center">
        <img
          src="https://img.freepik.com/premium-photo/smiling-indian-male-entrepreneur-office-space-ai-generated_843560-1554.jpg"
          alt="Team Member 1"
          className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover"
        />
        <h3 className="font-semibold text-gray-900">Rohit Sharma</h3>
        <p className="text-gray-600">Founder & Director</p>
      </div>

      {/* Team Member 2 */}
      <div className="text-center">
        <img
          src="https://img.freepik.com/premium-photo/businesswoman-office-young-indian-girl-head-shot-woman-portrait-ai-generative_955712-4844.jpg"
          alt="Team Member 2"
          className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover"
        />
        <h3 className="font-semibold text-gray-900">Sneha Patil</h3>
        <p className="text-gray-600">Operations Manager</p>
      </div>

      {/* Team Member 3 */}
      <div className="text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoNnFr3SDLg0DYYKEdgioAaruoMMdSh-mMRuaRBmZDTpzP0TusbKJjcgHPiODEJKlaeY&usqp=CAU"
          alt="Team Member 3"
          className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover"
        />
        <h3 className="font-semibold text-gray-900">Ankit Verma</h3>
        <p className="text-gray-600">Community Outreach Lead</p>
      </div>

      {/* Team Member 4 */}
      <div className="text-center">
        <img
          src="https://img.freepik.com/premium-photo/professional-woman_946538-56.jpg"
          alt="Team Member 4"
          className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover"
        />
        <h3 className="font-semibold text-gray-900">Pooja Desai</h3>
        <p className="text-gray-600">Volunteer Coordinator</p>
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
                danapaani is free, danapaani Charity has free. to receive it in the
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
              <div className="text-xl font-bold mb-4">danapaani NGO</div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">© 2025danapaani NGO</h4>
              <div className="space-y-2 text-sm">
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm leading-relaxed">
                Dana Pani is dedicated to fighting hunger and restoring dignity through every meal served. With compassion at our core, we believe that access to food is a basic human right — not a privilege. Join us in our mission to ensure that no one sleeps hungry.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
