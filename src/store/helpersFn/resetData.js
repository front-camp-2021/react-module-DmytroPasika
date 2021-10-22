export const resetDataFromFilters = () => {
    const checkboxes = document.querySelectorAll('.filter-container__checkbox');
    const sliderMin = document.querySelector('.filter-slider__thumb--left')
    const sliderMax = document.querySelector('.filter-slider__thumb--right')
    const sliderRange = document.querySelector('.filter-slider__slider-range')
    const sliderLeftPrice = document.querySelector('.filter-slider__slider-left-value')
    const sliderRightPrice = document.querySelector('.filter-slider__slider-right-value')
    
    checkboxes.forEach(item => item.checked ? item.checked = false : '')
    sliderMin.value = 53
    sliderMax.value = 85000
    sliderLeftPrice.innerHTML = 53
    sliderRightPrice.innerHTML = 85000
    sliderRange.style = 'left: 0%; width: 100%'
}