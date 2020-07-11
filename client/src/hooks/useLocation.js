import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

// TODO: delete before prod, for testing only
import '../_mockLocation';

const useLocation = (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const config = {
    accuracy: Accuracy.BestForNavigation,
    timeInterval: 1000,
    distanceInterval: 10
  };

  useEffect(() => {
    let subscriber;
    if (shouldTrack) {
      (async () => {
        let { status } = await requestPermissionsAsync();
        if (status !== 'granted') setErr('Location access was denied');
        subscriber = await watchPositionAsync(config, callback);
      })();
    } else {
      if (subscriber) subscriber.remove();
      subscriber = null;
    }

    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [shouldTrack, callback]);

  return [err];
};

export default useLocation;
