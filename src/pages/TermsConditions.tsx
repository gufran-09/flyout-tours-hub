import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <Layout>
      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing or using Flyout Tours website and services, you agree to be bound by these 
                Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Booking and Reservations</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Prices are quoted in AED unless otherwise specified</li>
                <li>A valid form of identification is required for all tours</li>
                <li>Bookings are confirmed only upon receipt of full payment</li>
                <li>Tour schedules may be subject to change due to weather or operational requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We accept major credit cards and online payment methods. Payment must be made in full at the time 
                of booking unless otherwise agreed. All prices include applicable taxes unless stated otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Provide accurate and complete information during booking</li>
                <li>Arrive at designated meeting points on time</li>
                <li>Follow safety instructions provided by tour guides</li>
                <li>Respect local customs, regulations, and other participants</li>
                <li>Maintain valid travel insurance for your trips</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Health and Safety</h2>
              <p className="text-foreground/80 leading-relaxed">
                Participants must disclose any medical conditions that may affect their ability to participate 
                in activities. We reserve the right to refuse participation if we believe it poses a safety risk. 
                Some activities have age, height, or health restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="text-foreground/80 leading-relaxed">
                All content on our website, including text, graphics, logos, and images, is the property of 
                Flyout Tours and protected by copyright laws. Unauthorized use or reproduction is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                Flyout Tours shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of our services. Our total liability shall not exceed the amount paid for 
                the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Force Majeure</h2>
              <p className="text-foreground/80 leading-relaxed">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond 
                our reasonable control, including natural disasters, war, strikes, government actions, or pandemics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of 
                the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the 
                courts of Dubai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-foreground/80">Email: legal@flyouttours.com</p>
                <p className="text-foreground/80">Phone: +971 50 123 4567</p>
                <p className="text-foreground/80">Address: Dubai, United Arab Emirates</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
