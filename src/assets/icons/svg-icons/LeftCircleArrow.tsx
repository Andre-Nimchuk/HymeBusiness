import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="4" fill="#4094E1"/>
<path d="M12.0136 18C15.1506 18 17.7233 15.6033 18 12.5455H13.107V14.1818C13.107 14.4022 12.9736 14.6012 12.7697 14.6858C12.5653 14.7703 12.3301 14.7235 12.1739 14.5675L9.98702 12.3856C9.7733 12.1723 9.7733 11.8277 9.98702 11.6143L12.1739 9.43254C12.3301 9.27653 12.5653 9.22959 12.7697 9.31419C12.9736 9.39868 13.107 9.59783 13.107 9.81816V11.4545H18C17.7233 8.39672 15.1506 6 12.0136 6C8.69248 6 6 8.68636 6 11.9999C6 15.3136 8.69248 18 12.0136 18V18Z" fill="white"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
