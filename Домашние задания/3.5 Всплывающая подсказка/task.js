const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();

    const nextElement = element.nextElementSibling;
    const isTooltipOpenHere = nextElement && nextElement.classList.contains('tooltip');

    document.querySelectorAll('.tooltip').forEach(t => t.remove());

    if (isTooltipOpenHere) {
      return;
    }

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip', 'tooltip_active');
    tooltip.textContent = element.getAttribute('title');

    element.insertAdjacentElement('afterend', tooltip);

    const elementRect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const position = element.dataset.position || 'bottom';

    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = elementRect.top - tooltipRect.height;
        left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
        left = elementRect.left - tooltipRect.width;
        break;
      case 'right':
        top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
        left = elementRect.right;
        break;
      case 'bottom':
      default:
        top = elementRect.bottom;
        left = elementRect.left;
        break;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.tooltip').forEach(t => t.remove());
});