
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5ff84a957b8440d4b8fb9571e7988eef',
  appName: 'pixel-perfect-android-ui',
  webDir: 'dist',
  server: {
    url: 'https://5ff84a95-7b84-40d4-b8fb-9571e7988eef.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      gradleArgs: ['-PcdvMinSdkVersion=23']
    }
  }
};

export default config;
