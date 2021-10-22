import "./FilterSlider.scss"
import {
  useState,
  useCallback,
  useEffect,
  useRef
} from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
import {
  FILTER_BY_PRICE
} from '../../store/actions/filter.js'
import useDebounce from '../../store/helpersFn/debouncer.js'

function FilterSlider({ title }) {
  const price = useSelector(state => state.price.price)

  const dispatch = useDebounce(useDispatch(), 200)
  const min = price.min;
  const max = price.max;

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const onChangeLeftThumb = (event) => {
    const value = Math.min(Number(event.target.value), maxVal - 1);
    setMinVal(value);
    minValRef.current = value;
    dispatch({
      type: FILTER_BY_PRICE,
      data: {
        min: value,
        max: maxVal
      }
    })
  }
  const onChangeRgihtThumb = (event) => {
    const value = Math.max(Number(event.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
    dispatch({
      type: FILTER_BY_PRICE,
      data: {
        min: minVal,
        max: value
      }
    })
  }

  return <>
    <div className="filter-container__title">
      {title}
    </div>
    <div className="filter-slider">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={
          (event) => onChangeLeftThumb(event)}
        className="filter-slider__thumb filter-slider__thumb--left"
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => onChangeRgihtThumb(event)}
        className="filter-slider__thumb filter-slider__thumb--right"
      />

      <div className="filter-slider__slider">
        <div className="filter-slider__slider-left-value">{minVal}</div>
        <div className="filter-slider__slider-track" />
        <div ref={range} className="filter-slider__slider-range" />
        <div className="filter-slider__slider-right-value">{maxVal}</div>
      </div>
    </div>
  </>;
};

export default FilterSlider;


