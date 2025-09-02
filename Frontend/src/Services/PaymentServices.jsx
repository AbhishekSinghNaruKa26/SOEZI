import axios from "axios";




const handlePayment  = async(amount)=>{

    try {
        
        const {data} = await axios.post('http://localhost:8080/api/order',{
            amount 
        });
        console.log("Data : ", data);
        
        
        
        const options = {
            key:"rzp_test_R8Hg31978rMnia",
            orderId:data.order.id,
            currency:"INR",
            decription:"Test Transaction",
            name:"SOEZI.in",
            amount:data.order.amount,
            handler:async function (response) {
                console.log("Payment Successfull",response);
               
               await axios.post('http://localhost:8080/api/verify ',{
                razorpay_order_id:response.razorpay_order_id,
                razorpay_payment_id:response.razorpay_payment_id,
                razorpay_signature:response.razorpay_signature
               }) 
            },
            prefill:{
                name:"Abhishek Singh Naruka",
                email:"abhisheknaruka7773@gmail.com",
                contact:"7413940716"
            },
            theme:{
                color:"#3399cc"
            }

        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();    


    } catch (error) {
        console.error("Error :" , error )
    }
}
export default handlePayment ; 