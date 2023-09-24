export const randomImages = (images: string[]) => {
   const res = Math.floor(Math.random() * images.length);
   return images[res];
};
