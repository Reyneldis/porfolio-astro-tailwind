import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import service from "astro/assets/services/squoosh";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});