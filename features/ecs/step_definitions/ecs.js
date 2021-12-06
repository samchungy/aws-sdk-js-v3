const { Before } = require("cucumber");

Before({ tags: "@ecs" }, function (scenario, callback) {
  const { ECS } = require("../../../clients/client-ecs");
  this.service = new ECS({});
  callback();
});
