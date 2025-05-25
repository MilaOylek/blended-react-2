import type { Photo } from "../../types/photo";
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

import { Grid, GridItem } from '../Grid/Grid';

interface Props {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const PhotosGallery = ({ photos, onPhotoClick }: Props) => (
  <Grid>
    {photos.map(photo => (
      <GridItem key={photo.id}>
        <PhotosGalleryItem photo={photo} onClick={() => onPhotoClick(photo)} />
      </GridItem>
    ))}
  </Grid>
);

export default PhotosGallery;
