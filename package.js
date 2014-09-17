Package.describe({
  summary: "output precise time differences in Chinese, eg: 1 minute ago",
  version: "1.0.0",
  git: "https://github.com/apprentice1988/timedifference-en.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.addFiles('walawala:timedifference-en.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('walawala:timedifference-en');
  api.addFiles('walawala:timedifference-en-tests.js');
});
