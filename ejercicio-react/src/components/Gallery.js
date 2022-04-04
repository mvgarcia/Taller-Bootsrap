import { Card } from './Card';
import './Gallery.scss';

export const Gallery = (props) => {
    const { characters_ } = props;
    return (
        <div className='gallery-container'>
        {characters_.map((elm, index) => (
          <Card
            key={index}
            title={elm.name}
            url={elm.image}
            gender={elm.gender}
            status={elm.status}
          ></Card>
        ))}
      </div>
    );
  };


