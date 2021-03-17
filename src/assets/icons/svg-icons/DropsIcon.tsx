import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7684 9.80777C15.7684 9.09976 15.5427 8.42498 15.1156 7.85556L12.3794 3.89089L11.1255 5.70768L7.87068 0.991913L2.3275 9.02341C1.45597 10.181 0.995438 11.5536 0.995438 12.9938C0.995438 16.694 4.07966 19.7044 7.87068 19.7044C11.6617 19.7044 14.7459 16.694 14.7459 12.9938C14.7459 12.734 14.7302 12.4736 14.6997 12.2164C15.3572 11.6126 15.7684 10.7563 15.7684 9.80777ZM7.87068 18.6011C4.70289 18.6011 2.12575 16.0857 2.12575 12.9938C2.12575 11.7863 2.51308 10.6358 3.24583 9.6668L3.27519 9.62773L3.28066 9.61706L7.87068 2.96652L10.444 6.69502L9.64306 7.8556C9.21596 8.42505 8.99028 9.0998 8.99028 9.80781C8.99028 11.6318 10.5106 13.1157 12.3794 13.1157C12.815 13.1157 13.2317 13.0349 13.6146 12.8882C13.6152 12.9234 13.6157 12.9586 13.6157 12.9938C13.6157 16.0857 11.0385 18.6011 7.87068 18.6011ZM12.3794 12.0124C11.1339 12.0124 10.1206 11.0234 10.1206 9.80777C10.1206 9.33272 10.2728 8.88044 10.5608 8.49983L10.59 8.46109L10.5955 8.45038L12.3794 5.86557L14.1633 8.45034L14.169 8.46145L14.198 8.49979C14.486 8.88044 14.6382 9.33268 14.6382 9.80773C14.6382 11.0235 13.6249 12.0124 12.3794 12.0124Z" fill="#F55F56"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.87072 0.471924L11.1255 5.18769L12.3794 3.37088L15.3556 7.68321C15.8185 8.30245 16.0639 9.03757 16.0639 9.80793C16.0639 10.7901 15.6599 11.6804 15.0091 12.3294C15.0304 12.5497 15.0414 12.772 15.0414 12.994C15.0414 16.8641 11.8181 20 7.87072 20C3.92331 20 0.700012 16.8641 0.700012 12.994C0.700012 11.4912 1.18035 10.0583 2.08779 8.85079L7.87072 0.471924ZM7.87072 1.51222L2.56378 9.20143C1.73055 10.3082 1.29093 11.6183 1.29093 12.994C1.29093 16.5243 4.23607 19.4091 7.87072 19.4091C11.5054 19.4091 14.4505 16.5243 14.4505 12.994C14.4505 12.746 14.4355 12.4972 14.4064 12.2513L14.3886 12.1012L14.4999 11.9989C15.1002 11.4477 15.473 10.6688 15.473 9.80793C15.473 9.16425 15.2683 8.5516 14.8793 8.03301L14.8723 8.02368L12.3794 4.41121L11.1255 6.22799L7.87072 1.51222ZM7.87072 2.44653L10.8031 6.69518L9.87965 8.03317C9.49067 8.5518 9.28578 9.16428 9.28578 9.80796C9.28578 11.4621 10.667 12.8204 12.3794 12.8204C12.7783 12.8204 13.1592 12.7465 13.5089 12.6125L13.9024 12.4617L13.91 12.883C13.9107 12.9192 13.9112 12.9564 13.9112 12.994C13.9112 16.2558 11.1949 18.8968 7.87072 18.8968C4.54654 18.8968 1.83032 16.2558 1.83032 12.994C1.83032 11.7218 2.23879 10.509 3.00989 9.48917C3.00999 9.48903 3.00978 9.48932 3.00989 9.48917L3.02381 9.47065L3.02654 9.4653L7.87072 2.44653ZM7.87072 3.48683L3.53484 9.76914L3.52665 9.78514L3.48208 9.84445C2.78787 10.7624 2.42124 11.8512 2.42124 12.994C2.42124 15.916 4.85931 18.3058 7.87072 18.3058C10.7783 18.3058 13.1513 16.078 13.3116 13.2944C13.0136 13.3707 12.7011 13.4113 12.3794 13.4113C10.3543 13.4113 8.69486 11.8019 8.69486 9.80796C8.69486 9.0376 8.94026 8.30252 9.40317 7.68324L10.0851 6.69519L7.87072 3.48683ZM12.3795 5.34556L14.4175 8.29859L14.4202 8.3039L14.4336 8.32163C14.7602 8.75332 14.9337 9.26816 14.9337 9.80789C14.9337 11.1935 13.7813 12.308 12.3795 12.308C10.9775 12.308 9.82521 11.1934 9.82521 9.80793C9.82521 9.26829 9.99857 8.75356 10.325 8.32194C10.3251 8.32187 10.325 8.32201 10.325 8.32194L10.3388 8.30371L10.3415 8.29845L12.3795 5.34556ZM10.8495 8.60262L10.8412 8.61879L10.7969 8.67771C10.5475 9.00727 10.4161 9.39756 10.4161 9.80793C10.4161 10.8537 11.2903 11.7171 12.3795 11.7171C13.4686 11.7171 14.3427 10.8537 14.3427 9.80789C14.3427 9.39756 14.2118 9.00786 13.9625 8.67827C13.9624 8.67825 13.9625 8.67829 13.9625 8.67827L13.9178 8.61933L13.9092 8.60242L12.3794 6.38589L10.8495 8.60262Z" fill="#F55F56"/>
</svg>
`;

export default ({ style }: any) => <SvgXml xml={xml} style={style} />;
