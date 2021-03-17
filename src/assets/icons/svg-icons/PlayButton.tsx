import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M51 78C68.1208 78 82 64.1208 82 47C82 29.8792 68.1208 16 51 16C33.8792 16 20 29.8792 20 47C20 64.1208 33.8792 78 51 78ZM47.0698 38.0623C45.7368 37.2625 44.0408 38.2227 44.0408 39.7773V55.488C44.0408 57.0426 45.7368 58.0028 47.0698 57.203L60.1621 49.3476C61.4568 48.5708 61.4568 46.6945 60.1621 45.9177L47.0698 38.0623Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="10"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
