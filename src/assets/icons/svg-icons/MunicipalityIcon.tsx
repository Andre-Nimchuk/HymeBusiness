import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.15" cx="21" cy="21" r="21" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 26.25C12.8619 26.25 12.75 26.3619 12.75 26.5V27C12.75 27.1381 12.8619 27.25 13 27.25H29C29.1381 27.25 29.25 27.1381 29.25 27V26.5C29.25 26.3619 29.1381 26.25 29 26.25H13ZM11.25 26.5C11.25 25.5335 12.0335 24.75 13 24.75H29C29.9665 24.75 30.75 25.5335 30.75 26.5V27C30.75 27.9665 29.9665 28.75 29 28.75H13C12.0335 28.75 11.25 27.9665 11.25 27V26.5Z" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 18.5V25.5H12.75V18.5H14.25Z" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 18.5V25.5H15.75V18.5H17.25Z" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.25 18.5V25.5H24.75V18.5H26.25Z" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.25 18.5V25.5H27.75V18.5H29.25Z" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 10.6702L31.25 15.5254V19.2501H10.75V15.5254L21 10.6702ZM12.25 16.4747V17.7501H29.75V16.4747L21 12.3299L12.25 16.4747Z" fill="#4094E1"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 16.75H11.5V15.25H30V16.75Z" fill="#4094E1"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
