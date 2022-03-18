const dragElement = (e) => {
  if (e.target.type !== 'button') {
    e.preventDefault();
    const element = e.currentTarget;
    const startPosX = e.clientX;
    const startPosY = e.clientY;

    let posX;
    let posY;

    const dragMove = (e) => {
      const offsetX = e.clientX - startPosX;
      const offsetY = e.clientY - startPosY;
      const { currX, currY } = element.dataset;
      posX = (currX) ? `${+currX + +offsetX}` : `${offsetX}`;
      posY = (currY) ? `${+currY + +offsetY}` : `${offsetY}`;
      element.style.transform = `translate(${posX}px, ${posY}px)`;
    };
    const dragDrop = () => {
      if (posX) element.dataset.currX = posX;
      if (posY) element.dataset.currY = posY;
      document.removeEventListener('mousemove', dragMove);
      document.removeEventListener('mouseup', dragDrop);
    };
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragDrop);
  }
};

export default dragElement;
