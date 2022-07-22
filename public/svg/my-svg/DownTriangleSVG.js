const DownTriangleSVG = ({ style, width, height, fill, className }) => {
  return (
    <svg
      className={className}
      style={{ ...style }}
      width='13'
      height='12'
      viewBox='0 0 13 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.00488281 0.249927L12.9953 0.249927L6.50007 11.4999L0.00488281 0.249927Z'
        fill='black'
      />
    </svg>
  );
};

export default DownTriangleSVG;
