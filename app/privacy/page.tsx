// app/privacy/page.tsx

import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
    title: "Privacy Policy | HelloCloud",
    description: "Privacy Policy for HelloCloud (India).",
    alternates: { canonical: "/privacy" },
};

export default async function PrivacyPage() {
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
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
                    <p className="mt-2 text-sm text-[#C5C5C5]">Last updated: {lastUpdated}</p>
                </header>

                <section className="space-y-6 text-[#C5C5C5] leading-relaxed">
                    <p>
                        This Privacy Policy explains how HelloCloud (“we”, “us”, “our”) collects, uses, discloses, and
                        protects your information when you use our website and services in India. We are committed to
                        processing personal data in accordance with applicable Indian laws, including the Digital Personal
                        Data Protection Act, 2023 (“DPDP Act”), the Information Technology Act, 2000, and the Information
                        Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information)
                        Rules, 2011 (“IT Rules”), as applicable.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">1. What data we collect</h2>
                    <ul className="list-disc pl-6">
                        <li>Contact information: name, email, phone number, shipping/billing address.</li>
                        <li>Account and order details: username, order history, payment references (processed via third-party gateways).</li>
                        <li>Technical data: device, browser, IP address, approximate location, and identifiers.</li>
                        <li>Usage data: pages viewed, interactions, preferences, and in-site search.</li>
                        <li>Communications: emails, messages, feedback, and support queries.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">2. Legal basis and purposes</h2>
                    <p>We process personal data for the following purposes and legal bases under Indian law:</p>
                    <ul className="list-disc pl-6">
                        <li>Provide and fulfill services and orders (performance of contract/consent).</li>
                        <li>Enhance and personalize your experience, including product recommendations and UI optimization (consent/legitimate use consistent with DPDP Act).</li>
                        <li>Customer support, communications, and service notifications (consent/performance of contract).</li>
                        <li>Analytics, security, fraud prevention, and service improvement (legitimate use/consent where required).</li>
                        <li>Compliance with legal obligations, taxation, and audit requirements (legal obligation).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">3. Cookies and similar technologies</h2>
                    <p>
                        We use cookies and similar technologies to operate the site, remember your preferences, understand
                        usage, and improve products. Categories include:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Essential cookies: required for core functionality such as checkout and authentication.</li>
                        <li>Analytics cookies: help us measure and improve performance.</li>
                        <li>Advertising/marketing cookies: used to deliver relevant ads and limit repetition.</li>
                    </ul>
                    <p className="mt-2">
                        Where required, we obtain your consent for non-essential cookies. You may manage or disable cookies
                        through your browser settings. Disabling certain cookies may affect site functionality.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">4. Children’s data</h2>
                    <p>
                        Our services are intended for individuals 18 years and older. We do not knowingly collect personal
                        data from children. If you believe a child has provided data, please contact our Grievance Officer.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">5. Sharing and disclosures</h2>
                    <p>We may share data with:</p>
                    <ul className="list-disc pl-6">
                        <li>Service providers: payment gateways, logistics partners, analytics, customer support, and cloud hosting.</li>
                        <li>Affiliates and group companies: for internal operations consistent with this Policy.</li>
                        <li>Legal authorities: where required by law, regulation, court order, or to enforce our rights.</li>
                        <li>Business transfers: in connection with mergers, acquisitions, or restructuring.</li>
                    </ul>
                    <p className="mt-2">
                        We require service providers to implement reasonable security practices and process data only as
                        instructed by us.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">6. Cross-border data transfers</h2>
                    <p>
                        Your data may be processed outside India subject to applicable law. We take reasonable steps to
                        ensure comparable levels of data protection, including contractual safeguards with recipients.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">7. Data retention</h2>
                    <p>
                        We retain personal data for as long as necessary for the purposes described above, to comply with
                        legal obligations, resolve disputes, and enforce agreements. Retention periods vary by data type
                        and context (e.g., tax and accounting records may be retained for longer as mandated by law).
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">8. Your rights</h2>
                    <p>
                        Subject to applicable law, you may have rights to access, correct, update, and delete your
                        personal data; withdraw consent; and seek grievance redressal. To exercise these rights, contact
                        our Grievance Officer using the details below. We may need to verify your identity before
                        responding.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">9. Security measures</h2>
                    <p>
                        We implement reasonable security practices and procedures as required under the IT Act/IT Rules and
                        strive to protect your data against unauthorized access, alteration, disclosure, or destruction.
                        However, no method of transmission or storage is 100% secure.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">10. Third-party links</h2>
                    <p>
                        Our site may contain links to third-party sites or services. This Policy does not cover those
                        third parties. Please review their privacy policies before interacting with them.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">11. Updates to this Policy</h2>
                    <p>
                        We may update this Policy from time to time. The “Last updated” date reflects the latest changes.
                        Continued use of our services after an update constitutes acceptance of the revised Policy.
                    </p>

                    <h2 className="text-2xl font-semibold text-[#EEEEEE]">12. Contact and Grievance Officer</h2>
                    <p>
                        If you have questions or wish to raise a grievance under the DPDP Act or other applicable laws,
                        please contact:
                    </p>
                    <div className="mt-2 rounded-md border border-white/15 p-4 text-[#EEEEEE]">
                        <p className="font-medium">Grievance Officer – HelloCloud</p>
                        <p>Email: info@hellocloud.com</p>
                        <p>Phone: +91 99999 99999</p>
                        <p>Address: [Insert address, City, State, PIN, India]</p>
                    </div>
                </section>
            </main>
        </div>
    );
}