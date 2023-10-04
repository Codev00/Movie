export const randomImages = (images: string[]) => {
   const res = Math.floor(Math.random() * images.length);
   return images[res];
};

export const toTime = (time: number) => {
   const hours = Math.floor(time / 60);
   const minutes = time % 60;
   return `${hours}h ${minutes > 0 ? `${minutes}m` : ""}`;
};
