document.addEventListener('pointermove', (event) => {
  const x = (event.clientX / window.innerWidth - .5) * 12;
  const y = (event.clientY / window.innerHeight - .5) * 12;
  document.querySelector('.orb-one').style.transform = `translate(${x}px, ${y}px)`;
  document.querySelector('.orb-two').style.transform = `translate(${-x}px, ${-y}px)`;
});
