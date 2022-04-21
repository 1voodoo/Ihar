import * as noUiSlider from 'nouislider';

function rangeInit() {
  const rangeItems = document.querySelectorAll('[data-range]')
  if (rangeItems.length) {
    rangeItems.forEach(rangeItem => {
      const fromValue = rangeItem.querySelector('[data-range-from]');
      const toValue = rangeItem.querySelector('[data-range-to]');
      const item = rangeItem.querySelector('[data-range-item]');
      noUiSlider.create(item, {
        start: [Number(fromValue.value), Number(toValue.value)],
        connect: true,
        tooltips: [true, true],
        range: {
          'min': [Number(fromValue.dataset.rangeFrom)],
          'max': [Number(toValue.dataset.rangeTo)]
        }
      });
      item.noUiSlider.on('update', function(values, handle) {
        fromValue.value = values[handle]
        toValue.value = values[handle]
      })
    });
  }
}
rangeInit();