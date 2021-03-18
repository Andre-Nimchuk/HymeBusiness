import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.15" cx="19.5" cy="19.5" r="19.5" fill="#4094E1"/>
<path d="M19.2858 15.1793L19.2858 15.1793C18.4385 15.2379 17.7534 15.9181 17.6945 16.7534C17.6246 17.7438 18.4189 18.575 19.4091 18.575C21.3839 18.575 22.9932 20.1657 22.9932 22.125C22.9932 23.7478 21.8887 25.1165 20.3885 25.5392M19.2858 15.1793L20.341 25.3708M19.2858 15.1793C20.2909 15.1097 21.128 15.8993 21.128 16.875C21.128 17.3966 21.5622 17.8145 22.0878 17.7996L19.2858 15.1793ZM20.3885 25.5392L20.341 25.3708M20.3885 25.5392C20.3885 25.5392 20.3885 25.5392 20.3885 25.5392L20.341 25.3708M20.3885 25.5392C20.358 25.5478 20.3417 25.5728 20.3417 25.5967V26.2288C20.3417 26.7211 19.9596 27.1504 19.4538 27.174C18.9203 27.1988 18.4765 26.7774 18.4765 26.25V25.5965C18.4765 25.5724 18.4601 25.5478 18.4305 25.5394M20.341 25.3708C20.2384 25.3997 20.1667 25.491 20.1667 25.5967V26.2288C20.1667 26.6327 19.8532 26.9802 19.4457 26.9991C19.0106 27.0194 18.6515 26.6762 18.6515 26.25V25.5965C18.6515 25.4912 18.5802 25.3998 18.4779 25.3709M18.4305 25.5394L18.4779 25.3709M18.4305 25.5394C18.4305 25.5394 18.4304 25.5394 18.4304 25.5394L18.4779 25.3709M18.4305 25.5394C16.9366 25.1188 15.835 23.7605 15.8251 22.147L15.8251 22.147C15.822 21.6463 16.2189 21.2149 16.7303 21.2004C17.256 21.1854 17.6902 21.6034 17.6902 22.125C17.6902 23.1007 18.5273 23.8903 19.5324 23.8207C20.3796 23.7621 21.0648 23.0819 21.1237 22.2466C21.1936 21.2562 20.3993 20.425 19.4091 20.425C17.4343 20.425 15.825 18.8343 15.825 16.875C15.825 15.2522 16.9295 13.8835 18.4297 13.4608C18.4602 13.4522 18.4765 13.4272 18.4765 13.4034V12.7712C18.4765 12.2789 18.8586 11.8496 19.3643 11.826L19.3644 11.826C19.8979 11.8012 20.3417 12.2226 20.3417 12.75V13.4035L18.4779 25.3709" fill="#4094E1" stroke="#4094E1" stroke-width="0.35"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;