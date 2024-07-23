/// <reference types="nativewind/types" />
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare var alert: (message?: any) => void;
