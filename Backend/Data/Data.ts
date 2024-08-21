export type TItem = {
    id:number;
    name: string,
    image: string,
    price: number,
    rating: number,
    isAvailable: boolean,
    isNew?:boolean,
    offer?:number,
    sizes: { [key: string]: number };
    description: string;
}

export var data: TItem[] = [
    {
        id: 1,
        name: 'Ethnic Yellow Kurthi',
        image: 'https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48166.jpg?t=st=1723172331~exp=1723175931~hmac=b3948937c06e48c0b767894158aa7ce102bc7064c03399d826ed15a75b288562&w=740',
        price: 50.29,
        rating: 4.4,
        isAvailable: true,
        isNew: true,
        offer: 30,
        sizes: { S: 0, M: 0, L: 1, XL: 2, XXL: 3 },
        description: 'A vibrant yellow Kurthi with ethnic design, perfect for festive occasions.'
    },
    {
        id: 2,
        name: 'Trendy Brown Kurthi',
        image: 'https://img.freepik.com/free-photo/woman-s-floral-pattern-long-dress-apparel-remix-from-artworks-by-megata-morikaga_53876-95951.jpg?ga=GA1.1.1047697308.1723172278&semt=ais_hybrid',
        price: 80.90,
        rating: 4.6,
        isAvailable: true,
        offer: 40,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A stylish brown Kurthi with floral patterns, ideal for casual outings.'
    },
    {
        id: 3,
        name: 'Short Yellow Dress',
        image: 'https://img.freepik.com/free-photo/young-woman-beautiful-yellow-dress_1303-17541.jpg?t=st=1723172912~exp=1723176512~hmac=cfe9f937b1ac8a5a88d138cc9330a2dd29e3d0cd160b64bd24acf47bf490ce2c&w=740',
        price: 35.60,
        rating: 4.6,
        isAvailable: true,
        offer: 25,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A cute short yellow dress, perfect for a summer day out.'
    },
    {
        id: 4,
        name: 'Trendy Green Saree',
        image: 'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400840.jpg?t=st=1723175134~exp=1723178734~hmac=572e3036f7a26cf669fb4b514ae1438a06e87b73c3da7097501e643673e1e794&w=740',
        price: 45.80,
        rating: 4.8,
        isAvailable: true,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A trendy green saree with a modern touch, great for both casual and formal events.'
    },
    {
        id: 5,
        name: 'Classic Office Wear',
        image: 'https://img.freepik.com/free-photo/front-view-beautiful-woman-posing_23-2149448597.jpg?t=st=1723175263~exp=1723178863~hmac=1f0945056d37eb85fd12fa1c8a245f7940f91d7a7ca9c43a2a39e148ddc2950b&w=740',
        price: 55.30,
        rating: 4.7,
        isAvailable: true,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A classic office wear outfit that combines style and professionalism.'
    },
    {
        id: 6,
        name: 'Red Floral Dress',
        image: 'https://img.freepik.com/free-photo/young-brunette-woman-red-floral-dress-looks-into-left-gently-touches-her-arm-asian-lady-poses-cozy-light-living-room_197531-27902.jpg?ga=GA1.1.1047697308.1723172278&semt=ais_hybrid',
        price: 75.60,
        rating: 4.6,
        isAvailable: false,
        sizes: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
        description: 'A beautiful red floral dress perfect for a romantic evening.'
    },
    {
        id: 7,
        name: 'Red Printed Saree',
        image: 'https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400882.jpg?t=st=1723175413~exp=1723179013~hmac=bca1725ae6c455f99344226859ea193747d9c89f56c00bde9e067853ccaaeb42&w=996',
        price: 65.99,
        rating: 4.4,
        isAvailable: false,
        sizes: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
        description: 'A red printed saree that brings out the traditional elegance in modern style.'
    },
    {
        id: 8,
        name: 'Red Trendy Frock',
        image: 'https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg?t=st=1723175464~exp=1723179064~hmac=5ce8621118efe2478e49c0952a600ca0196b590b1e93f3bd5f563c7c2d1b0e9f&w=996',
        price: 35.20,
        rating: 4.2,
        isNew: true,
        isAvailable: true,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A trendy red frock that adds a splash of color to any occasion.'
    },
    {
        id: 9,
        name: 'Classic Wear',
        image: 'https://img.freepik.com/free-photo/middle-age-woman-smiling-having-good-time_23-2149218586.jpg?t=st=1723175550~exp=1723179150~hmac=ebdbc25b09602edd04772aca189b72bc489741d175c4f301bc2fbe262dc6902a&w=996',
        price: 38.90,
        rating: 4.5,
        isAvailable: true,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A timeless classic wear that blends comfort and style seamlessly.'
    },
    {
        id: 10,
        name: 'Floral White Wear',
        image: 'https://img.freepik.com/free-photo/curly-woman-white-dress-smiling-orange-background-young-shy-girl-with-wavy-hair-cherry-print-clothes-looking-into-camera_197531-18943.jpg?t=st=1723175673~exp=1723179273~hmac=ffd8f931ca744ab556a621b27fc3e618f663d5c566357ad36277644e4c210c35&w=996',
        price: 40.40,
        rating: 4.6,
        isAvailable: true,
        sizes: { S: 2, M: 3, L: 1, XL: 2, XXL: 3 },
        description: 'A charming floral white dress that’s perfect for a sunny day out.'
    },
    {
        id: 11,
        name: 'Beautiful Casual Wear',
        image: 'https://img.freepik.com/free-photo/beautiful-girl-street_1157-4696.jpg?t=st=1723175771~exp=1723179371~hmac=a1287f01208bb679a57d80294923e83d573ec71df55625fd985368f1624fd2f0&w=996',
        price: 45.60,
        rating: 4.8,
        isAvailable: false,
        sizes: { S: 0, M: 0, L: 0, XL: 0, XXL: 0 },
        description: 'A beautiful casual wear outfit that exudes effortless style.'
    }
];
