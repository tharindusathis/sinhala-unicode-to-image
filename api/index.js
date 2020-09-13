const svgTemplate = require("../core/svg");

module.exports = (req, res) => {
  const { text1, text2, height, width, font } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");

  let svg = svgTemplate['svg'];

  res.send(svg({ text1, text2, height, width, font }));
};
