import type { Photo } from '../../types/photo';
import styles from './PhotosGalleryItem.module.css';

interface Props {
  photo: Photo;
  onClick: () => void;
}

const PhotosGalleryItem = ({ photo, onClick }: Props) => (
  <div
    className={styles.thumb}
    style={{ backgroundColor: photo.avg_color, borderColor: photo.avg_color }}
    onClick={onClick}
  >
    <img src={photo.src.large} alt={photo.alt} />
  </div>
);

export default PhotosGalleryItem;
