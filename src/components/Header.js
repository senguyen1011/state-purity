import React from "react";

const Header = (props) => {
  const TotalQuestions = 100;
  return (
    <header className='fixed-top'>
      <nav className='navbar navbar-light bg-blur text-center shadow-sm'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-12 mx-auto'>
              <div className='row'>
                <h3 className='font-weight-bolder'>State Purity</h3>
              </div>
          
              <div className='row'>
                <div className='col'>
                  <h5>{props.count}</h5>
                  <h6 className='text-muted'>Questions Answered</h6>
                </div>

                <div className='col'>
                  <h5>{TotalQuestions - props.count}</h5>
                  <h6 className='text-muted'>Classic Purity</h6>
                </div>

                <div className='col'>
                  <h5>{props.score}</h5>
                  <h6 className='text-muted'>Cumulative Score</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
