import { Layout } from "@/components/layout/Layout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "How do I book a tour?",
        answer: "You can book a tour directly through our website by selecting your desired experience, choosing the date and number of people, and proceeding to checkout. Alternatively, you can contact our support team for assistance."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards, including Visa, MasterCard, and American Express. We also support Apple Pay and Google Pay for your convenience."
    },
    {
        question: "Can I cancel my booking?",
        answer: "Yes, cancellations are possible depending on the specific tour's cancellation policy. Generally, full refunds are available for cancellations made 24-48 hours in advance. Please check the specific terms for your booking."
    },
    {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer special rates for large groups and corporate bookings. Please contact our sales team with your requirements for a customized quote."
    },
    {
        question: "Is hotel pickup included?",
        answer: "Many of our tours include hotel pickup and drop-off. This information is clearly listed in the 'Inclusions' section of each tour page. If included, please provide your hotel details during booking."
    },
    {
        question: "What happens if the weather is bad?",
        answer: "For outdoor activities affected by weather, we will either reschedule your tour or provide a full refund. We monitor weather conditions closely to ensure your safety and enjoyment."
    },
];

export default function FAQ() {
    return (
        <Layout>
            <div className="bg-primary/5 py-12 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Frequently Asked Questions</h1>
                <p className="mt-4 text-xl text-muted-foreground">Find answers to common questions about our services.</p>
            </div>

            <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Layout>
    );
}
