const LocationSVG = ({ style, width, height, fill, className }) => {
  return (
    <svg
      className={className}
      style={{ ...style }}
      width='30'
      height='30'
      viewBox='0 0 30 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_88_375)'>
        <path
          d='M14.9889 -0.00366211C10.3401 -0.00366211 6.55138 3.78496 6.55138 8.43384C6.55002 8.53443 6.56486 8.63459 6.59533 8.73047C6.67516 11.6898 7.95728 14.2799 9.46642 16.6809C11.0246 19.1598 12.8304 21.4862 13.9891 23.8586C14.0653 24.0153 14.1835 24.1476 14.3307 24.2407C14.4778 24.3339 14.648 24.3843 14.8221 24.3862C14.9962 24.3881 15.1675 24.3414 15.3166 24.2515C15.4657 24.1616 15.5868 24.0319 15.6664 23.877C16.883 21.5064 18.7815 19.1783 20.4198 16.6992C22.0581 14.2203 23.4557 11.543 23.4557 8.44849C23.4572 8.32962 23.436 8.21156 23.3934 8.10058C23.214 3.6085 19.5237 -0.00366211 14.9889 -0.00366211ZM14.9889 1.87134C18.6244 1.87134 21.5514 4.7984 21.5514 8.43384C21.5502 8.50144 21.5563 8.56897 21.5697 8.63525C21.5138 11.0874 20.3817 13.3579 18.8561 15.6665C17.5664 17.6182 16.1082 19.6333 14.8497 21.7273C13.6551 19.6423 12.2788 17.6307 11.0558 15.6848C9.56727 13.3167 8.45568 10.9869 8.45568 8.44849C8.45566 8.39323 8.45076 8.33808 8.44103 8.28369C8.52228 4.71992 11.4049 1.87134 14.9889 1.87134ZM14.9889 5.625C13.4467 5.625 12.1764 6.89531 12.1764 8.4375C12.1764 9.97969 13.4467 11.25 14.9889 11.25C16.5311 11.25 17.8014 9.97969 17.8014 8.4375C17.8014 6.89531 16.5311 5.625 14.9889 5.625ZM14.9889 7.5C15.5178 7.5 15.9264 7.90875 15.9264 8.4375C15.9264 8.96644 15.5178 9.375 14.9889 9.375C14.46 9.375 14.0514 8.96644 14.0514 8.4375C14.0514 7.90875 14.46 7.5 14.9889 7.5ZM22.6573 17.2998C22.4383 17.2997 22.2262 17.3763 22.0577 17.5162C21.8892 17.6562 21.7751 17.8507 21.7351 18.0661C21.695 18.2814 21.7317 18.504 21.8386 18.6951C21.9455 18.8863 22.116 19.034 22.3204 19.1125C24.1892 19.8695 25.3904 20.862 25.9093 21.7749C26.4281 22.6878 26.416 23.4768 25.7372 24.4482C24.3795 26.3909 20.0455 28.1113 15.0987 28.1323C10.152 28.1529 5.75765 26.4767 4.32116 24.5288C3.6029 23.5547 3.56728 22.7602 4.05016 21.8518C4.53304 20.9436 5.69005 19.9425 7.52916 19.1711C7.64608 19.1259 7.75274 19.0577 7.84284 18.9706C7.93295 18.8834 8.00466 18.7791 8.05374 18.6638C8.10282 18.5484 8.12827 18.4244 8.12859 18.299C8.12891 18.1737 8.1041 18.0496 8.0556 17.934C8.00711 17.8184 7.93594 17.7137 7.84628 17.6261C7.75663 17.5385 7.65031 17.4697 7.53363 17.4239C7.41695 17.3781 7.29226 17.3562 7.16695 17.3594C7.04164 17.3626 6.91825 17.3909 6.80407 17.4426C4.70287 18.3239 3.173 19.5091 2.39489 20.9729C1.61677 22.4365 1.75144 24.2034 2.81237 25.6421C4.93422 28.5197 9.77062 30.0302 15.1097 30.0073C20.4488 29.9848 25.2398 28.4373 27.2753 25.5249C28.293 24.0686 28.3619 22.2964 27.5389 20.8484C26.7159 19.4003 25.151 18.2348 23.0236 17.373C22.9076 17.3243 22.7831 17.2994 22.6573 17.2998Z'
          fill={fill ? fill : 'white'}
        />
      </g>
      <defs>
        <clipPath id='clip0_88_375'>
          <rect width='30' height='30' fill={fill ? fill : 'white'} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationSVG;
