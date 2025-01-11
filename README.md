# Node.js Server Crash Under Load

This repository demonstrates a bug where a Node.js server crashes silently without any error messages when handling a large number of concurrent requests.  The server is a simple HTTP server that responds with 'Hello, World!'.  The problem is exacerbated by the lack of error handling and proper resource management.

## Bug Description

A simple Node.js HTTP server crashes under heavy load without providing any useful error messages.  This makes debugging and identifying the root cause incredibly difficult.

## Reproduction Steps

1. Clone this repository.
2. Run `node server.js`.
3. Use a load testing tool (like k6 or Apache Bench) to send a large number of requests to `http://localhost:8080`.
4. Observe the server crashing without any informative error logs.

## Solution

The solution involves adding proper error handling and resource management to prevent crashes and provide insights into errors.