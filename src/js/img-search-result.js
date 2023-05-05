function imgSearchResult(img) {
  return img
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
       <a class="simple-lightbox" href="${largeImageURL}">
        <div class="photo-card">
            <img class="photo-img" src="${webformatURL}" alt="${tags} width="350" loading="lazy"/>
            <div class="info">
              <p class="info-item">
                <b>Likes</b><br>${likes}
              </p>
              <p class="info-item">
                <b>Views</b><br>${views}
              </p>
              <p class="info-item">
                <b>Comments</b><br>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b><br>${downloads}
              </p>
            </div>
          </div>
          </a>
        `
    )
    .join('');
}

export { imgSearchResult };
