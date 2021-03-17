import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default ({ style, color }: any) => {
    const xml = `<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.31579 20.3422H17.9605V11.7764H18.5858C19.4767 11.7764 19.9229 10.6993 19.2929 10.0693L10.7763 1.55273L1.76139 10.3365C1.11881 10.9626 1.56208 12.0527 2.45926 12.0527H3.31579V20.3422Z" stroke="${color}" stroke-width="1.65789"/>
    <path d="M8.56567 20.066V16.1975C8.56567 15.5871 9.06052 15.0923 9.67094 15.0923H12.1578C12.7682 15.0923 13.263 15.5871 13.263 16.1975V20.066" stroke="${color}" stroke-width="1.65789"/>
    <path d="M14.9211 5.42105V1.55263C14.9211 1.24742 15.1681 1 15.4733 1C16.074 1 16.9816 1 17.6848 1C17.99 1 18.237 1.24742 18.237 1.55263V9.01316" stroke="${color}" stroke-width="1.65789"/>
    </svg>
    `;
    return <SvgXml xml={xml} style={style} />;
};
