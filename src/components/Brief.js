import React from 'react';

const Brief = () => {
  return (
    <div className='card brief'>
      <div className='card-body text-center'>
        <h4 className='card-title'>A Weighted Rice Purity Test</h4>
        <h5 className='card-subtitle mb-2 text-muted'>Have you ever...</h5>
        <button 
          className='btn btn-teal badge rounded-pill p-2 shadow-sm' type='button' 
          data-toggle='collapse' data-target='#description' 
          aria-expanded='false' aria-controls='description'
        >
          <svg 
            width='1.4em' height='1.4em' viewBox='0 0 16 16' 
            className='bi bi-question' 
            fill='currentColor' xmlns='http://www.w3.org/2000/svg'
          >
            <path 
              d='M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z'
            />
          </svg>
        </button>
        
        <div className='collapse mt-2' id='description'>
          <div className='card card-body shadow-sm'>
            <p>
              Click on every item you've done. After submitting the test, a Purity Score will be calculated. The Classic 
              Purity Score will be shown for reference. This test differs from the Rice Purity Test in that it looks 
              better and that every question is associated with a weight. This is assuming that not all questions on this
              test equally impact how pure you are. In other words, using methamphetamine is a little more immoral than
              holding hands, and this test reflects that. Checking off severe acts will lower your purity quicker than 
              checking off minor acts.
            </p>
           
            <p className='text-danger font-weight-bold'>
              This is not a bucket list.<br /> Completion of all items on this test will likely result in death.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brief;
