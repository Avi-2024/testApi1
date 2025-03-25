
export const homePage = (req,res) =>{
    let isLoggedIn = req.cookies.isLoggedIn;
    console.log(isLoggedIn);
    return res.render("../view/home",{isLoggedIn})
 }