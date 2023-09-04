import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.kufa.poc',
  appName: 'ios',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
