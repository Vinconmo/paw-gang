import 'ts-node/register';
import { ExpoConfig } from 'expo/config';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const config: ExpoConfig = {
  name: 'paw-gang',
  slug: 'paw-gang',
  version: '1.0.0',
  extra: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    localIpAddress: process.env.LOCAL_IP_ADDRESS,
    serverPort: process.env.SERVER_PORT,
    eas: {
      projectId: 'cfffe19e-4978-4960-9ec5-d71d8f44a4ba',
    },
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
  owner: 'vincomo'
};

export default config;
