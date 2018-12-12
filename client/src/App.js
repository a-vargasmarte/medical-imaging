import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import ImageSelect from './Components/Images/ImageSelect';
import Annotation from 'react-image-annotation'
import RectangleSelector from 'react-image-annotation/lib/selectors';

class App extends Component {
  state = {
    images: [],
    selectedOption: {
      value: './assets/images/5/5/50000.jpg',
      label: '50000.jpg'
    },
    selectedImage: '',
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

  handleSelectChange = (selectedOption) => {
    console.log(selectedOption)
    console.log(this.state.selectedOption)
    this.setState({ selectedOption });
    console.log(this.state.selectedOption)
  }

  annotationOnChange = (annotation) => {
    this.setState({ annotation })
  }

  annotationOnSubmit = (annotation) => {
    const { geometry, data } = annotation;
    let testAnnotations = this.state.testAnnotations;
    let annotations = this.state.annotations.concat({
      geometry,
      data: {
        ...data,
        id: Math.random()
      }
    });

    testAnnotations.push(annotations);

    console.log(annotations);

    this.setState({
      annotation: {},
      annotations: annotations,
      testAnnotations: testAnnotations
    })

    let imageObject = {
      image: {
        url: this.state.currentImage
      }
    }

    let annotationObject = {
      annotation: annotations,
      imageId: ''
    }


    axios.post(`/api/medicalImaging/images`, imageObject)
      .then(res => {
        console.log(res.data);
        annotationObject.imageId = res.data._id
        console.log(annotationObject)
        axios.post(`/api/medicalImaging/images/annotations/${res.data._id}`, annotationObject)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }


  render() {


    return (
      <div className="App">

        <ImageSelect
          value={this.state.selectedOption.label}
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

      </div>
    );
  }
}

export default App;
