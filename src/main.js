const result = id3(datasetExample, attributeNames)
console.log(result)

function traverse(o) {
  const stack = [o]
  let data = {
    nodes: [],
    edges: [],
    actualId: 0
  }

  while (stack.length) {
    const obj = stack.shift()

    Object.keys(obj).forEach((key) => {

      if (key !== 'child' && key !== 'parente') {
        data.nodes.push({ id: key, label: key })
        data.edges.push({ from: key.parent, to: key })
        console.log(key, obj[key].parente)
        if (!_.isObject(obj[key].child) && obj[key].child !== undefined) {
          data.edges.push({ from: key, to: data.actualId })
          data.nodes.push({ id: data.actualId++, label: obj[key].child })
          console.log(obj[key].child)
        }
      }



      if (obj[key] instanceof Object) {
        stack.unshift(obj[key])
        return
      }
    })
  }
  return data
}

let rawData = traverse(result)
console.log(rawData.nodes, rawData.edges)

// let nodes = []
// let edges = []

// function buildTree(object, stack) {
//   for (const key in object) {
//     if (_.isObject(object[key])) {
//       let separator = ""
//       if (stack !== "") {
//         separator = "--"
//       } 
//       buildTree(object[key], stack + separator + key)
//     } else {
//       console.log(stack + "--" + key + "--" + object[key])
//     }
//   }
// }
// buildTree(result, "")

// var container = document.getElementById('decision-tree');

// var DOTstring = 'dinetwork {outlook->sunny->humidity->high->1;humidity->normal->2;outlook->overcast->3;outlook->rain->wind->weak->4;wind->strong->5}';
// var parsedData = vis.network.convertDot(DOTstring);

// console.log(parsedData.nodes, parsedData.edges)

// var data = {
//   nodes: parsedData.nodes,
//   edges: parsedData.edges
// }

// var options = parsedData.options;

// // you can extend the options like a normal JSON variable:
// options.layout = {
//     hierarchical: {
//       direction: "LR",
//       sortMethod: 'directed'
//     }
// }

// // create a network
// var network = new vis.Network(container, data, options);
