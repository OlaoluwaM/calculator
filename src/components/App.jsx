export default function App() {
  return (
    <div className='calculator-container inset-0 absolute text-white w-80 h-4/5 rounded-3xl'>
      <div className='output w-full h-64 relative flex justify-end items-center flex-col px-6'>
        <input
          className='expression-input w-full block bottom-0 top-0 text-right font-normal mb-4 bg-transparent pr-2'
          value='114 x 5'
        />
        <output className='numeric-output w-full block text-right text-7xl font-extralight flex justify-end items-end mb-3'>
          570
        </output>
      </div>
      <div className='keypad p-4 grid grid-cols-4 gap-3 place-items-center text-1xl text-center'>
        <button className='calc-buttons symbol'>C</button>
        <button className='calc-buttons symbol'>+/-</button>
        <button className='calc-buttons symbol'>%</button>
        <button className='calc-buttons symbol-color'>/</button>

        <button className='calc-buttons text-base'>7</button>
        <button className='calc-buttons text-base'>8</button>
        <button className='calc-buttons text-base'>9</button>
        <button className='calc-buttons symbol-color'>×</button>

        <button className='calc-buttons text-base'>4</button>
        <button className='calc-buttons text-base'>5</button>
        <button className='calc-buttons text-base'>6</button>
        <button className='calc-buttons symbol-color'>−</button>

        <button className='calc-buttons text-base'>1</button>
        <button className='calc-buttons text-base'>2</button>
        <button className='calc-buttons text-base'>3</button>
        <button className='calc-buttons symbol-color'>{String.fromCharCode(43)}</button>

        <button className='calc-buttons text-base'>0</button>
        <button className='calc-buttons text-base'>00</button>
        <button className='calc-buttons text-base'>.</button>
        <button className='calc-buttons symbol-equals text-3xl font-semibold p-2.5'>
          {String.fromCharCode(61)}
        </button>
      </div>
    </div>
  );
}
