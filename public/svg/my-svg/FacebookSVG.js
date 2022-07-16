const FacebookSVG = ({ style, width, height, fill, className }) => {
  return (
    <svg
      className={className}
      style={{ ...style }}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 30 30'
    >
      <path
        d='M22.488 1.99458C21.2271 1.86114 19.9597 1.79629 18.6917 1.80048C14.4875 1.80048 11.8752 4.47741 11.8752 8.78779V11.7138H8.34375C7.99875 11.7136 7.7189 11.9931 7.71875 12.3381V17.152C7.71852 17.497 7.99806 17.7768 8.34306 17.777H11.8752V27.4255C11.875 27.7705 12.1546 28.0503 12.4996 28.0505H17.4722C17.8172 28.0507 18.0969 27.7712 18.0972 27.4262V17.777H21.6178C21.9318 17.777 22.1971 17.544 22.2379 17.2326L22.8592 12.4194C22.9038 12.0773 22.6627 11.7637 22.3205 11.7191C22.2935 11.7156 22.2663 11.7138 22.2391 11.7138H18.0972V9.26508C18.0972 8.05293 18.3413 7.54633 19.8574 7.54633L22.4063 7.54511C22.7513 7.54527 23.031 7.2658 23.0313 6.9208V2.61469C23.0313 2.30097 22.799 2.03577 22.488 1.99458ZM21.7813 6.29511L19.8574 6.29633C17.1597 6.29633 16.8472 7.99067 16.8472 9.26508V12.3389C16.847 12.6838 17.1265 12.9637 17.4715 12.9638H21.5286L21.0684 16.527H17.4722C17.1272 16.5269 16.8474 16.8064 16.8472 17.1514V26.8005H13.1252V17.152C13.1255 16.807 12.8459 16.5273 12.501 16.527H8.96875V12.9638H12.5002C12.8452 12.964 13.125 12.6845 13.1252 12.3395V8.78779C13.1252 5.19526 15.2065 3.05048 18.6917 3.05048C19.9526 3.05048 21.0916 3.11884 21.7813 3.17866V6.29511Z'
        fill={fill ? fill : 'white'}
        strokeWidth=' 0.6px'
        stroke={fill ? 'black' : ''}
      />
    </svg>
  );
};

export default FacebookSVG;