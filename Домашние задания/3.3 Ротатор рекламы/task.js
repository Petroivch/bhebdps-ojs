const rotators = Array.from(document.querySelectorAll('.rotator'));

rotators.forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = cases.findIndex(item => item.classList.contains('rotator__case_active'));

  function rotate() {
    cases[index].classList.remove('rotator__case_active');

    index = (index + 1) % cases.length;

    const activeCase = cases[index];
    activeCase.classList.add('rotator__case_active');
    activeCase.style.color = activeCase.dataset.color;

    setTimeout(rotate, Number(activeCase.dataset.speed));
  }

  const activeCase = cases[index];
  activeCase.style.color = activeCase.dataset.color;

  setTimeout(rotate, Number(activeCase.dataset.speed));
});