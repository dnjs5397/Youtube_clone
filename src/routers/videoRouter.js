import express from "express";
import { watch, edit, upload, deleteVideo, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get('/upload', upload);
videoRouter.get('/:id(\\d+)', watch);
videoRouter.route('/:id(\\d+)/edit').get(edit).post(postEdit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);

export default videoRouter;