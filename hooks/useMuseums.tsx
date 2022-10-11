
import { useQuery } from '@apollo/client'
import { useEffect, useState } from "react"
import { GET_MUSEUMS } from '../graphql/queries';


const useMuseums = () => {
    const { loading, error, data } = useQuery(GET_MUSEUMS);
    const [museums, setMuseum] = useState<Museum[]>([]);

    useEffect(() => {
        if (!data) return;

        const museums: Museum[] = data.getMuseums.map(({ value} : MuseumResponse) => ({
            MuseumName: value.MuseumName,
            rating: value.rating,
            galleryId: value.galleryId,
            imgUrl: value.imgUrl,
            webUrl: value.webUrl,
            Lat: value.Lat,
            Lng: value.Lng,
            Address: value.Address,
            City: value.City,
            Country: value.Country,
        }));


        
        setMuseum(museums);
    }, [data]);

  return { loading, error, museums };
};

export default useMuseums;