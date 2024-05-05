import React, { useReducer, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarouselModal from "./CarouselModal";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  getPhotos,
  createPhoto,
  deletePhoto,
  createProperty,
} from "../../controls/requests";


export default function HouseModal(props) {
  const [item, action] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET":
          return action.item;

        case "ADD_IMAGE":
          return { ...state, images: [...state.images, action.image] };
        case "REMOVE_IMAGE":
          return {
            ...state,
            images: state.images.filter((img, index) => index !== action.index),
          };
        default:
          return state;
      }
    },
    {
      description: "",
      bedrooms: "",
      price: "",
      images: [],
      imagesIds: [],
      title: "",
      bathrooms: "",
      parking: "",
      area: "",
    }
  );

  const handleAddImage = (image) => {
    action({ type: "ADD_IMAGE", image });
  };

  const handleRemoveImage = (index) => {
    action({ type: "REMOVE_IMAGE", index });
  };

  const setItem = (item) => {
    action({ type: "SET", item });
  };

  const handleMoveImageUp = (index) => {
    if (index > 0) {
      const newImages = [...item.images];
      const temp = newImages[index];
      newImages[index] = newImages[index - 1];
      newImages[index - 1] = temp;
      setItem({ ...item, images: newImages });
    }
  };

  const handleMoveImageDown = (index) => {
    if (index < item.images.length - 1) {
      const newImages = [...item.images];
      const temp = newImages[index];
      newImages[index] = newImages[index + 1];
      newImages[index + 1] = temp;
      setItem({ ...item, images: newImages });
    }
  };
  const [mode, setMode] = useState("display");

  function sendPhotos(photo) {
    createPhoto(photo).then((data) => {
      return data.id;
    });
  }

  // function removePhotos(id) {
  //   deletePhoto(id).then((data) => {
  //     console.log(data);
  //   });
  // }

  function postInfo(item) {
    const formData = new FormData();
  
    // Função para converter URLs de Blob em Blob
    const urlToBlob = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return blob;
    };
  
    // Função para adicionar imagens ao FormData
    const addImagesToFormData = async () => {
      const formData = new FormData();
      for (const imageUrl of item.images) {
        const blob = await urlToBlob(imageUrl);
        const file = new File([blob], 'image.jpg', { type: blob.type });
        formData.append('images', file);
      }
  
      return formData;
    };
  
    addImagesToFormData().then(() => {
      createPhoto(formData).then((data) => {
        const photosId = data.map((photo) => photo.id);
        const newItem = {
          description: item.description,
          bedrooms: item.bedrooms,
          price: item.price,
          images: photosId,
          title: item.title,
          bathrooms: item.bathrooms,
          parking: item.parking,
          area: item.area,
        };
        createProperty(newItem).then((data) => {
          console.log(data);
          props.onHide();
        });
      });
    });
  }
  






  useEffect(() => {
    setMode(props.type)
    let newItem = {
      description: props.description,
      bedrooms: props.bedrooms,
      price: props.price,
      images: [],
      title: props.title,
      bathrooms: props.bathrooms,
      parking: props.parking,
      area: props.area,
    };
    getPhotos(props.images).then((data) => {
      let images = [];
      data.forEach((element) => {
        // console.log(element.foto
        images.push("http://localhost:8000" + element.foto);
      });
      newItem.images = images;
      setItem(newItem);
    });
  }, [props]);

  const [fileInput, setFileInput] = useState(null);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {mode !== "edit" && localStorage.getItem("access") && (
          <button
            className="
        btn btn-secondary
        "
            onClick={() => {
              setMode("edit");
            }}
          >
            Modo de edição
          </button>
        )}
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <div className="images-flex flex-grow-1">
          <div className="images-carousel">
            {mode === "edit" ? (
              <div>
                <div>
                  <input
                    type="file"
                    onChange={(e) => setFileInput(e.target.files[0])}
                    accept="image/*"
                  />
                  {fileInput && (
                    <>
                      <button
                        onClick={() => {
                          if (fileInput) {
                            handleAddImage(URL.createObjectURL(fileInput));
                            setFileInput(null);
                          }
                        }}
                        className="btn btn-primary col-12 mt-3"
                      >
                        Adicionar imagem
                      </button>

                      <img
                        src={URL.createObjectURL(fileInput)}
                        alt="Added image"
                        className="
      fixed-carousel-image
      "
                      />
                      <button
                        onClick={() => {
                          if (fileInput) {
                            setFileInput(null);
                          }
                        }}
                        className="btn btn-danger col-12 "
                      >
                        Remover imagem
                      </button>
                    </>
                  )}
                </div>
                <hr className="text-black" />
                {item.images &&
                  item.images[0] &&
                  item.images.map((image, index) => (
                    <div key={index} className=" mt-4">
                      {index === 0 && (
                        <h4 className="text-center text-black">
                          imagem principal{" "}
                        </h4>
                      )}
                      {index > 0 && (
                        <button
                          onClick={() => handleMoveImageUp(index)}
                          className="btn btn-outline-dark col-12 "
                          style={{ backgroundColor: "transparent" }}
                        >
                          <FaArrowUp color="black" />
                        </button>
                      )}
                      <button
                        onClick={() => handleRemoveImage(index)}
                        className="btn btn-danger col-12"
                      >
                        Remover
                      </button>

                      <img
                        src={image}
                        alt=""
                        className="fixed-carousel-image"
                      />
                      {index < item.images.length - 1 && (
                        <button
                          onClick={() => handleMoveImageDown(index)}
                          className="col-12 btn btn-outline-dark"
                          style={{ backgroundColor: "transparent" }}
                        >
                          <FaArrowDown color="black" />
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <CarouselModal images={item.images} />
            )}
          </div>

          <form className="  text-carousel text-black flex-grow-1">
            {mode === "edit" ? (
              // Render edit mode elements here
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="mt-4"
              >
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => setItem({ ...item, title: e.target.value })}
                  className="form-control mb-3 mt-4"
                  placeholder="Titulo"
                />
                <textarea
                  value={item.description}
                  onChange={(e) =>
                    setItem({ ...item, description: e.target.value })
                  }
                  className="form-control mb-3"
                  rows={7} // Add this line to set the initial number of rows
                  placeholder="Descrição"
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="col-6 d-flex">
                      <span className="col-8">Quartos:</span>
                      <input
                        type="number"
                        value={item.bedrooms}
                        onChange={(e) =>
                          setItem({ ...item, bedrooms: e.target.value })
                        }
                        className="form-control mb-3 me-3 col-4"
                      />
                    </div>
                    <div className="col-6 d-flex">
                      <span className="col-8">Banheiros:</span>
                      <input
                        type="number"
                        value={item.bathrooms}
                        onChange={(e) =>
                          setItem({ ...item, bathrooms: e.target.value })
                        }
                        className="form-control mb-3 me-3 col-4"
                      />
                    </div>
                    <div>
                      <div className="col-6 d-flex">
                        <span className="col-8">Preço:</span>

                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) =>
                            setItem({ ...item, price: e.target.value })
                          }
                          className="form-control mb-3 me-3 col-4"
                          placeholder="R$"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="col-6 d-flex">
                      <span className="col-8">Garagens:</span>

                      <input
                        type="number"
                        value={item.parking}
                        onChange={(e) =>
                          setItem({ ...item, parking: e.target.value })
                        }
                        className="form-control mb-3 me-3 col-4"
                      />
                    </div>

                    <div className="col-6 d-flex">
                      <span className="col-8">Área:</span>
                      <input
                        type="number"
                        value={item.area}
                        onChange={(e) =>
                          setItem({ ...item, area: e.target.value })
                        }
                        className="form-control mb-3 me-3 col-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Render display mode elements here
              <div>
                <h4 className="text-center  mb-3">{item.title}</h4>
                <p className="modal-text-desc">{item.description}</p>
                <div className="bottom-element ">
                  <p className="col-12 d-flex">
                    <div className="col-5 offset-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3159/3159436.png"
                        alt=""
                        className="icon me-2"
                      />
                      <span className=" text-center">
                        {item.bedrooms} Quartos
                      </span>
                    </div>
                    <div className="col-5 offset-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/900/900685.png"
                        alt=""
                        className="icon me-2"
                      />
                      <span className="text-center">
                        {item.bathrooms} Banheiros
                      </span>
                    </div>
                  </p>
                  <p className="col-12 d-flex">
                    <div className="col-5 offset-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/7671/7671206.png"
                        alt=""
                        className="icon me-2"
                      />
                      <span className=" text-center">{item.area} m2</span>
                    </div>
                    <div className="col-5 offset-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/89/89102.png"
                        alt=""
                        className="icon me-2"
                      />
                      <span className="text-center">
                        {item.parking} Garagens
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {mode !== "edit" ? (
          <>
            <p>
              <span className="text-center me-3 money-text">
                {" "}
                {item.price
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                  .replaceAll(",", ".")}{" "}
                R$
              </span>
            </p>
            <Button className="contact-button">Entrar em contato</Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setMode("edit");
                props.onHide();
              }}
              className="btn-danger"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
               // setMode("display");
                postInfo(item);
              }}
              className="btn-primary"
            >
              Salvar
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}