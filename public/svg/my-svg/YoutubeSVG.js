const YoutubeSVG = ({ style, width, height, fill, className }) => {
  return (
    <svg
      className={className}
      style={{ ...style }}
      fill={fill}
      width='30'
      height='30'
      viewBox='0 0 30 30'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_88_384)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M27.8663 8.36812C27.1031 7.05187 26.2762 6.81 24.5906 6.71812C22.9069 6.6075 18.6712 6.5625 15.0037 6.5625C11.3287 6.5625 7.09125 6.6075 5.40937 6.71812C3.7275 6.81187 2.89875 7.05187 2.12812 8.36812C1.3425 9.68437 0.9375 11.9475 0.9375 15.9338V15.9487C0.9375 19.9181 1.3425 22.1981 2.12812 23.4975C2.89687 24.8119 3.72562 25.0519 5.40937 25.1625C7.09125 25.2563 11.3269 25.3125 15.0037 25.3125C18.6712 25.3125 22.9069 25.2563 24.5925 25.1625C26.2781 25.0519 27.105 24.8119 27.8681 23.4975C28.6631 22.1962 29.0644 19.9162 29.0644 15.9487V15.9394V15.9338C29.0625 11.9475 28.6631 9.68437 27.8663 8.36812V8.36812Z'
          stroke={fill ? fill : 'white'}
          fill={fill ? 'white' : ''}
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.1875 20.625V11.25L19.6875 15.9375L12.1875 20.625Z'
          stroke={fill ? fill : 'white'}
          fill={fill ? 'white' : ''}
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_88_384'>
          <rect width='30' height='30' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeSVG;
