const ArrowDownSVG = ({
  style,
  width,
  height,
  fill,
  className,
  ...otherProps
}) => {
  return (
    <svg
      {...otherProps}
      className={className}
      style={{ ...style }}
      width='24'
      height='44'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 44'
    >
      <path
        d='M10.9393 43.1083C11.5251 43.694 12.4749 43.694 13.0607 43.1083L22.6066 33.5623C23.1924 32.9765 23.1924 32.0268 22.6066 31.441C22.0208 30.8552 21.0711 30.8552 20.4853 31.441L12 39.9263L3.51472 31.441C2.92893 30.8552 1.97919 30.8552 1.3934 31.441C0.807611 32.0268 0.807611 32.9765 1.3934 33.5623L10.9393 43.1083ZM10.5 0L10.5 42.0476H13.5L13.5 0L10.5 0Z'
        fill='white'
      />
    </svg>
  );
};

export default ArrowDownSVG;
