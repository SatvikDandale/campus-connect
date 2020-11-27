import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function ImageUploadForm(props) {
  const [image, setImage] = useState(null);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <p>Upload the image</p>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="file__section">
            <div className="file-select">
              <div className="file-select-button">Choose File</div>
              <input
                type="file"
                name="file"
                accept="image/*"
                className="select__file"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
              ></input>

              <div className="file-select-name" id="noFile">
                {!image ? "No file chosen" : image.name}
              </div>
            </div>
            {image && (
              <>
                <div className="spacer"></div>
                <button
                  className="close__button"
                  onClick={() => {
                    setImage(null);
                  }}
                >
                  X
                </button>
              </>
            )}
          </div>
          {image && (
            <div>
              <img
                className="img__upload__preview"
                src={URL.createObjectURL(image)}
                alt="upload"
              ></img>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="submit__new__post"
          onClick={() => {
            if (!image) alert("Upload an image first.");
            props.onImageSubmit(image);
          }}
        >
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageUploadForm;
