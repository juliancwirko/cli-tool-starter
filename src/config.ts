import { cosmiconfigSync } from 'cosmiconfig';
import { cwd } from 'process';

// You can change the name of the config file here
const explorerSync = cosmiconfigSync('cliconfig');
const customConfig = explorerSync.search(cwd());

// Example of configuration item
export const exampleQuestion =
  customConfig?.config?.exampleQuestion || "What's your name?";

export const exampleAnswer = customConfig?.config?.exampleAnswer || 'Hi';
