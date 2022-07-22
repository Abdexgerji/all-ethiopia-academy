import Image from 'next/image';

const NextImage = ({ src, alt, otherProps }) => {
  return (
    <div className='image-wrapper'>
      <Image
        // loader={myLoader}
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        {...otherProps}
      />
    </div>
  );
};

export default NextImage;
