import { toBase64 } from "@/utils/format";
import Image, { ImageProps } from "next/image";

const shimmer = (w: number | `${number}`, h: number | `${number}`) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#f3f3f3" offset="20%" />
        <stop stop-color="#e9e9e9" offset="50%" />
        <stop stop-color="#f3f3f3" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#f3f3f3" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const NextImg: React.FC<ImageProps> = (props) => {
  const {
    blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(props.width ?? 200, props.height ?? 200))}`,
    placeholder = "blur",
    alt = "ZGDS image",
    ...rest
  } = props;
  return <Image placeholder={placeholder} blurDataURL={blurDataURL} alt={alt} {...rest} />;
};

export default NextImg;
