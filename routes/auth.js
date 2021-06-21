const router = require("express").Router();
const User = require("../models/user");
const Resource = require("../models/resource");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireLogin } = require("../middleware/auth");

// Register user
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name);
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    console.log(password)
    const hashed_password = await bcrypt.hash(password, 10);
    console.log(hashed_password)
    user = new User({
      name,
      email,
      password: hashed_password,
    });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

// Get logged in user
router.get("/:id",requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password -__v");
    res.json(user);
  } catch (error) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (error) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});



//Add resource
router.post('/addresource',async(req,res)=>{
  const { URL,category,subcategory,topic,description,level,cost,type } = req.body;
  console.log(category)
  try{
  let resource = new Resource({
      URL,
      category,
      subcategory,
      topic,
      description,
      cost,
      type,
      level,
  })
  await resource.save();
  return res.status(201).json({ message: "Resource created successfully" });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});
//get all resources


module.exports = router;
