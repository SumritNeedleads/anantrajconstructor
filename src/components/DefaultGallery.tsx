import Layout from '@/components/Layout';

const gallerySections = [
  { title: 'Hand Core Cutting Service' },
  { title: 'RCC Slab Hand Saw Cutting' },
  { title: 'Wall Saw Cutting' },
  { title: 'Rebaring Service' },
  { title: 'Brick Wall Core Cutting Service' },
  { title: 'RCC Wall Core Cutting' },
  { title: 'RCC Slab Core Cutting Service' },
  { title: 'Beam Core Cutting Service' },
  { title: 'Fastener Fixing (Chemical & Mechanical)' },
  { title: 'Wire Saw Cutting' },
];

const imagePlaceholders = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
];

export default function GalleryPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pictures that speak louder than words – explore our precision, performance, and professionalism.
          </p>
        </div>

        {gallerySections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {imagePlaceholders.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${section.title} ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
