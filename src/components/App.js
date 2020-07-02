import React, { Component, Fragment } from 'react';
import './App.css';
import Brief from './Brief';
import Header from './Header';
import QuestionList from './QuestionList';
import Result from './Result';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isComplete: false,
      score: 0,
      count: 0,
      w1: 0,
      w2: 0,
      w3: 0,
      w4: 0,
      w5: 0,
      a1: [],
      a2: [],
      a3: [],
      a4: [],
      a5: []
    }
  }

  updateScore = (weight, content) => {
    weight = Number(weight);

    this.setState({
      score: this.state.score + weight,
      count: this.state.count + 1
    });

    const decrement = weight < 0;
    let add = 1;

    if (decrement) {
      weight = weight * -1;
      add = -1;
    }

    this.setState({ count: this.state.count + add });

    switch (weight) {
      case 1:
        this.setState({ w1: this.state.w1 + add });
        if (decrement) {
          this.setState({a1: this.state.a1.filter((act) => {
            return act !== content
          })});
        }
        else {
          this.setState({a1: [...this.state.a1, content]})
        }
        break;
      case 2:
        this.setState({ w2: this.state.w2 + add });
        if (decrement) {
          this.setState({a2: this.state.a2.filter((act) => {
            return act !== content
          })});
        }
        else {
          this.setState({a2: [...this.state.a2, content]})
        }
        break;
      case 3:
        this.setState({ w3: this.state.w3 + add });
        if (decrement) {
          this.setState({a3: this.state.a3.filter((act) => {
            return act !== content
          })});
        }
        else {
          this.setState({a3: [...this.state.a3, content]});
        }
        break;
      case 4:
        this.setState({ w4: this.state.w4 + add });
        if (decrement) {
          this.setState({a4: this.state.a4.filter((act) => {
            return act !== content
          })});
        }
        else {
          this.setState({a4: [...this.state.a4, content]});
        }
        break;
      case 5:
        this.setState({ w5: this.state.w5 + add });
        if (decrement) {
          this.setState({a5: this.state.a5.filter((act) => {
            return act !== content
          })});
        }
        else {
          this.setState({a5: [...this.state.a5, content]});
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Fragment>
        <Header score={this.state.score} count={this.state.count} />
        <main>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-8 col-12 mx-auto'>
                <Brief />
                <div className='card shadow-sm'>
                  <div className='card-body'>
                    <QuestionList onCheck={this.updateScore} />
                    <button type='submit' className='btn btn-block btn-outline-teal mt-4' 
                      onClick={() => this.setState({ isComplete: true })}
                    >
                      See Results
                    </button>
                  </div>
                </div>

                { this.state.isComplete &&
                  <Result 
                    w1={this.state.w1}
                    w2={this.state.w2}
                    w3={this.state.w3}
                    w4={this.state.w4}
                    w5={this.state.w5}
                    a1={this.state.a1}
                    a2={this.state.a2}
                    a3={this.state.a3}
                    a4={this.state.a4}
                    a5={this.state.a5}
                    score={this.state.score} 
                  />
                }
                
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div class="container text-center font-italic text-muted p-4">
            Spartans Will
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default App;
