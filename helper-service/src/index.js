const express = require("express");
const { Octokit } = require("@octokit/rest");
const redis = require('redis');
const app = express();
const port = 4000;
const REDIS_PORT = 6379;

const octokit = new Octokit({
  userAgent: "myApp v1.2.3",
  baseUrl: "https://api.github.com",
  accept: "application/vnd.github.v3+json",

  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },

  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0
  }
});

const redis_client = redis.createClient(REDIS_PORT);

app.get("/org/:org/info", (req, res) => {
  const org = req.params.org;
  octokit.orgs.get({ org: org }).then(({ data }) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  });
});

app.get("/org/:org/members", (req, res) => {
  const org = req.params.org;
  octokit.orgs
    .listMembers({ org: org, per_page: 100, page: 1 })
    .then(({ data }) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(data);
    });
});

app.listen(port, () =>
  console.log(`Helper-service listening at ${port}`)
);
