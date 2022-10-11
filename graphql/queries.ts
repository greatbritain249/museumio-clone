import { gql } from '@apollo/client';

export const GET_MUSEUMS = gql`
  query GetMuseums   {
    getMuseums {
      name
      value {
        MuseumName
        Address
        City
        Country
        Lat
        Lng
        galleryId
        imgUrl
        rating
        webUrl
        galleryItems {
          gallery_id
          gallery {
            galleryImages
          }
        }
      }
    }
  }
`;

