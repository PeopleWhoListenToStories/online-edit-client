import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: false, // process.env.ANALYZE === 'true', //当环境变量ANALYZE为true时开启
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    // additionalData: '@import "@/assets/styles/index.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', //图片资源的协议
        hostname: 'img.leixu.live', //图片资源的域名
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
