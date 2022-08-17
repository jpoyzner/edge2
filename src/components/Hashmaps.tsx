import React from 'react';
import HashmapBucket from '../objects/HashmapBucket';
import { useInput, InputState} from './hooks';
import './Contacts.scss';

export default function() {
  const hashmap: BucketsState = useBuckets(10);
  const hashmapString: InputState = useInput('', undefined, (newString) => hashmap.addString(newString));
  
  return (
    <div className="hashmaps-page">
     <div className="hashmap-add-string">
        <span>ENTER STRING: </span>
        <input className="hashmap-string" { ...hashmapString } />
      </div>
      <div className="hashmap-buckets">
        {hashmap.buckets.map((bucket: HashmapBucket) => {
          return (
            <div key={bucket.hash}>
              <div>HASH: {bucket.hash}</div>
              <div className="bucket-values">
                {bucket.values().map((stringValue, index) => <div key={index}>{stringValue}</div>)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface BucketsState {
  addString(newString: string): void;
  buckets: HashmapBucket[];
}

function useBuckets(initialCapacity: number, loadFactor: number = .75): BucketsState {
  const [buckets, setBuckets] = React.useState<HashmapBucket[]>([]);
  if (!buckets.length) {
    setBuckets(createBuckets(initialCapacity));
  }

  const [numValues, setNumValues] = React.useState<number>(0);

  const [capacity, setCapacity] = React.useState<number>(initialCapacity);
  if (numValues / capacity > loadFactor) {
    const newCapacity: number = capacity * 2;
    const newBuckets: HashmapBucket[] = createBuckets(newCapacity);
    let numValues: number = 0;
    for (const bucket of buckets) {
      for (const value of bucket.values()) {
        const hash: number = getHash(value, newCapacity);
        for (let i = 0; i < newBuckets.length; i++) {
          if (newBuckets[i].hash === hash) {
            newBuckets[i].addValue(value);
            numValues++;
            break;
          }
        }
      }
    }

    setCapacity(newCapacity);
    setBuckets(newBuckets);
    setNumValues(numValues);
  }
  
  return {
    addString(newString: string): void {
      const hash: number = getHash(newString, capacity);
      for (let i = 0; i < buckets.length; i++) {
        if (buckets[i].hash === hash) {
          buckets[i].addValue(newString);
          setNumValues(numValues + 1);
          break;
        }
      }
    },
    buckets,
  }
}

function createBuckets(capacity: number): HashmapBucket[] {
  const buckets: HashmapBucket[] = [];
  for (let hash = 0; hash < capacity; hash++) {
    buckets.push(new HashmapBucket(hash));
  }

  return buckets;
}

function getHash(newString: string, capacity: number): number {
  let hash: number = 0;
  for (let i = 0; i < newString.length; i++) {
    hash += newString.charCodeAt(i);
  }

  return hash % capacity;
}
