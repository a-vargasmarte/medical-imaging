import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Components/Images/image';
import Modal from './Components/Modal/modal';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import Annotation from 'react-image-annotation';
import RectangleSelector from 'react-image-annotation/lib/selectors';
import img from './assets/images/5/5/50000.jpg';
import imgTwo from './assets/images/5/5/50001.jpg';

class App extends Component {
  state = {
    images: [],
    selectedOption: {
      value: './assets/images/5/5/50000.jpg',
      label: '50000.jpg'
    },
    selectedImage: '',
    radioValue: '',
    savedImages: [],
    annotations: [],
    annotation: {},
    testAnnotations: [],
    type: RectangleSelector
  }
  componentDidMount() {
    axios.get(`/api/medicalImaging/local/images`)
      .then(res => {
        let images = this.state.images;
        images = res.data;
        this.setState({ images: images });
        console.log(this.state)
      })
      .catch(err => console.log(err));
  }

  handleModal = (e) => {
    console.log(e.target)
    let imageObject = {
      image: {
        radioValue: this.state.radioValue,
        imageUrl: e.target.value
      }

    };


    // post to axios
    axios.post(`/api/medicalImaging/images`, imageObject)
      .then(res => {
        console.log(res);
        let savedImages = this.state.savedImages.push(res);
        console.log(savedImages)
        this.setState({ savedImages: savedImages })
      })
      .catch(err => console.log(err))

  }

  handleSelectChange = (selectedOption) => {
    console.log(selectedOption)
    console.log(this.state.selectedOption)
    this.setState({ selectedOption });
    console.log(this.state.selectedOption)
  }

  handleChange = (e) => {
    let radioValue = this.state.radioValue;
    // console.log(radioValue)
    this.setState({ radioValue: e.target.value })
  }

  annotationOnChange = (annotation) => {
    this.setState({ annotation })
  }

  annotationOnSubmit = (annotation) => {
    const { geometry, data } = annotation;
    let testAnnotations = this.state.testAnnotations;
    testAnnotations.push(annotation);

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      }),
      testAnnotations: testAnnotations
    })

    console.log(this.state)
  }


  render() {


    return (
      <div className="App">

        <Select
          value={this.state.selectedOption}
          onChange={this.handleSelectChange}
          options={this.state.images}
          isSearchable={true}
          isClearable={true}
          placeholder='Select an image..' />

        <div className="row">
          <div className="col-md-4">
            <Annotation
              src={require(`${this.state.selectedOption.value}`)}
              alt="generic description"
              annotations={this.state.annotations}
              type={this.state.type}
              value={this.state.annotation}
              onChange={this.annotationOnChange}
              onSubmit={this.annotationOnSubmit}
            />
          </div>

        </div>


        {this.state.images.map((image, i) => {
          return (
            <React.Fragment key={`fragment${i}`}>
              {/* <Image key={i} src={require(`${image}`)} />
              <Modal key={'modal' + i} modalTarget={`modal${i}`} onClick={this.handleModal} onChange={this.handleChange} imageValue={image} /> */}


            </React.Fragment>
          )


        })}

      </div>
    );
  }
}

export default App;
