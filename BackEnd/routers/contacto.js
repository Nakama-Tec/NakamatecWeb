import express from "express";
import contactoController from "../controllers/contacto.js";
const { createContacts } = contactoController;

const router = express.Router()


router.post("/contactame/create/",createContacts)

export default router