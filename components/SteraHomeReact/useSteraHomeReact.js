/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import useSteraHomeReactResponsiveSize from './useSteraHomeReactResponsiveSize';

//These are the possible values for the current variant. Use this to change the currentVariant dynamically.
//Please don't modify
const variantOptions = {
  Resolution1920: 'Resolution1920',
  Resolution375: 'Resolution375',
  Resolution768: 'Resolution768',
  Resolution900: 'Resolution900',
  Resolution1200: 'Resolution1200',
  Resolution1440: 'Resolution1440',
};

const useSteraHomeReact = () => {
  const [currentVariant, setCurrentVariant] = React.useState(
    variantOptions['Resolution1920']
  );

  const breakpointsVariant = useSteraHomeReactResponsiveSize();

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  let data = { currentVariant };

  let fns = { setCurrentVariant };
  return { data, fns };
};

export default useSteraHomeReact;
