import validateToken from '../utils/validateToken';


export default async function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(' ')[1];
        const isValidToken = await validateToken(bearerToken) ;
        if(isValidToken.status==200)
        {req.token = bearerToken;
            req.user = isValidToken.user;
            next();
        }
        else
        {
            res.sendStatus(400);
        }
        
    }else{
        res.sendStatus(403);
    }
}