# ID3 Algorithm

This program implement ID3 algorithm. This is part of an exercise from computational intelligence class.

```
In decision tree learning, ID3 (Iterative Dichotomiser 3) is an algorithm invented 
by Ross Quinlan[1] used to generate a decision tree from a dataset. ID3 is the 
precursor to the C4.5 algorithm, and is typically used in the machine learning 
and natural language processing domains. 
```

## How to run

Just click in index.html in src folder and open the console of the browser 

## Example

Dataset example: 

```Javascript
const datasetExample = [
  ['sunny','hot','high','weak','no'],
  ['sunny','hot','high','strong','no'],
  ['overcast','hot','high','weak','yes'],
  ['rain','mild','high','weak','yes'],
  ['rain','cool','normal','weak','yes'],
  ['rain','cool','normal','strong','no'],
  ['overcast','cool','normal','strong','yes'],
  ['sunny','mild','high','weak','no'],
  ['sunny','cool','normal','weak','yes'],
  ['rain','mild','normal','weak','yes'],
  ['sunny','mild','normal','strong','yes'],
  ['overcast','mild','high','strong','yes'],
  ['overcast','hot','normal','weak','yes'],
  ['rain','mild','high','strong','no']
]

const attributeNames = ['outlook', 'temp', 'humidity', 'wind', 'decision']
```

The decision tree:

```Javascript
{
  outlook: {
    overcast: "yes",
    rain: {
      wind: {
        strong:"no",
        weak:"yes"
      }
    },
    sunny: {
      humidity: {
        high: "no",
        normal: "yes"
      }
    }
  }
}
```
