import React, { Component, Fragment } from 'react';
import ActList from './ActList';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: 1,
      selectedList: this.props.a1
    }
  }

  render () {
    const denom = this.props.w1 + this.props.w2 + this.props.w3 + this.props.w4 + this.props.w5;
    const w1Percent = (this.props.w1 / denom) * 100;
    const w2Percent = (this.props.w2 / denom) * 100;
    const w3Percent = (this.props.w3 / denom) * 100;
    const w4Percent = (this.props.w4 / denom) * 100;
    const w5Percent = (this.props.w5 / denom) * 100;

    return (
      <div className='card shadow-sm result'>
        <div className='card-body'>
          <div className='row text-center'>
            <div className='col'>
              <h2>{100 - ((this.props.score / 270) * 100).toFixed(1)}</h2>
              <h6 className='text-muted mb-0'>Weighted Purity Score</h6>
            </div>
          </div>
          <hr/>
          { denom > 0 && 
            <div className='progress mb-3'>
              <div className='progress-bar bg-info' style={{ width: `${w1Percent}%` }}>{w1Percent.toFixed(1)}%</div>
              <div className='progress-bar bg-primary' style={{ width: `${w2Percent}%` }}>{w2Percent.toFixed(1)}%</div>
              <div className='progress-bar bg-success' style={{ width: `${w3Percent}%` }}>{w3Percent.toFixed(1)}%</div>
              <div className='progress-bar bg-warning' style={{ width: `${w4Percent}%` }}>{w4Percent.toFixed(1)}%</div>
              <div className='progress-bar bg-danger' style={{ width: `${w5Percent}%` }}>{w5Percent.toFixed(1)}%</div>
            </div>
          }

          <div className='row text-center mb-2'>
            <div className='col'>
              <h4>{this.props.w1}</h4>
              <h6 className='text-info mb-0'>Minor Acts</h6>
              { denom > 0 && 
                <small className='text-muted font-weight-bold'>{w1Percent.toFixed(1)}%</small>
              }
            </div>

            <div className='col'>
              <h4>{this.props.w2}</h4>
              <h6 className='text-primary mb-0'>Immoral Acts</h6>
              { denom > 0 && 
                <small className='text-muted font-weight-bold'>{w2Percent.toFixed(1)}%</small>
              }
            </div>

            <div className='col'>
              <h4>{this.props.w3}</h4>
              <h6 className='text-success mb-0'>Raunchy Acts</h6>
              { denom > 0 && 
                <small className='text-muted font-weight-bold'>{w3Percent.toFixed(1)}%</small>
              }
            </div>
          </div>

          <div className='row text-center'>
            <div className='col'>
              <h4>{this.props.w4}</h4>
              <h6 className='text-warning mb-0'>Scandalous Acts</h6>
              { denom > 0 && 
                <small className='text-muted font-weight-bold'>{w4Percent.toFixed(1)}%</small>
              }
            </div>

            <div className='col'>
              <h4>{this.props.w5}</h4>
              <h6 className='text-danger mb-0'>Unspeakable Acts</h6>
              { denom > 0 && 
                <small className='text-muted font-weight-bold'>{w5Percent.toFixed(1)}%</small>
              }
            </div>
          </div>
          { denom > 0  &&
            <Fragment>
              <hr/>
              <ul className='nav nav-pills nav-fill mb-3'>
                <li className='nav-item'>
                  <btn 
                    className={this.state.selectedNav === 1 ? 'nav-link active bg-info' : 'nav-link text-teal'}
                    onClick={
                      () => this.setState({ 
                        selectedNav: 1,
                        selectedList: this.props.a1
                      })
                    }
                  >
                    Minor
                  </btn>
                </li>
                <li className='nav-item'>
                  <btn 
                    className={this.state.selectedNav === 2 ? 'nav-link active bg-primary' : 'nav-link text-teal'}
                    onClick={
                      () => this.setState({ 
                        selectedNav: 2,
                        selectedList: this.props.a2
                      })
                    }
                  >
                    Immoral
                  </btn>
                </li>
                <li className='nav-item'>
                  <btn 
                    className={this.state.selectedNav === 3 ? 'nav-link active bg-success' : 'nav-link text-teal'}
                    onClick={
                      () => this.setState({ 
                        selectedNav: 3,
                        selectedList: this.props.a3
                      })
                    }
                  >
                    Raunchy
                  </btn>
                </li>
                <li className='nav-item'>
                  <btn 
                    className={this.state.selectedNav === 4 ? 'nav-link active bg-warning' : 'nav-link text-teal'}
                    onClick={
                      () => this.setState({ 
                        selectedNav: 4,
                        selectedList: this.props.a4
                      })
                    }
                  >
                    Scandalous
                  </btn>
                </li>
                <li className='nav-item'>
                  <btn 
                    className={this.state.selectedNav === 5 ? 'nav-link active bg-danger' : 'nav-link text-teal'}
                    onClick={
                      () => this.setState({ 
                        selectedNav: 5,
                        selectedList: this.props.a5
                      })
                    }
                  >
                    Unspeakable
                  </btn>
                </li>
              </ul>
              <ActList acts={this.state.selectedList} />
            </Fragment>
          }
        </div>
      </div>
    );
  }
}

export default Result;
