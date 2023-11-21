import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";


export default class Ckeditor extends Component {

 
  state = {
    name: '',
    email: '',
    phone: '',
    content: ''
  };

  handleChange = (event) => {
    const target = event.target;
    const {name, value} = target;

    this.setState({
        [name]: value
        });

  }

  handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    this.setState({
      content: data
    })
    // console.log(data);
  }

  render() {

    console.log("STATE", this.state);

    return (
      <div>
        {" "}
        <div className="container">
          <div className="wrapper">
            <div className="form-group">
              <h2>Contact Us</h2>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Enter Name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="Enter Phone"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Message</label>
                
                <CKEditor
                  editor={ClassicEditor}
                  onInit={(editor) => {}}
                  config={{
                    ckfinder: {
                      uploadUrl: "/uploads",
                    },
                  }}
                  onChange={this.handleCkeditorState}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
