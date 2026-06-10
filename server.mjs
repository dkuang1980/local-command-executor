#!/usr/bin/env node

import http from 'node:http';
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';

const PORT = Number.parseInt(process.env.PORT || '3456', 10);
const HOST = process.env.HOST || '127.0.0.1';
const TOKEN = process.env.EXECUTOR_TOKEN || '';
const ALLOWLIST_FILE = process.env.ALLOWLIST_FILE || './commands.json';
const TIMEOUT_MS = Number.parseInt(process.env.COMMAND_TIMEOUT_MS || '300000', 10);

function loadCommands() {
  try {
    const parsed = JSON.parse(readFileSync(ALLOW