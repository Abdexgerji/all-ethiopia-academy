const MailSVG = ({ style, width, height, fill, className }) => {
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
      <path
        d='M26.0746 4.8457H3.92676C3.15003 4.84659 2.40536 5.15553 1.85613 5.70477C1.3069 6.254 0.997954 6.99866 0.99707 7.77539V22.2246C0.997954 23.0013 1.3069 23.746 1.85613 24.2952C2.40536 24.8445 3.15003 25.1534 3.92676 25.1543H26.0745C26.8512 25.1534 27.5959 24.8445 28.1451 24.2952C28.6944 23.746 29.0033 23.0013 29.0042 22.2246V7.77539C29.0033 6.99866 28.6944 6.25399 28.1452 5.70475C27.5959 5.15552 26.8513 4.84657 26.0746 4.8457ZM20.8656 14.996L27.8324 9.52816V21.7589L20.8656 14.996ZM3.92676 6.01758H26.0745C26.5405 6.01811 26.9873 6.20347 27.3169 6.53301C27.6464 6.86255 27.8318 7.30935 27.8323 7.77539V8.03848L16.5583 16.8872C16.1461 17.209 15.6381 17.3836 15.1151 17.3831C14.5922 17.3827 14.0844 17.2073 13.6728 16.8848L2.16895 8.03625V7.77539C2.16947 7.30935 2.35484 6.86255 2.68438 6.53301C3.01392 6.20347 3.46072 6.01811 3.92676 6.01758ZM9.34305 15.0328L2.16895 21.7825V9.51469L9.34305 15.0328ZM26.0746 23.9824H3.92676C3.62666 23.9822 3.33161 23.9053 3.06968 23.7588C2.80775 23.6123 2.58767 23.4013 2.43039 23.1457L10.2839 15.757L12.9548 17.8113C13.5724 18.2938 14.3338 18.5558 15.1175 18.5556C15.9013 18.5554 16.6625 18.293 17.2799 17.8102L19.9353 15.7266L27.5739 23.141C27.4169 23.3979 27.1966 23.6101 26.9341 23.7575C26.6715 23.9048 26.3756 23.9822 26.0746 23.9824Z'
        fill={fill ? fill : 'white'}
      />
    </svg>
  );
};

export default MailSVG;