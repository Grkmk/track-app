import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

// TODO: delete before prod, for testing only
import '../_mockLocation';

const useLocation = cb => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestPermissionsAsync();
      if (status !== 'granted') setErr('Location access was denied');
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        cb
      );
    })();
  }, []);

  return [err];
};

export default useLocation;
