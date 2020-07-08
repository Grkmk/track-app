import dotenv from 'dotenv';
dotenv.config();

export default {
  name: 'client',
  slug: 'client',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: { forwardURL: process.env.SERVER_URL }
};
