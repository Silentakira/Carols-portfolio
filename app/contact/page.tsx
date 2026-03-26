import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <section id="contact">
        <h2 className="section-header">Get in touch</h2>
        <ContactForm />
      </section>
    </main>
  );
}
