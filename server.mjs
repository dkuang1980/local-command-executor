#!/usr/bin/env node

import http from 'node:http';

const port = Number(process.env.PORT || 3456);
const host = process.env.HOST || '127.0.0.1';

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ ok: true, service: 'local-command-executor' }));
});

server.listen(port, host, () => {
  console.log(`local-command