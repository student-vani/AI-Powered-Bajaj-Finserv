const { fibonacci, isPrime, hcfArray, lcmArray } = require("../utils/math.utils");
const askGemini = require("../utils/ai.utils");

const EMAIL = "vani1313.be23@chitkara.edu.in";

exports.handleBFHL = async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({ is_success: false });
    }

    const key = keys[0];
    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacci(req.body[key]);
        break;

      case "prime":
        data = req.body[key].filter(isPrime);
        break;

      case "lcm":
        data = lcmArray(req.body[key]);
        break;

      case "hcf":
        data = hcfArray(req.body[key]);
        break;

      case "AI":
        try {
          // ✅ FIX IS HERE
          data = await askGemini(req.body[key]);
        } catch (err) {
          console.error("Gemini failed:", err.message);
          data = "Unavailable"; // fallback (allowed)
        }
        break;

      default:
        return res.status(400).json({ is_success: false });
    }

    return res.json({
      is_success: true,
      official_email: EMAIL,
      data
    });

  } catch (err) {
    console.error("Controller error:", err.message);
    return res.status(500).json({ is_success: false });
  }
};

exports.healthCheck = (req, res) => {
  res.json({
    is_success: true,
    official_email: EMAIL
  });
};
