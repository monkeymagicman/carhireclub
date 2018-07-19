module.exports = {
  apps: [{
    name: 'server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-130-200-235.eu-west-2.compute.amazonaws.com',
      key: '~/.ssh/carhireclubadmin.pem',
      ref: 'origin/master',
      repo: 'git@github.com:monkeymagicman/carhireclub.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

