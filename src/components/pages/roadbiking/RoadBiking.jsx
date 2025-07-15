import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import CardHero from "../../partials/CardHero";
import CardRoute from "../../partials/CardRoute";
import CardGear from "../../partials/CardGear";
import CardTip from "../../partials/CardTip";

const RoadBiking = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-grow">
          <div>
            {/* Hero Section */}
            <CardHero
              bgColor={"bg-green-900"}
              src={
                "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              }
              alt={"Road biking hero"}
              title={"Road Biking"}
              description={"Speed, endurance, and the freedom of the open road"}
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
              {/* Featured Routes */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Featured Road Routes
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Route 1 */}
                  <CardRoute
                    src={
                      "https://images.unsplash.com/photo-1531045535792-b515d59c3d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Coastal Highway"}
                    title={"Coastal Highway"}
                    distance={"75 miles"}
                    difficulty={"Intermediate"}
                    elevation={"1,200 ft"}
                  />

                  {/* Route 2 */}
                  <CardRoute
                    src={
                      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Mountain Pass"}
                    title={"Mountain Pass"}
                    distance={"42 miles"}
                    difficulty={"Advanced"}
                    elevation={"5,800 ft"}
                  />

                  {/* Route 3 */}
                  <CardRoute
                    src={
                      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt={"Countryside Loop"}
                    title={"Countryside Loop"}
                    distance={"30 miles"}
                    difficulty={"Beginner"}
                    elevation={"500 ft"}
                  />
                </div>
              </div>

              {/* Gear Guide */}
              <div className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-20">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Essential Road Biking Gear
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Having the right equipment can make all the difference in
                      your riding experience and safety.
                    </p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition">
                      View Full Gear Guide
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Gear Item 1 */}
                      <CardGear gear={"Helmet"} />

                      {/* Gear Item 2 */}
                      <CardGear gear={"Bike Shoes"} />

                      {/* Gear Item 3 */}
                      <CardGear gear={"Jersey"} />

                      {/* Gear Item 4 */}
                      <CardGear gear={"Bottles"} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Tips */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Training Tips
                  </h2>
                  <div className="w-20 h-1 bg-green-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Tip 1 */}
                  <CardTip
                    num={"01"}
                    title={"Cadence Matters"}
                    description={
                      " Aim for a cadence of 80-100 RPM to improve efficiency and reduce fatigue. Use your gears to maintain this range on different terrain."
                    }
                  />

                  {/* Tip 2 */}
                  <CardTip
                    num={"02"}
                    title={"Fuel Properly"}
                    description={
                      "Consume 30-60g of carbohydrates per hour on rides longer than 90 minutes to maintain energy levels."
                    }
                  />

                  {/* Tip 3 */}
                  <CardTip
                    num={"03"}
                    title={"Group Riding"}
                    description={
                      "When drafting, maintain a consistent speed and avoid sudden braking. Communicate clearly with hand signals and verbal calls."
                    }
                  />

                  {/* Tip 4 */}
                  <CardTip
                    num={"04"}
                    title={"Hill Climbing"}
                    description={
                      "Shift before you need to, stay seated on moderate grades, and focus on steady breathing and pedal strokes."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RoadBiking;
