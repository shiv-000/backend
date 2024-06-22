const Razorpay = require('razorpay');

apiKey="rzp_test_eX6k9w6ZHx2ne3"
apiSecret="NG1QeXnjdiZgthHXtVLS09SC"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;