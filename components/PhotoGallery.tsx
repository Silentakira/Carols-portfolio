'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageLightbox from './ImageLightbox';
import MagneticButton from './MagneticButton';

interface Photo {
  id: string;
  src: string;
  alt: string;
  gradient?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title: string;
  gridType?: '3x3' | '3x2' | '4x2';
}

export default function PhotoGallery({ photos, title, gridType = '3x3' }: PhotoGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // For now, use gradients as placeholders. When real images are added, they can be used.
  const gradients = [
    'linear-gradient(145deg, #fce4ec, #f8bbd0)',
    'linear-gradient(145deg, #f06292, #d81b60)',
    'linear-gradient(145deg, #f8bbd0, #e91e63)',
    'linear-gradient(145deg, #f48fb1, #ec407a)',
    'linear-gradient(145deg, #fce4ec, #f06292)',
    'linear-gradient(145deg, #f8bbd0, #ffb6c1)',
    'linear-gradient(145deg, #f48fb1, #d81b60)',
    'linear-gradient(145deg, #fce4ec, #f8bbd0)',
    'linear-gradient(145deg, #f06292, #f48fb1)',
  ];

  const gridClass = `series-grid series-grid-${gridType}`;

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        className={gridClass}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] as const }}
      >
        {photos.map((photo, index) => {
          const bgStyle = photo.src ? { backgroundImage: `url(${photo.src})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: photo.gradient || gradients[index % gradients.length] };

          return (
            <MagneticButton key={photo.id} strength={15}>
              <motion.div
                className="gallery-photo hover-target"
                style={bgStyle}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>
          );
        })}
      </motion.div>

      <ImageLightbox
        images={photos.map(p => p.src || p.gradient || gradients[0])}
        initialIndex={selectedPhotoIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}
