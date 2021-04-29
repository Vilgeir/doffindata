const algoliasearch = require("algoliasearch");
const client = algoliasearch("QG9J28HNQ9", "bdf4769c7a050792225f3a0613a4bec4 ");
const index = client.initIndex("tendre");

const data = require("./src/cpvmain.json");
//index.addObjects(data);

index
  .saveObjects(data, { autoGenerateObjectIDIfNotExist: true })
  .then(({ dataIDs }) => {
    console.log(dataIDs);
  });

//console.log(data);
