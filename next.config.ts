import type { NextConfig } from 'next';

const basePath = '/Darenokoe';
const nextConfig: NextConfig = { output: 'export', trailingSlash: true, basePath, assetPrefix: `${basePath}/` };
export default nextConfig;
