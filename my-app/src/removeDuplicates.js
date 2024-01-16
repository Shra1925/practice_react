import {useState} from 'react';

const RemoveDuplicatesFun = () => {
  const words = ['bobby', 'bobby', 'hadz', 'hadz', 'com'];
  const [state, setState] = useState(words);

  const withoutDuplicates = [...new Set(words)];

  // 👇️ ['bobby', 'hadz', 'com']
  console.log(withoutDuplicates);

  const removeDuplicates = () => {
    setState(prevState => [...new Set(prevState)]);
  };

  return (
    <div>
      <button onClick={removeDuplicates}>
        Remove duplicates
      </button>

      {state.map((word, index) => {
        return (
          <div key={index}>
            <h2>{word}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RemoveDuplicatesFun;