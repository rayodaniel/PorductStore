

export default function Image({ src, alt, width, height, ...props })  {
  // Simulamos el componente Image devolviendo un img normal
  return (
    <img 
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
      data-testid="image-view"
    />
  );
};

export const testProps = {
  src: '/test-image.jpg',
  alt: 'Test Image',
  width: 500,
  height: 300,
};
