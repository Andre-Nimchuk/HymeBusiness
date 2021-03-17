import * as React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({style, color}: any) => {
  const xml = `
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9.96861H1.69H1ZM1 16.6972H0.31H1ZM16.6923 18V17.31V18ZM2.30769 18V18.69H2.30769L2.30769 18ZM18 9.96864H17.31H18ZM18 16.6972H18.69H18ZM17.308 8.20301L16.8015 8.6715L17.308 8.20301ZM11.4234 1.84005L11.93 1.37156V1.37156L11.4234 1.84005ZM7.57659 1.84004L8.08316 2.30853H8.08316L7.57659 1.84004ZM1.69198 8.20298L1.1854 7.73448H1.1854L1.69198 8.20298ZM6.88462 11.4858H7.57462H6.88462ZM6.88462 17.3486H6.19462H6.88462ZM11.4615 18V17.31V18ZM7.53846 18V18.69V18ZM12.1154 11.4858H12.8054H12.1154ZM12.1154 17.3486H11.4254H12.1154ZM11.4615 10.8344L11.4615 10.1444L11.4615 10.8344ZM7.53846 10.8344L7.53846 11.5244H7.53846L7.53846 10.8344ZM0.31 9.96861L0.31 16.6972H1.69L1.69 9.96861H0.31ZM16.6923 17.31L2.30769 17.31L2.30769 18.69L16.6923 18.69V17.31ZM17.31 9.96864V16.6972H18.69V9.96864H17.31ZM17.8146 7.73452L11.93 1.37156L10.9168 2.30854L16.8015 8.6715L17.8146 7.73452ZM7.07002 1.37155L1.1854 7.73448L2.19855 8.67147L8.08316 2.30853L7.07002 1.37155ZM11.93 1.37156C10.621 -0.0438471 8.37902 -0.0438539 7.07002 1.37155L8.08316 2.30853C8.84587 1.48382 10.1541 1.48382 10.9168 2.30854L11.93 1.37156ZM18.69 9.96864C18.69 9.1404 18.3773 8.34292 17.8146 7.73452L16.8015 8.6715C17.1287 9.02536 17.31 9.48843 17.31 9.96864H18.69ZM1.69 9.96861C1.69 9.4884 1.87129 9.02533 2.19855 8.67147L1.1854 7.73448C0.622743 8.34288 0.31 9.14037 0.31 9.96861H1.69ZM0.31 16.6972C0.31 17.8002 1.20682 18.69 2.30769 18.69V17.31C1.96413 17.31 1.69 17.0332 1.69 16.6972H0.31ZM16.6923 18.69C17.7932 18.69 18.69 17.8002 18.69 16.6972H17.31C17.31 17.0332 17.0359 17.31 16.6923 17.31V18.69ZM6.19462 11.4858L6.19462 17.3486H7.57462L7.57462 11.4858H6.19462ZM11.4615 17.31H7.53846V18.69H11.4615V17.31ZM11.4254 11.4858L11.4254 17.3486H12.8054L12.8054 11.4858H11.4254ZM11.4615 10.1444L7.53847 10.1444L7.53846 11.5244L11.4615 11.5244L11.4615 10.1444ZM12.8054 11.4858C12.8054 10.7426 12.2013 10.1444 11.4615 10.1444L11.4615 11.5244C11.444 11.5244 11.4254 11.5096 11.4254 11.4858H12.8054ZM7.57462 11.4858C7.57462 11.5095 7.55601 11.5244 7.53846 11.5244L7.53847 10.1444C6.7987 10.1444 6.19462 10.7426 6.19462 11.4858H7.57462ZM6.19462 17.3486C6.19462 18.0918 6.7987 18.69 7.53846 18.69V17.31C7.556 17.31 7.57462 17.3249 7.57462 17.3486H6.19462ZM11.4615 18.69C12.2013 18.69 12.8054 18.0918 12.8054 17.3486H11.4254C11.4254 17.3249 11.444 17.31 11.4615 17.31V18.69Z" fill="${color}"/>
    </svg>
    `;
  return <SvgXml xml={xml} style={style} />;
};
