import * as React from 'react';
import { SvgXml } from 'react-native-svg';

export default ({ style, color }: any) => {
    const xml = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.46155L6.25 3.46155L7 3.46155ZM4.53846 7L4.53846 6.25L4.53846 7ZM7 4.53846L6.25 4.53846L7 4.53846ZM0.25 3.46154L0.25 4.53846L1.75 4.53846L1.75 3.46154L0.25 3.46154ZM4.53846 6.25L3.46154 6.25L3.46154 7.75L4.53846 7.75L4.53846 6.25ZM6.25 3.46155L6.25 4.53846L7.75 4.53846L7.75 3.46155L6.25 3.46155ZM4.53847 0.250007L3.46155 0.250005L3.46154 1.75001L4.53846 1.75001L4.53847 0.250007ZM7.75 3.46155C7.75 1.68786 6.31215 0.250011 4.53847 0.250007L4.53846 1.75001C5.48372 1.75001 6.25 2.51629 6.25 3.46155L7.75 3.46155ZM1.75 3.46154C1.75 2.51629 2.51628 1.75 3.46154 1.75001L3.46155 0.250005C1.68786 0.250001 0.25 1.68786 0.25 3.46154L1.75 3.46154ZM0.25 4.53846C0.25 6.31215 1.68785 7.75 3.46154 7.75L3.46154 6.25C2.51628 6.25 1.75 5.48372 1.75 4.53846L0.25 4.53846ZM4.53846 7.75C6.31215 7.75 7.75 6.31214 7.75 4.53846L6.25 4.53846C6.25 5.48372 5.48372 6.25 4.53846 6.25L4.53846 7.75Z" fill="${color}"/>
    <path d="M16 3.46155L15.25 3.46155L16 3.46155ZM13.5385 7L13.5385 6.25L13.5385 7ZM16 4.53846L15.25 4.53846L16 4.53846ZM9.25 3.46154L9.25 4.53846L10.75 4.53846L10.75 3.46154L9.25 3.46154ZM13.5385 6.25L12.4615 6.25L12.4615 7.75L13.5385 7.75L13.5385 6.25ZM15.25 3.46155L15.25 4.53846L16.75 4.53846L16.75 3.46155L15.25 3.46155ZM13.5385 0.250007L12.4615 0.250005L12.4615 1.75001L13.5385 1.75001L13.5385 0.250007ZM16.75 3.46155C16.75 1.68786 15.3121 0.250011 13.5385 0.250007L13.5385 1.75001C14.4837 1.75001 15.25 2.51629 15.25 3.46155L16.75 3.46155ZM10.75 3.46154C10.75 2.51629 11.5163 1.75 12.4615 1.75001L12.4615 0.250005C10.6879 0.250001 9.25 1.68786 9.25 3.46154L10.75 3.46154ZM9.25 4.53846C9.25 6.31215 10.6879 7.75 12.4615 7.75L12.4615 6.25C11.5163 6.25 10.75 5.48372 10.75 4.53846L9.25 4.53846ZM13.5385 7.75C15.3121 7.75 16.75 6.31214 16.75 4.53846L15.25 4.53846C15.25 5.48372 14.4837 6.25 13.5385 6.25L13.5385 7.75Z" fill="${color}"/>
    <path d="M7 12.4615L6.25 12.4615L7 12.4615ZM4.53846 16L4.53846 15.25L4.53846 16ZM7 13.5385L6.25 13.5385L7 13.5385ZM0.25 12.4615L0.25 13.5385L1.75 13.5385L1.75 12.4615L0.25 12.4615ZM4.53846 15.25L3.46154 15.25L3.46154 16.75L4.53846 16.75L4.53846 15.25ZM6.25 12.4615L6.25 13.5385L7.75 13.5385L7.75 12.4615L6.25 12.4615ZM4.53847 9.25001L3.46155 9.25001L3.46154 10.75L4.53846 10.75L4.53847 9.25001ZM7.75 12.4615C7.75 10.6879 6.31215 9.25001 4.53847 9.25001L4.53846 10.75C5.48372 10.75 6.25 11.5163 6.25 12.4615L7.75 12.4615ZM1.75 12.4615C1.75 11.5163 2.51628 10.75 3.46154 10.75L3.46155 9.25001C1.68786 9.25 0.25 10.6879 0.25 12.4615L1.75 12.4615ZM0.25 13.5385C0.25 15.3121 1.68785 16.75 3.46154 16.75L3.46154 15.25C2.51628 15.25 1.75 14.4837 1.75 13.5385L0.25 13.5385ZM4.53846 16.75C6.31215 16.75 7.75 15.3121 7.75 13.5385L6.25 13.5385C6.25 14.4837 5.48372 15.25 4.53846 15.25L4.53846 16.75Z" fill="${color}"/>
    <path d="M16 12.4615L15.25 12.4615L16 12.4615ZM13.5385 16L13.5385 15.25L13.5385 16ZM16 13.5385L15.25 13.5385L16 13.5385ZM9.25 12.4615L9.25 13.5385L10.75 13.5385L10.75 12.4615L9.25 12.4615ZM13.5385 15.25L12.4615 15.25L12.4615 16.75L13.5385 16.75L13.5385 15.25ZM15.25 12.4615L15.25 13.5385L16.75 13.5385L16.75 12.4615L15.25 12.4615ZM13.5385 9.25001L12.4615 9.25001L12.4615 10.75L13.5385 10.75L13.5385 9.25001ZM16.75 12.4615C16.75 10.6879 15.3121 9.25001 13.5385 9.25001L13.5385 10.75C14.4837 10.75 15.25 11.5163 15.25 12.4615L16.75 12.4615ZM10.75 12.4615C10.75 11.5163 11.5163 10.75 12.4615 10.75L12.4615 9.25001C10.6879 9.25 9.25 10.6879 9.25 12.4615L10.75 12.4615ZM9.25 13.5385C9.25 15.3121 10.6879 16.75 12.4615 16.75L12.4615 15.25C11.5163 15.25 10.75 14.4837 10.75 13.5385L9.25 13.5385ZM13.5385 16.75C15.3121 16.75 16.75 15.3121 16.75 13.5385L15.25 13.5385C15.25 14.4837 14.4837 15.25 13.5385 15.25L13.5385 16.75Z" fill="${color}"/>
    </svg>
    `;
    return <SvgXml xml={xml} style={style} />;
};