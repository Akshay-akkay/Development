const overlay = document.querySelectorAll('.overlay');
const album = document.querySelectorAll('.album');

window.onload = () => {
  Object.entries(album).forEach((albumItem) => {
    const index = albumItem[0];
    // console.log(albumItem);
    albumItem[1].style.background = 'url(https://source.unsplash.com/random)';
    albumItem[1].addEventListener('mouseover', () => {
      console.log('Album Clicked. Index : ', index);
      overlay[index].style.display = 'flex';
      //   overlay[index].style.height = '100%';
      //   overlay[index].style.width = '100%';
      //   overlay[index].style.background = 'white';
    });
    albumItem[1].addEventListener('mouseout', () => {
      console.log('Album Clicked. Index : ', index);
      overlay[index].style.display = 'none';
      //   overlay[index].style.height = '100%';
      //   overlay[index].style.width = '100%';
      //   overlay[index].style.background = 'white';
    });
  });
};
