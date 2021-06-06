const express = require('express')

const router = express.Router()

router.post('/',(req,res)=>{
    const {name} = req.body
    if(name)
    {
      return res.status(200).json(`welcome ${name}`)
    }
    else
    res.status(401).json({status : true,data :'Please provide credentials'})
})


module.exports = router