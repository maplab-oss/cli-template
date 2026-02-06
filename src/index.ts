#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("mycli")
  .description("A minimal TypeScript CLI")
  .version("0.0.1");

program
  .command("hello")
  .description("Say hello")
  .argument("[name]", "name to greet", "world")
  .action((name: string) => {
    console.log(`Hello, ${name}!`);
  });

program.parse();
