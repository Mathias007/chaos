import express from "express";
import config from "./src/config/config";

import authController from "./src/controllers/auth";
import articlesController from "./src/controllers/articles";
import newsController from "./src/controllers/news";

import usersController from "./src/controllers/users";
import knightsController from "./src/controllers/knights";
import tzarControlles from "./src/controllers/tzar";

const { ROUTES } = config;
const { API, ARTICLES, NEWS, KNIGHTS, TZAR } = ROUTES;

const router = express.Router();

// auth API
router.post(`/${API}/login`, authController.loginUser);
router.post(`/${API}/register`, authController.createUser);
router.post(`/${API}/refresh`, authController.refreshTokenVerify);
router.get(
    `/${API}/users`,
    authController.accessTokenVerify,
    usersController.getUserList
);

// news API
router.get(`/${API}/${NEWS}/list`, newsController.getNewsList);
router.post(`/${API}/${NEWS}/single`, newsController.getNewsById);
router.post(`/${API}/${NEWS}/add`, newsController.createNews);
router.patch(`/${API}/${NEWS}/edit`, newsController.modifyNewsById);
router.delete(`/${API}/${NEWS}/delete`, newsController.deleteNewsById);

// articles API
router.get(`/${API}/${ARTICLES}/list`, articlesController.getArticlesList);
router.post(
    `/${API}/${ARTICLES}/single`,
    articlesController.getArticleByAllocationKey
);
router.post(`/${API}/${ARTICLES}/add`, articlesController.createArticle);
router.patch(`/${API}/${ARTICLES}/edit`, articlesController.modifyArticleById);
router.delete(
    `/${API}/${ARTICLES}/delete`,
    articlesController.deleteArticleById
);

// content API's
// Knights and Merchants
router.get(`/${API}/${KNIGHTS}/buildings`, knightsController.getBuildingsList);
router.get(`/${API}/${KNIGHTS}/units`, knightsController.getUnitsList);

// Tzar: The Burden of the Crown
router.get(`/${API}/${TZAR}/nations`, tzarControlles.getNationsList);
router.get(`/${API}/${TZAR}/units`, tzarControlles.getUnitsList);
router.get(`/${API}/${TZAR}/spells`, tzarControlles.getSpellsList);
router.get(`/${API}/${TZAR}/technologies`, tzarControlles.getTechnologiesList);

module.exports = router;
