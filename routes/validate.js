import express from 'express';
import verifyToken from '../middleware/verifyToken';

const router = express.Router();

router.post('/validateToken',verifyToken ,(req, res) => {
    res.send({
        status:200,
        message:"Token is valid",
    });
});

export default router;