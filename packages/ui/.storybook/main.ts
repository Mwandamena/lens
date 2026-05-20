import type { StorybookConfig } from "@storybook/react-vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { createRequire } from "module";
import { dirname } from "path";

const require = createRequire(import.meta.url);

function getAbsolutePath(value: string) {
  return dirname(require.resolve(`${value}/package.json`));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: getAbsolutePath("@storybook/react-vite"),

  async viteFinal(config) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(vanillaExtractPlugin());
    return config;
  },
};

export default config;
