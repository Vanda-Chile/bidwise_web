import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      new URL(
        'https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png'
      ),
    ],
  },
};

export default withFlowbiteReact(nextConfig);
