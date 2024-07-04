import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: [],
})

export default nextConfig
