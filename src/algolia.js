const algoliasearch = require("algoliasearch");
const client = algoliasearch("QG9J28HNQ9", "bdf4769c7a050792225f3a0613a4bec4 ");
const index = client.initIndex("tendre");

const data = require("./cpvmain.json");
index.addObjects(data);
