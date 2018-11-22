import React from 'react';

const BekkLogo = ({ fill, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.5 93.4" {...rest}>
    <path
      d="M.2 0H35s28.8-2.4 28.8 21.8S39 44.2 34.3 44.2H0V33.3h35.6s15.6.8 15.6-11.6c0-11.9-10.6-11-16-11H.2zM59 52.2c5.4 3.1 10.2 8.9 10.2 18.2 0 24.2-24.8 22.8-29.6 22.8H0V82.6h40.7s15.8.3 15.9-12A22 22 0 0 0 46 52.1zM100.2 52.2H115v21.1c0 7 4.2 9.3 8.3 9.3H164v10.8H115c-5.1 0-14.8-3.3-14.8-17zM164.2 33.5h-42.1c-4.2 0-7-.4-7-5.1V16c0-5 2.6-5.3 6.7-5.3h42.4V0h-48s-16-1.1-16 15.9v11.9c0 15.3 11.4 16.3 16.5 16.3H164zM270.8 0c-2.2 2.6-23 27.4-25.7 30-4.4 4.4-12.3 3.5-18.7 3.5s-7.6-5-7.6-8.3V.3H204v33.3c0 3.3 1.6 10.7 14.8 10.7h25.4c3.3 0 8.2-2 13.9-8.7 1.7-2 25.8-31 29.8-35.3zM256.2 58.9c-3.1-3.4-6-6.7-15.7-6.7h-21.7c-10.9 0-14.7 7.8-14.7 12v29h14.7v-25c0-3.4 1-5.2 7.5-5.2h6.1c6.1 0 9.5.2 12.7 3.4 2.6 2.6 24.3 24.2 26.7 26.8h17L256.2 59zM380.4.1c-2.2 2.5-23 27.4-25.7 30-4.4 4.4-12.2 3.4-18.6 3.4s-7.6-4.9-7.6-8.2V.2h-14.9v33.3c0 3.3 1.6 10.8 14.8 10.8H354c3.2 0 8.2-2 13.8-8.7 1.7-2 25.9-31 29.8-35.4zM365.8 58.9c-3-3.4-6-6.7-15.7-6.7h-21.7c-10.8 0-14.7 7.9-14.7 12v29.1h14.8v-25c0-3.3 1-5.3 7.5-5.3h6.1c6.1 0 9.5.2 12.7 3.4l26.7 26.9h17l-32.7-34.4z"
      fill={fill}
    />
  </svg>
);

BekkLogo.defaultProps = {
  fill: '#fff',
};

export default BekkLogo;