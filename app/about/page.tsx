import LangToggle from '@/components/LangToggle';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16 min-h-screen">
      <section id="about">
        <h2 className="section-header">About</h2>
        <LangToggle />
      </section>
    </main>
  );
}
