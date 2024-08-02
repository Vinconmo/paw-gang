import 'ts-node/register'; // Add this to import TypeScript files
import { ExpoConfig } from 'expo/config';
import 'dotenv/config';

const config: ExpoConfig = {
  name: 'paw-gang',
  slug: 'paw-gang',
  version: '1.0.0',
  extra: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  },
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/logo.jpg',
    resizeMode: 'contain',
    backgroundColor: '#cfcec9',
  },
  ios: {
    supportsTablet: true,
    // simulator: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/icon.png',
  },
};

export default config;
