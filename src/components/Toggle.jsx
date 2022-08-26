import { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';

export const Toggle = () => {
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
      if(enabled){
        document.querySelector('html').classList.remove('dark');
      } else {
        document.querySelector('html').classList.add('dark');
      }
    }, [enabled])
    

    return (
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`bg-gradient-to-l from-light-one to-light-two shadow-default dark:from-dark-one dark:to-dark-two ${
            enabled ? '' : 'dark'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
      )
}
