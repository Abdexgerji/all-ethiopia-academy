import Image from 'next/image';

const NextImage = ({ src, alt, ...otherProps }) => {
  return (
    <div className='image-wrapper'>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        {...otherProps} // for other props
      />
    </div>
  );
};

export default NextImage;
