/**
 *
 * @module Result.routes handles the routing for getting/setting data related to student results
 * @requires ../controllers/Result.controllers
 * @requires express
 */
module.exports = (app) => {
  const result_fns = require("../controllers/Result.controllers.js");

  const router = require("express").Router();

  router.get("/", result_fns.getAll);
  router.put("/", result_fns.addOrUpdate);
  router.get(
    "/:studentId&:minigameId&:difficulty&:level",
    result_fns.getOneResult,
  );
  router.get("/student/:studentId", result_fns.studentResults);
  router.get("/teacher/:teacherId", result_fns.teacherResults);

  app.use("/api/results", router);
};
