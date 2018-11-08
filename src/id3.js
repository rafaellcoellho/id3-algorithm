function entropy (dataset) {
  const entries = dataset.length
  let labels = {}
  let entropy = 0.0
  let prob = 0.0

  dataset.forEach(data => {
    let label = data[data.length-1]
    if (labels.hasOwnProperty(label)) {
      labels[label]++;
    } else {
      labels[label] = 1
    }
  })

  for (let label of Object.keys(labels)) {
    prob = labels[label]/entries
    entropy -= prob*Math.log2(prob)
  }

  return entropy
}

function splitDataset (dataset, attributeIndex, attributeValue) {
  let newDataset = []
  dataset.forEach( data => {
    if (data[attributeIndex] === attributeValue) {
      let newData = data
        .filter( data => data !== attributeValue)
      newDataset.push(newData)
    }
  })
  return newDataset
}
