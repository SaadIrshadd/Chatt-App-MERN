import jwt from "jsonwebtoken" 

export const generateToken = (userId, res) =>{

    //generating a token
    const token =  jwt.sign(
        {userId}, 
        process.env.JWT_SECRET, 
        { expiresIn: "7d"}
    )

    //sending token as cookie
    res.cookie("jwt", token, { 
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true,
        sameSite: "none",
        secure: true,
        domain: ".vercel.app"
    });

    return token;
}

export const clearToken = (res) => {
    res.cookie("jwt", "", {
        maxAge: 0, // expire immediately
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // true in prod
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        domain: ".vercel.app"
    });
};
