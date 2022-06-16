import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return (
    <div
      className='carousel-wrapper'
      style={{
        width: '95%', //! this width is the width of the carousel
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      <Carousel
        infiniteLoop
        // animationHandler={'fade'}
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        // centerMode={true}
        showArrows={true}
        showStatus={false}
        stopOnHover={true}
        // width={'40%'}
      >
        <div>
          <img
            style={{ objectFit: 'cover' }}
            height='500' //! this height is the height of the carousel
            src='/pictures/img4-croped.jpg'
          />
        </div>
        <div>
          <img
            style={{ objectFit: 'cover' }}
            height='500' //! this height is the height of the carousel
            src='/pictures/img5.jpg'
          />
        </div>
        <div>
          <img
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            height='500' //! this height is the height of the carousel
            src='/pictures/img18-croped.jpg'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
