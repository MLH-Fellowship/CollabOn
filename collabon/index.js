const sqlite3 = require('sqlite3').verbose();

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  app.on(['issues.opened', 'issue_comment.created', 'pull_request.opened', 'push'], async context => {
    row = []
    if (context.name == 'issue_comment') {
      row = [context.payload.organization.login, 
            context.payload.comment.user.login,
            context.payload.comment.user.avatar_url,
            context.name, 
            context.payload.issue.title,
            context.payload.repository.full_name,
            context.payload.comment.created_at, 
            context.payload.comment.html_url];

    } else if (context.name == 'issues') {
      row = [context.payload.organization.login, 
            context.payload.issue.user.login,
            context.payload.issue.user.avatar_url,
            context.name,
            context.payload.issue.title,
            context.payload.repository.full_name,
            context.payload.issue.created_at,
            context.payload.issue.html_url];
 
    } else if (context.name == 'pull_request') {
      row = [context.payload.organization.login, 
            context.payload.pull_request.user.login,
            context.payload.pull_request.user.avatar_url,
            context.name,
            context.payload.pull_request.title,
            context.payload.repository.full_name,
            context.payload.pull_request.created_at,
            context.payload.pull_request.html_url];

    } else if (context.name == 'push') {
      row = [context.payload.organization.login,
            context.payload.sender.login,
            context.payload.sender.avatar_url,
            context.name,
            context.payload.head_commit.message,
            context.payload.repository.full_name,
            context.payload.head_commit.timestamp,
            context.payload.head_commit.url];
    }

    // database connection
    let db = new sqlite3.Database('./db/events.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
          console.error(err.message);
      }
    });

    db.serialize(function() {
      db.run(`CREATE TABLE IF NOT EXISTS user_data(
              organization text NOT NULL,
              username text,
              avatar text,
              action text,
              content text,
              repository text,
              createdAt Date,
              url VARCHAR(512)
              )`);
      query = `INSERT INTO user_data(organization, username, avatar, action, content, repository, createdAt, url) VALUES(?,?,?,?,?,?,?,?)`;
      db.run(query, row, function(err){
          if(err) {
              console.log(err);
          }else{
            // console.log('Inserted ', row);
          }
      });
      db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
      });
    });
  })


  // Application end points
  const router = app.route('/api')

  // Use any middleware
  router.use(require('express').static('public'))

  // Add a feed route
  router.get('/org/:org', (req, res) => {
    const org = req.params.org;
    const page = req.query.page | 1;
    events = [];
    let db = new sqlite3.Database('./db/events.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
          console.error(err.message);
      }
    });
    db.serialize(function() {
      let sql = `SELECT * from user_data where organization=? ORDER BY createdAt DESC`;
      db.all(sql, [org], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
            events.push(row)
        });
        // console.log(events);
        res.setHeader('Access-Control-Allow-Origin', '*');
        if(row.length > 150) {
          row.splice(150);
        }
        res.send(events)
      });
    });
  });

  // Route for each action
  router.get('/org/:org/:action', (req, res) => {
    action = req.params.action;
    org = req.params.org;

    events = [];
    let db = new sqlite3.Database('./db/events.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
          console.error(err.message);
      }
    });
    db.serialize(function() {
      let sql = `SELECT * from user_data where organization=? and action=?`;
      db.all(sql, [org, action], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach(row => {
            events.push(row)
        });
        // console.log(events);
        res.send(events)
      });
    });
  });

  // 404 error
  router.get('*', (req, res) => {
    res.sendStatus(404);
  });
}
