export const Section2_Helper = () => {
  const imageCount = 13;
  const bgSizes = ["1920", "1280", "768"];

  const importImages = (count, extension) => {
    const images = [];
    for (let i = 1; i <= count; i++) {
      images.push(
        require(`@/assets/images/landing/section2/section2-${i}.${extension}`)
      );
    }
    return images;
  };

  const importBackgroundImages = (sizes, extension) => {
    const images = [];
    sizes.forEach((size) => {
      images.push(
        require(`@/assets/images/landing/section2/section2-bg-${size}.${extension}`)
      );
    });
    return images;
  };

  const images = importImages(imageCount, "png");
  const bgImages = importBackgroundImages(bgSizes, "svg");

  return { images, bgImages };
};

export const Section4_Helper = () => {
  const imageCount = 4;
  const bgSizes = ["1920", "1280", "768", "375"];
  const importImages = (count, extension) => {
    const images = [];
    for (let i = 1; i <= count; i++) {
      images.push(
        require(`@/assets/images/landing/section4/section4-${i}.${extension}`)
      );
    }
    return images;
  };
  const importBackgroundImages = (sizes, extension) => {
    const images = [];
    sizes.forEach((size) => {
      images.push(
        require(`@/assets/images/landing/section4/section4-bg-${size}.${extension}`)
      );
    });
    return images;
  };

  const images = importImages(imageCount, "png");
  const bgImages = importBackgroundImages(bgSizes, "svg");
  return { images, bgImages };
};
