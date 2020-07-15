const express = require("express");
const { Octokit } = require("@octokit/rest");
const redis = require('redis');
const app = express();
const port = 4000;

const redis_client = redis.createClient({host: 'redis'});

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


app.get("/org/:org/info", (req, res) => {
  const org = req.params.org;
  redis_client.get(org + '-info', (err, data) => {
    if(err) console.log(err);

    if(data==null) {
      octokit.orgs.get({ org: org }).then(({ data }) => {
        redis_client.set(String(org + '-info'), JSON.stringify(data), (err, redis_res) => {
          if(err) console.log(err);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.send(data);
        });
      });
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(JSON.parse(data));
    }
  });
});

app.get("/org/:org/members", (req, res) => {
  const org = req.params.org;
  redis_client.get(org + '-members', (err, data) => {
    if(err) console.log(err);

    if(data==null) {
      octokit.orgs
        .listMembers({ org: org, per_page: 100, page: 1 })
        .then(({ data }) => {
          redis_client.set(String(org + '-members'), JSON.stringify(data), (err, redis_res) => {
            if(err) console.log(err);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(data);
          });
      });
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(JSON.parse(data));
    }
  });
});

app.listen(port, () =>
  console.log(`Helper-service listening at ${port}`)
);
