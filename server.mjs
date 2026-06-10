#!/usr/bin/env node

import http from 'node:http';

const PORT = Number.parseInt(process.env.PORT || '3456', 10);
const HOST = process.env.HOST || '127.0.0.1';
const TOKEN = process.env.EXECUTOR_TOKEN || '';

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload, null, 2));
}

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function is