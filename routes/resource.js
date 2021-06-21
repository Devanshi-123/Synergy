const router = require("express").Router();
const Resource = require("../models/resource");
const mongoose = require('mongoose');

//Get all the resources
router.get("/", async (req, res) => {
    const responses = await Resource.find();
    res.json(responses);
    console.log(res);
  });
 /* router.get("/sources", async (req, res) => {
    try {
      const study = await Resource.find({});
      res.json(study);
    } catch (error) {
      // console.log(err);
      return res.status(400).json({ error: err.message });
    }
  });*/
//Add resource
/*router.post('/new',async(req,res)=>{
    console.log('Hello new resource')
    const resource = new Resource({
        _id: new mongoose.Types.ObjectId(),
        URL:req.body.URL,
        category:req.body.category,
        subcategory:req.body.subcategory,
        topic:req.body.topic,
        description:req.body.description,
        cost:req.body.cost,
        type:req.body.type,
        level:req.body.level,
    })
    resource.save().then(()=>{
        console.log('Resource saved')
        console.log(resource)
    })
    res.redirect('/')
})*/


module.exports = router