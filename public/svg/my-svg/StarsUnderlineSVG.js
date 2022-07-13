const StarsUnderlineSVG = ({
  style,
  width,
  height,
  fill,
  className,
  color,
}) => {
  return (
    <svg
      className={className}
      width='184'
      height='34'
      viewBox='0 0 184 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.43604 25.5251C74.9227 6.72952 136.216 -1.83612 176.243 25.5251'
        // stroke={color ? color : '#920B00'}
        strokeWidth='15'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default StarsUnderlineSVG;
