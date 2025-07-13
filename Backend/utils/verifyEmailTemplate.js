const VerifyEmailTemplate = ({Name,url})=>{
    return `
    <p>Dear ${Name}</p>,
    <p>Thank You for registering the SOEZI. </p>
    <a href=${url} style= "color:white; background:blue ; margin-top:10px"  >Verify Email </a>
    `
}
export default VerifyEmailTemplate;