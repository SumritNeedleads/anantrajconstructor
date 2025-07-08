import Layout from '@/components/Layout';

const gallerySections = [
  {
    title: 'Hand Core Cutting Service',
    images: [
      '/images/11.jpg',
      '/images/12.jpg',
      '/images/13.jpg',
      '/images/15.jpg',
    ],
  },
  {
    title: 'RCC Slab Hand Saw Cutting',
    images: [
      '/images/16.jpg',
      '/images/17.jpg',
      '/images/18.jpg',
      '/images/19.jpg',
    ],
  },
  {
    title: 'Wall Saw Cutting',
    images: [
      '/images/wall1.jpg',
      '/images/wall2.jpg',
      '/images/wall3.jpg',
      '/images/wall4.jpg',
    ],
  },
  {
    title: 'Rebaring Service',
    images: [
      '/images/r1.jpg',
      '/images/r2.jpg',
      '/images/r3.jpg',
      '/images/r4.jpg',
    ],
  },
  {
    title: 'Brick Wall Core Cutting Service',
    images: [
      '/images/b1.jpg',
      '/images/b2.jpg',
      '/images/b3.jpg',
      '/images/b4.jpg',
    ],
  },
  
  {
    title: 'RCC Slab Core Cutting Service',
    images: [
      '/images/rc1.jpg',
      '/images/rc2.jpg',
      '/images/rc3.jpg',
      '/images/rc4.jpg',
    ],
  },
  {
    title: 'Beam Core Cutting Service',
    images: [
      '/images/be1.jpg',
      '/images/be2.jpg',
      '/images/be3.jpg',
      '/images/be4.jpg',
    ],
  },
  {
    title: 'Fastener Fixing (Chemical & Mechanical)',
    images: [
      '/images/f1.jpg',
      '/images/f2.jpg',
      '/images/f3.jpg',
      '/images/f4.jpg',
    ],
  },
  {
    title: 'Wire Saw Cutting',
    images: [
      '/images/w1.jpg',
      '/images/w2.jpg',
      '/images/w3.jpg',
      '/images/w4.jpg',
    ],
  },
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
            Pictures that speak louder than words – explore our craftsmanship and precision across concrete cutting services.
          </p>
        </div>

        {gallerySections.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">{section.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${section.title} ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
