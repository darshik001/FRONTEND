import axios from "axios";

export const imageCloud = async(file)=>{
    let uploadFIle = new FormData()
    uploadFIle.append("file",file)
    uploadFIle.append("upload_preset","myntr-clone")
    uploadFIle.append("cloud_name","dblxejpyp")
    console.log("Running")
    let res = await axios.post(`https://api.cloudinary.com/v1_1/dblxejpyp/image/upload`, uploadFIle);
console.log(res)
    return res.data.secure_url;


}