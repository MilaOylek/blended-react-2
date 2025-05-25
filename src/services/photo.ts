// import axios from 'axios';
// import type { Photo } from '../types/photo';

// const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
// };

// interface PexelsPhotoSrc {
//   large: string;
//   original: string;
// }

// interface PexelsPhoto {
//   id: number;
//   avg_color: string;
//   alt: string;
//   src: PexelsPhotoSrc;
// }

// interface PexelsResponse {
//   photos: PexelsPhoto[];
// }

// export const fetchPhotosByQuery = async (query: string): Promise<Photo[]> => {
//   const { data } = await axios.get<PexelsResponse>('/search', {
//     params: {
//       query,
//       per_page: 20,
//     },
//   });

//   return data.photos.map(photo => ({
//     id: photo.id,
//     avg_color: photo.avg_color,
//     alt: photo.alt,
//     src: {
//       large: photo.src.large,
//       original: photo.src.original,
//     },
//   }));
// };

import axios from 'axios';
import type { Photo } from '../types/photo';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
};

interface PexelsPhotoSrc {
  large: string;
  original: string;
}

interface PexelsPhoto {
  id: number;
  avg_color: string;
  alt: string;
  src: PexelsPhotoSrc;
}

interface PexelsResponse {
  photos: PexelsPhoto[];
}

export const fetchPhotosByQuery = async (
  query: string,
  page: number = 1
): Promise<Photo[]> => {
  const { data } = await axios.get<PexelsResponse>('/search', {
    params: {
      query,
      per_page: 20,
      page,
    },
  });

  return data.photos.map(photo => ({
    id: photo.id,
    avg_color: photo.avg_color,
    alt: photo.alt,
    src: {
      large: photo.src.large,
      original: photo.src.original,
    },
  }));
};
