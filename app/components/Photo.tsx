import { Reveal } from "./Reveal";

type Props = {
  src?: string | undefined;
  alt: string;
  ratio?: string | undefined; // например "3 / 4"; без ratio — естественная высота
  className?: string;
  delay?: number;
  priority?: boolean;
  initial?: string | undefined; // буква для монограммы, если фото нет
};

// Фото с шторкой при появлении. Без фото — тёплая монограмма.
export function Photo({ src, alt, ratio, className = "", delay = 0, initial }: Props) {
  const style = ratio ? { aspectRatio: ratio } : undefined;
  return (
    <Reveal variant="clip" delay={delay} className={`photo ${className}`.trim()}>
      <div className={`photo-frame${src ? "" : " photo-empty"}`} style={style}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        ) : (
          <span aria-hidden="true">{initial}</span>
        )}
      </div>
    </Reveal>
  );
}
