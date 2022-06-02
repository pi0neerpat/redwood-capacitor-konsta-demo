import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.redwoodjsmobiledemo.app',
  appName: 'RedwoodJS Capacitor Demo',
  webDir: 'dist',
  npmClient: 'yarn',
  bundledWebRuntime: false,
  // Enable for hot-rebuilds. The PWA should be served at http://localhost:8910
  server: {
    // hostname: '10.0.2.2:8910',
    // androidScheme: 'http',
    // url: 'http://10.0.2.2:8910',
    cleartext: true,
  },
}

export default config
