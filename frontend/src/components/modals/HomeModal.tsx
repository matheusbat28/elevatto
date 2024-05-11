import React, { useReducer, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarouselModal from "./CarouselModal";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import "react-country-state-city/dist/react-country-state-city.css";
import {
  getPhotos,
  createPhoto,
  deletePhoto,
  updateProperty,
  createProperty,
  deleteProperty,
} from "../../controls/requests";

export default function HouseModal(props) {
  console.log(props);
  const [fileImage, setFileImage] = useState([]);
  const [completeImages, setCompleteImages] = useState([]);
  const [stateid, setstateid] = useState(0);
  const [cityid, setcityid] = useState(0);
  const [openLoc, setOpenLoc] = useState(true);
  let [block, setblock] = useState(false);
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
        case "RESET_IMAGES":
          return {
            ...state,
            images: [],
            imagesIds: [],
          };
        case "RESET":
          return {
            ...state,
            description: "",
            bedrooms: "",
            price: "",
            images: [],
            imagesIds: [],
            title: "",
            bathrooms: "",
            parking: "",
            area: "",
            state: "",
            neighborhood: "",
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

  const handleResetImages = () => {
    action({ type: "RESET_IMAGES" });
  };

  const handleReset = () => {
    action({ type: "RESET" });
  };

  function verifyInputs() {
    if (
      item.description === "" ||
      item.bedrooms === "" ||
      item.price === "" ||
      item.title === "" ||
      item.bathrooms === "" ||
      item.parking === "" ||
      item.area === ""
    ) {
      alert("Todos os campos devem ser preenchidos");
      return false;
    }
    return true;
  }

  const handleMoveImageUp = (id) => {
    setCompleteImages((prevImages) => {
      const index = prevImages.findIndex((img) => img.id === id);
      if (index > 0) {
        const newImages = [...prevImages];
        const temp = newImages[index - 1];
        newImages[index - 1] = newImages[index];
        newImages[index] = temp;
        return newImages;
      }
      return prevImages;
    });
    console.log(completeImages, "complete");
  };

  const handleMoveImageDown = (id) => {
    setCompleteImages((prevImages) => {
      const index = prevImages.findIndex((img) => img.id === id);
      if (index < prevImages.length - 1) {
        const newImages = [...prevImages];
        const temp = newImages[index + 1];
        newImages[index + 1] = newImages[index];
        newImages[index] = temp;
        return newImages;
      }
      return prevImages;
    });
    console.log(completeImages, "complete");
  };
  const [mode, setMode] = useState("display");

  // function removePhotos(id) {
  //   deletePhoto(id).then((data) => {
  //     console.log(data);
  //   });
  // }

  const sendPhoto = async (photo) => {
    setblock(true);
    const formData = new FormData();
    formData.append("foto", photo);
    let cImages = completeImages;
    createPhoto(formData).then((data) => {
      cImages.push(data);
      setCompleteImages(cImages);
      setblock(false);
    });
  };

  function deleteInfo() {
    deleteProperty(props.id).then((data) => {
      console.log(data);
      props.reset();
      props.onHide();
    });
  }

  function putInfo(item) {
    console.log("a", completeImages);
    const completeImagesWithIndex = completeImages.map((data, index) => ({
      id: data.id,
      index,
    }));
    const newItem = {
      description: item.description,
      bedrooms: item.bedrooms,
      price: item.price,
      photos: completeImagesWithIndex
        .sort((a, b) => a.index - b.index)
        .map((data) => data.id),
      title: item.title,
      bathrooms: item.bathrooms,
      parking: item.parking,
      area: item.area,
      state: item.state,
      neighborhood: item.neighborhood,
    };
    updateProperty(props.id, newItem)
      .then((data) => {
        console.log(data);
        props.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function postInfo(item) {
    const newItem = {
      description: item.description,
      bedrooms: item.bedrooms,
      price: item.price,
      photos: completeImages.map((data) => data.id),
      title: item.title,
      bathrooms: item.bathrooms,
      parking: item.parking,
      area: item.area,
      state: item.state,
      neighborhood: item.neighborhood,

    };
    createProperty(newItem)
      .then((data) => {
        console.log(data);
        props.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    setCompleteImages([]);
    if (props.type === "new") {
      handleReset();
    }
    setMode(props.type);

    const newItem = {
      description: props.description,
      bedrooms: props.bedrooms,
      price: props.price,
      images: [],
      imagesIds: props.images,
      title: props.title,
      bathrooms: props.bathrooms,
      parking: props.parking,
      area: props.area,
      state: props.state,
      neighborhood: props.neighborhood,
    };

  
  
    let fileImage = [];
    let images = [];

    getPhotos(props.images).then((data) => {
      let cImages = [];
      data.forEach((element) => {
        const newData = element;
        newData.foto = "http://localhost:8000" + element.foto;
        images.push(newData.foto);
        cImages.push(newData);
        // transforme o link  em arquivo
      });
      setFileImage(fileImage);
      //console.log("images", images)
      newItem.images = images;
      setItem(newItem);
      setCompleteImages(cImages);
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
        {mode === "display" && localStorage.getItem("access") && (
          <>
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
            <button
              className="
        btn btn-danger ms-2
        "
              onClick={() => {
                deleteInfo();
              }}
            >
              Excluir
            </button>
          </>
        )}
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <div className="images-flex flex-grow-1">
          <div className="images-carousel">
            {mode === "edit" || mode === "new" ? (
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
                            console.log("fileImage", fileImage);
                            setFileImage([...fileImage, fileInput]);
                            sendPhoto(fileInput);
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
                {completeImages[0] &&
                  completeImages.map(({ foto, id }, index) => (
                    <div key={index} className=" mt-4">
                      {index === 0 && (
                        <h4 className="text-center text-black">
                          imagem principal{" "}
                        </h4>
                      )}
                      {index > 0 && (
                        <button
                          onClick={() => handleMoveImageUp(id)}
                          className="btn btn-outline-dark col-12 "
                          style={{ backgroundColor: "transparent" }}
                        >
                          <FaArrowUp color="black" />
                        </button>
                      )}
                      <button
                        onClick={() =>
                          deletePhoto(id).then((data) => {
                            console.log(data);
                            setCompleteImages(
                              completeImages.filter((data) => data.id !== id)
                            );
                          })
                        }
                        className="btn btn-danger col-12"
                      >
                        Remover
                      </button>

                      <img src={foto} alt="" className="fixed-carousel-image" />
                      {index < item.images.length - 1 && (
                        <button
                          onClick={() => handleMoveImageDown(id)}
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
            {mode === "edit" || mode === "new" ? (
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
                    {openLoc && (
                      <div className="col-6 d-flex mb-3 me-3 ">
                        <span className="col-8">Estado:</span>
                        <StateSelect
                       placeHolder={
                          item.state
                        }
                        
                          countryid={31}
                          onChange={(e) => {
                            setstateid(e.id);
                            setItem(
                              {
                                ...item,
                                state: e.name,
                              }
                            )
                          }}
                          className="form-control mb-3 me-3 col-4"
                        />
                      </div>
                    )}
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
                    <div className="col-6 d-flex mb-3">
                      <span className="col-10">Localização: </span>
                      <input
                        type="checkbox"
                        checked={openLoc}

                        onChange={(e) => {
                          setOpenLoc(e.target.checked);
                          setcityid(0);
                          setstateid(0);
                          setItem(
                            {
                              ...item,
                              neighborhood: "",
                              state: "",
                            }
                          )
                        }}
                        className="
                        form-check-input
                        mb-3 me-3 col-2 ms-3" 
                      />
                    </div>

                    {openLoc && (
                      <div className="col-6 d-flex mb-3 me-3 ">
                        <span className="col-8">Cidade:</span>
                        <CitySelect

placeHolder={
                            item.neighborhood
                          }
                          countryid={31}
                          stateid={stateid}
                          onChange={(e) => {
                            setcityid(e.id);
                            setItem(
                              {
                               ...item,
                                neighborhood: e.name,
                              }
                            )
                          }}
                          className="form-control mb-3 me-3 col-4"
                        />
                      </div>
                    )}
                    <div></div>
                  </div>
                  <div></div>
                </div>
              </div>
            ) : (
              // Render display mode elements here
              <div>
                <h4 className="text-center  mb-3">{item.title}</h4>
                <p className=" desc-text">{item.description}</p>
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
        {mode === "display" ? (
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
            <Button
              className="contact-button"
              onClick={(e) => {
                window.open(
                  `https://api.whatsapp.com/send?phone=5548998362799&text=Ol%C3%A1%2C%20vi%20o%20seu%20an%C3%BAncio%20no%20site%20Elevatto%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es
                %20sobre%20a%20casa%20${item.title}
                `,
                  "_blank"
                );
              }}
            >
              Entrar em contato
            </Button>
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
                if (verifyInputs()) {
                  if (mode === "new") {
                    postInfo(item);
                  } else if (mode === "edit") {
                    putInfo(item);
                  }
                }
              }}
              disabled={block}
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
