async function Auth(req, res,next) {

    try {
        const token = req.headers.authorization.split(" ")[1];
        res.json(token);
        
    } catch (error) {
        res.status(401).json({ error: "Authentication failed" });
    }

}

module.exports = Auth;