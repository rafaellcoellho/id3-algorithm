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

function attributeSelection (dataset) {
  const numberOfAttributes = dataset[0].length-1
  const baseEntropy = entropy(dataset)
  let greaterInformationGain = 0.0
  let bestAttr


  for (let i=0; i < numberOfAttributes; i++) {
    let labelsOfAttribute = {}
    
    dataset.forEach( data => {
      const label = data[i]
      if (!labelsOfAttribute.hasOwnProperty(label)) {
        labelsOfAttribute[label] = 1;
      } 
    })

    let attrEntropy = 0.0

    Object.keys(labelsOfAttribute).forEach(label => {
      const newData = splitDataset(dataset, i, label)
      const prob = newData.length / dataset.length
      const newEntropy = prob * entropy(newData)
      attrEntropy += newEntropy
    })
    
    const informationGain = baseEntropy - attrEntropy
    if (informationGain > greaterInformationGain) {
      greaterInformationGain = informationGain
      bestAttr = i
    }
  }

  return bestAttr
} 
