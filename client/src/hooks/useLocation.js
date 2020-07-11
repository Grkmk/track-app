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
  const [subscriber, setSubscriber] = useState(null);
  const config = {
    accuracy: Accuracy.BestForNavigation,
    timeInterval: 1000,
    distanceInterval: 10
  };

  const removeSub = () => {
    subscriber.remove();
    setSubscriber(null);
  };

  useEffect(() => {
    if (shouldTrack) {
      (async () => {
        let { status } = await requestPermissionsAsync();
        if (status !== 'granted') setErr('Location access was denied');
        const sub = await watchPositionAsync(config, callback);
        setSubscriber(sub);
      })();
    } else removeSub();
  }, [shouldTrack]);

  return [err];
};

export default useLocation;
