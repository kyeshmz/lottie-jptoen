const replace = require("replace-in-file");
const options = {
  files: "./data.json",
  from: [
    /トランスフォーム/g,
    /パス 1/g,
    /線 1/g,
    /塗り 1/g,
    /パスのトリミング 1/g,
    /グループ 1/g,
  ],
  to: ["Transform", "Path 1", "Stroke 1", "Fill", "Trim Paths 1", "Group 1"],
};

replace(options)
  .then((results) => {
    console.log("Replacement results:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
