const rateLimit = require("express-rate-limit")

const limiter = rateLimit ({
  windowMs: 30 * 1000, // 6 second
  // windowMs: 6 * 15 * 1000, // 15 mins
  max: 5,// limit each IP to 5 requests per windows
  standardHeaders: true,
  legacyHeaders: false
})

module.exports = limiter