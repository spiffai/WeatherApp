    import React, { Component } from 'react';
    import Result from './components/result';
    import BackgroundImage from './backgroundImage';

    //http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=630a44d5028cbc63664ea4f6e9f10942
    //http://api.openweathermap.org/data/2.5/weather?zip=30135,us&APPID=630a44d5028cbc63664ea4f6e9f10942
    const API = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    const API_COUNTRY = ',us';
    const API_APPID = '&APPID=630a44d5028cbc63664ea4f6e9f10942';
    const API_UNITS = '&units=imperial';

    class App extends Component {
        constructor(props){
          super(props);
          this.state ={
            query: '',
            searchResult: [],
            isLoading: true
          };
          this.handleChange = this.handleChange.bind(this);
        }
    
      handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

      search = (e) => {
        e.preventDefault();
        console.log('search was called');
        console.log("state.query val in search: " + this.state.query);
        this.setState({ isLoading: true });
        fetch(API + this.state.query + API_COUNTRY + API_APPID + API_UNITS)
        .then(res => res.json())
        .then((data) => {this.setState({searchResult: data, isLoading: false,}, () => {
          console.log("state.isLoading: " + this.state.isLoading)
          console.log("state.searchresult: " + this.state.searchResult)})
        })
        .catch(console.log)
      }

      render(){
        return(
          <div>
            <BackgroundImage />
            <div class="row">
              <div class="col-lg-2 col-centered">
                <form className="form-inline mr-auto">
                  <input name="query" className="form-control mr-sm-2" type="text" ref={el => this.element = el} onChange={e => this.handleChange(e)} placeholder="Zip Code..." aria-label="Search by Zip"/>
                  <button className="btn btn-outline-success btn-rounded btn-sm my-0" onClick={this.search.bind(this)} type="submit">Search</button>
                </form>
              </div>
            </div>
            <br/><br/>
            <div id="centeredDiv">
              {!this.state.isLoading && <Result searchResult={this.state.searchResult} />}
            </div>
          </div>
        )
      }
    }

    export default App;