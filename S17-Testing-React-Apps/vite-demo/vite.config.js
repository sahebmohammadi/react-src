import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    includeSource: ["./**/*.{js,ts}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
