import React, { useState } from "react";

const generateRandomText = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

const Content = () => {
  const [textLength, setTextLength] = useState(5);
  const [generatedText, setGeneratedText] = useState('Output will be here.');

  const handleGenerate = () => {
    const clampedLength = Math.max(5, Math.min(textLength, 32));
    setTextLength(clampedLength);

    const newText = generateRandomText(clampedLength);
    setGeneratedText(newText);
  };

  return (

    <div className="flex flex-col text-center mt-[66px] px-10  justify-center items-center">
      <section>
        <h1 className='text-2xl lg:text-4xl font-bold'>Random String Generator</h1>
        <p className='text-lg mt-2'>Generate random text strings.</p>
      </section>
      <section>
        <section className="py-3">
            <section className="py-2">
              <h1 className="text-sm">Text Length <br/>(min : 5, max : 32 )</h1>
            </section>
            <input type="number" placeholder="Input here..." className="input input-bordered w-full input-sm" value={textLength} min="5" max="32" onChange={(e) => setTextLength(e.target.value)} />
        </section>
        <section>
          <button className="btn btn-block btn-sm" onClick={handleGenerate}>GENERATE</button>
        </section>
      </section>
      <section className="pt-4">
        <h1 className='bg-neutral px-5 py-1 rounded text-white truncate'>{generatedText}</h1>
      </section>
    </div>

    // <div>
    //   <h1>Random Text Generator</h1>
    //   <label>
    //     Text Length:
    //     <input type="number" value={textLength} onChange={(e) => setTextLength(e.target.value)} />
    //   </label>
    //   <br />
    //   <label>
    //     Include Uppercase:
    //     <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
    //   </label>
    //   <br />
    //   <label>
    //     Include Lowercase:
    //     <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
    //   </label>
    //   <br />
    //   <label>
    //     Include Digits:
    //     <input type="checkbox" checked={includeDigits} onChange={() => setIncludeDigits(!includeDigits)} />
    //   </label>
    //   <br />
    //   <button onClick={handleGenerate}>Generate</button>
    //   <br />
    //   <div>
    //     <h2>Generated Text:</h2>
    //     <textarea rows="3" value={generatedText} readOnly />
    //   </div>
    // </div>
  );
};

export default Content;
