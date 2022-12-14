const {Router} = require('express')
const router = Router()

require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio')
const client = new twilio(accountSid,authToken);

router.route('/')
.post(async(req,res)=>{

    const { messages_body } = req.query

    console.log(messages_body)
 
    client.messages 
    .create({ 
        body: `${messages_body}`, 
        from: 'whatsapp:+14155238886',       
        to: 'whatsapp:+5491136887781' 
      }) 
     .then(message => console.log(message.sid)) 
     .done();
})

module.exports = router
