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