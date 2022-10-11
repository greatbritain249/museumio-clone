type MuseumResponse = {
    value: Museum;
};

type Museum = {
    MuseumName: string;
    rating: number;
    galleryId: string;
    imgUrl: string;
    webUrl: string;
    Lat: number;
    Lng: number;
    Address: string;
    City: string;
    Country: string;
    galleryItem: GalleryItems;
};

type GalleryItems = {
    galleryImages: Items[];
};

type Item = {
    item_id: ID;
    imgUrl: string;
};

type Events = {
    Name: string;
    Event: Events[];
};

type Gallery = {
    Name: string;
    galleryItems: GalleryItems;
    galleryEvents: Events;
};

