#!/usr/bin/env node

import http from 'node:http';

const port = Number(process.env.PORT || 3456);
const host = process.env.HOST || '127.0.0.1';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.method