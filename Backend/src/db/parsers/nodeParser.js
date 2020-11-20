const nodeFinder = require("../findNodes.js");

async function parseNode(spaceId, next) {
  nodeFinder.getNodesFromSpace(spaceId, async spaceFound => {
    var ret = {
      nodes: [],
      links: []
    };
    spaceFound.forEach(async element => {
      ret.nodes.push({
        id: element._id
      });
      element.links.forEach(async e => {
        ret.links.push({
          source: element.id,
          target: e
        });
        if (
          e === element.links[element.links.length - 1] &&
          element._id === spaceFound[spaceFound.length - 1]._id
        )
          next(ret);
      });
    });
  });
}
