'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LangToggle() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const bioEn = `"I'm a Chilean photographer whose practice is shaped by an interdisciplinary approach and a continuous search for new visual languages. I began my education at Fotodesign Chile, where I developed a foundation in photography. Driven by a desire to better understand human and educational processes, I later graduated as an educational psychologist. Throughout my journey, I have integrated these perspectives while deepening my engagement with art mediation, a field that expanded my interest in collaborative practices, critical thinking, and the relationship between image, context, and experience. Currently, I am returning to photography with a renewed perspective, studying in Porto, where I continue to expand my practice through research, experimentation, and editorial work. My work exists at the intersection of image as a tool for reflection and the creative process as a space for discovery."\n\n— Carolina Celedón`;

  const bioEs = `"Soy una fotógrafa chilena cuya práctica está moldeada por un enfoque interdisciplinario y una búsqueda continua de nuevos lenguajes visuales. Comencé mi educación en Fotodesign Chile, donde desarrollé una base en fotografía. Impulsada por el deseo de comprender mejor los procesos humanos y educativos, más tarde me gradué como psicóloga educacional. A lo largo de mi viaje, he integrado estas perspectivas mientras profundizaba mi compromiso con la mediación artística, un campo que expandió mi interés en las prácticas colaborativas, el pensamiento crítico y la relación entre imagen, contexto y experiencia. Actualmente, estoy regresando a la fotografía con una perspectiva renovada, estudiando en Oporto, donde continúo expandiendo mi práctica a través de la investigación, la experimentación y el trabajo editorial. Mi trabajo existe en la intersección de la imagen como herramienta de reflexión y el proceso creativo como espacio de descubrimiento."\n\n— Carolina Celedón`;

  return (
    <>
      <div className="lang-toggle">
        <button 
          className={`lang-btn hover-target ${lang === 'en' ? 'active' : ''}`} 
          onClick={() => setLang('en')}
        >
          EN
        </button>
        <button 
          className={`lang-btn hover-target ${lang === 'es' ? 'active' : ''}`} 
          onClick={() => setLang('es')}
        >
          ES
        </button>
      </div>

      <div className="bio-container relative min-h-[500px] md:min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 whitespace-pre-wrap text-[1.1rem] leading-[1.8] text-[var(--text-primary)]"
          >
            {lang === 'en' ? bioEn : bioEs}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
