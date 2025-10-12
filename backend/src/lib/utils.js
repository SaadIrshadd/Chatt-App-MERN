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
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // only true in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // crucial for cross-domain cookies
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return token;
}

export const clearToken = (res) => {
    res.cookie("jwt", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    expires: new Date(0),
  });
};
