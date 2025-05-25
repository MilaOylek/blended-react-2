// import { useState } from 'react';
// import { fetchPhotosByQuery } from '../../services/photo';
// import type { Photo } from '../../types/photo';
// import Form from '../Form/Form';
// import Modal from '../Modal/Modal';
// import Loader from '../Loader/Loader';
// import Text from '../Test/Test';
// import PhotosGallery from '../PhotosGallery/PhotosGallery';

// const App = () => {
//   const [photos, setPhotos] = useState<Photo[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

//   const handleSearch = async (query: string) => {
//     if (!query.trim()) return;

//     setIsLoading(true);
//     setIsError(false);

//     try {
//       const fetchedPhotos = await fetchPhotosByQuery(query);
//       setPhotos(fetchedPhotos);
//     } catch (error) {
//       console.error(error);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const openModal = (photo: Photo) => {
//     setSelectedPhoto(photo);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedPhoto(null);
//     document.body.style.overflow = '';
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSearch} />

//       {isLoading && <Loader />}

//       {isError && <Text text="Something went wrong. Try again." />}

//       {photos.length > 0 && (
//         <PhotosGallery photos={photos} onPhotoClick={openModal} />
//       )}

//       {selectedPhoto && (
//         <Modal onClose={closeModal}>
//           <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';
import { fetchPhotosByQuery } from '../../services/photo';
import type { Photo } from '../../types/photo';
import Form from '../Form/Form';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import Text from '../Test/Test';
import PhotosGallery from '../PhotosGallery/PhotosGallery';

const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setIsError(false);
    setQuery(searchQuery);
    setPage(1);

    try {
      const fetchedPhotos = await fetchPhotosByQuery(searchQuery, 1);
      setPhotos(fetchedPhotos);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const nextPage = page + 1;
      const fetchedPhotos = await fetchPhotosByQuery(query, nextPage);
      setPhotos(prev => [...prev, ...fetchedPhotos]);
      setPage(nextPage);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = '';
  };

  return (
    <div>
      <Form onSubmit={handleSearch} />

      {isLoading && <Loader />}

      {isError && <Text text="Something went wrong. Try again." />}

      {photos.length > 0 && (
        <>
          <PhotosGallery photos={photos} onPhotoClick={openModal} />
          {!isLoading && (
            <button onClick={loadMore} style={{ marginTop: 20 }}>
              Load More
            </button>
          )}
        </>
      )}

      {selectedPhoto && (
        <Modal onClose={closeModal}>
          <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
        </Modal>
      )}
    </div>
  );
};

export default App;
