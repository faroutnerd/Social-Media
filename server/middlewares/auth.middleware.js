export const protect = async () => {
    try {

        const {userId} = await req.auth();
        
        if(!userId) {
            return res.status(401).json({success : false , message : "Not Authenticated"})
        }

        next();

    } catch (error) {
        res.status(500).json({success : false , message : error.message})
    }
}