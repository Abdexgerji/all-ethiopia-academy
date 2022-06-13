import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

('/pictures/img4-croped.jpg');
('/pictures/img5.jpg');
('/pictures/img18-croped.jpg');

const contact = () => {
  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <Carousel
        infiniteLoop
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        // centerMode={true}
        showArrows={true}
        stopOnHover={true}
        // width={'40%'}
      >
        <div>
          <img
            style={{ objectFit: 'cover' }}
            height='300'
            src='/pictures/img4-croped.jpg'
          />
        </div>
        <div>
          <img
            style={{ objectFit: 'cover' }}
            height='300'
            src='/pictures/img5.jpg'
          />
        </div>
        <div>
          <img
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            height='300'
            src='/pictures/img18-croped.jpg'
          />
        </div>
      </Carousel>
    </div>
  );
};

export default contact;
