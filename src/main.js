const result = id3(datasetExample, attributeNames)
console.log(result)

let nodes = []
let edges = []

function buildGraphFromObject(tree, previusId) {
  for (const key in tree) {
    let id_node = 'id' + key
    nodes.push({ id: id_node, label: key })
    if (previusId !== undefined) {
      edges.push({ from: previusId, to: id_node })
    }
    if (typeof tree[key] !== 'string') {
      buildGraphFromObject(tree[key], id_node)
    } else {
      id_node = 'id' + tree[key] + key
      nodes.push({ id: id_node, label: tree[key] })
      edges.push({ from: 'id' + key, to: id_node })
    }
  }
}

buildGraphFromObject(result)
console.log(nodes,edges)

var container = document.getElementById('graph');

var data = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
};
var options = {
  layout: {
    hierarchical: {
      sortMethod: 'directed'
    }
  }
};

var network = new vis.Network(container, data, options);
