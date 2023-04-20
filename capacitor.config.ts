import { CapacitorConfig } from "@capacitor/cli";
import { myIpAddr } from "./ignorable";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "capacitor-test",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: `http://${myIpAddr}:3000`,
    cleartext: true,
  },
};

export default config;
