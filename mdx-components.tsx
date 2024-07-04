import NextImage, { type ImageProps } from "next/image"

export function useMDXComponents(originalComponents) {
  return {
    ...originalComponents,
    Image: (props: ImageProps) => <NextImage {...props} />,
  }
}
