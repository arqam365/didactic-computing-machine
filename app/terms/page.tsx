
import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Terms & Conditions | HelloCloud",
    description: "Terms and Conditions for HelloCloud (India).",
    alternates: { canonical: "/terms" },
};

export default async function TermsPage() {
    const lastUpdated = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-[#EEEEEE]">
            <Navbar />
            <main className="px-6 md:px-16 py-12 max-w-5xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms & Conditions</h1>
                    <p className="mt-2 text-sm text-[#C5C5C5]">Last updated: {lastUpdated}</p>
                </header>

                <section className="space-y-6 text-[#C5C5C5] leading-relaxed">
                    <p>
                        These Terms & Conditions (“Terms”) govern your access to and use of HelloCloud’s website, products,
                        and services in India. By accessing or using our services, you agree to these Terms and our Privacy
                        Policy. If you do not agree, please do not use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">1. Eligibility and accounts</h2>
                    <ul className="list-disc pl-6">
                        <li>You are responsible for maintaining the confidentiality of your account and credentials.</li>
                        <li>You agree to provide accurate and complete information and to update it as needed.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">2. Product information and pricing</h2>
                    <ul className="list-disc pl-6">
                        <li>We strive to display accurate product details, ingredients, and prices; errors may occur.</li>
                        <li>Prices are in INR and inclusive/exclusive of taxes as indicated at checkout; applicable GST may be added.</li>
                        <li>We may change prices, offers, and availability without prior notice.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">3. Orders and acceptance</h2>
                    <ul className="list-disc pl-6">
                        <li>Your order is an offer to purchase. We may accept or reject an order at our discretion.</li>
                        <li>Order acceptance occurs when we dispatch the product(s) and send a confirmation.</li>
                        <li>We may cancel orders due to limited stock, pricing/description errors, payment issues, or regulatory reasons.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">4. Payments</h2>
                    <ul className="list-disc pl-6">
                        <li>Payments are processed via authorized payment gateways. We do not store full card details.</li>
                        <li>By providing payment information, you represent you are authorized to use the chosen method.</li>
                        <li>In case of payment failure or chargeback, we may suspend or cancel the order.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">5. Shipping, delivery, and risk of loss</h2>
                    <ul className="list-disc pl-6">
                        <li>Estimated delivery timelines are indicative and may vary due to courier or location constraints.</li>
                        <li>Risk of loss passes to you upon delivery at the shipping address provided.</li>
                        <li>Please inspect items upon delivery and report issues promptly.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">6. Returns, replacements, and refunds</h2>
                    <ul className="list-disc pl-6">
                        <li>For hygiene and safety, opened or used personal-care items may be ineligible for return unless defective or damaged on arrival.</li>
                        <li>Eligible returns typically require the item to be unused, unopened, and in original packaging within the specified return window.</li>
                        <li>Refunds are processed to the original payment method subject to inspection and policy compliance.</li>
                        <li>Please refer to our detailed Returns/Refunds Policy (if any) published on the site for exact steps and timelines.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">7. Product use and medical disclaimer</h2>
                    <ul className="list-disc pl-6">
                        <li>Results vary by individual. Patch test is recommended prior to full use.</li>
                        <li>Information provided is for general purposes and not a substitute for medical advice.</li>
                        <li>Discontinue use and consult a healthcare professional if irritation occurs.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">8. Intellectual property</h2>
                    <ul className="list-disc pl-6">
                        <li>All content, trademarks, logos, and designs on the site are owned by or licensed to HelloCloud.</li>
                        <li>You may not copy, modify, distribute, or create derivative works without prior written consent.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">9. User conduct and reviews</h2>
                    <ul className="list-disc pl-6">
                        <li>Do not submit unlawful, defamatory, obscene, infringing, or misleading content.</li>
                        <li>We may moderate, remove, or refuse content that violates these Terms or applicable laws.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">10. Limitation of liability</h2>
                    <p>
                        To the maximum extent permitted by law, HelloCloud shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages, loss of profits, data, or goodwill. Our aggregate
                        liability for claims relating to a purchase is limited to the amount paid for the product(s) at issue.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">11. Warranties</h2>
                    <p>
                        Except as expressly stated, products and services are provided on an “as is” and “as available”
                        basis without warranties of any kind, express or implied, including merchantability, fitness for a
                        particular purpose, or non-infringement, to the extent permitted by Indian law.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">12. Force majeure</h2>
                    <p>
                        We are not responsible for delays or failures due to events beyond our reasonable control, including
                        natural disasters, epidemics, strikes, governmental actions, or network failures.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">13. Governing law and dispute resolution</h2>
                    <p>
                        These Terms are governed by the laws of India, including the Consumer Protection Act, 2019, and the
                        Sale of Goods Act, 1930, as applicable. Subject to applicable law, courts at Bengaluru, Karnataka
                        shall have exclusive jurisdiction.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">14. Changes to Terms</h2>
                    <p>
                        We may update these Terms periodically. Continued use of our services after updates constitutes
                        acceptance of the revised Terms.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">15. Contact</h2>
                    <div className="mt-2 rounded-md border border-white/15 p-4 text-[#EEEEEE]">
                        <p className="font-medium">HelloCloud – Support</p>
                        <p>Email: info@hellocloud.com</p>
                        <p>Phone: +91 99999 99999</p>
                        <p>Address: [Insert address, City, State, PIN, India]</p>
                    </div>
                </section>
            </main>
        </div>
    );
}