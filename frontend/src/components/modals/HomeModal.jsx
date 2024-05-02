import React, { useReducer, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarouselModal from "./CarouselModal";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
      locate: props.locate,
      desc: props.desc,
      rooms: props.rooms,
      price: props.price,
      images: props.images,
      title: props.title,
      bathrooms: props.bathrooms,
      garages: props.garages,
      area: props.area,
    }
  );

  const [formattedPrice, setFormattedPrice] = useState(
    item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
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

  useEffect(() => {
    setItem({
      locate: props.locate,
      desc: props.desc,
      rooms: props.rooms,
      price: props.price,
      images: props.images,
      title: props.title,
      bathrooms: props.bathrooms,
      garages: props.garages,
      area: props.area,
    });
  }, [props]);
  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    setMode("display");
  }, [props]);

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {mode !== "edit" && (
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
                {item.images.map((image, index) => (
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

                    <img src={image} alt="" className="fixed-carousel-image" />
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
                  value={item.locate}
                  onChange={(e) => setItem({ ...item, locate: e.target.value })}
                  className="form-control mb-3 mt-4"
                />
                <textarea
                  value={item.desc}
                  onChange={(e) => setItem({ ...item, desc: e.target.value })}
                  className="form-control mb-3"
                  rows={7} // Add this line to set the initial number of rows
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="col-6 d-flex">
                      <span className="col-8">Quartos:</span>
                      <input
                        type="number"
                        value={item.rooms}
                        onChange={(e) =>
                          setItem({ ...item, rooms: e.target.value })
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
                        value={item.garages}
                        onChange={(e) =>
                          setItem({ ...item, garages: e.target.value })
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
                <h4 className="text-center  mb-3">{item.locate}</h4>
                <p className="modal-text-desc">{item.desc}</p>
                <div className="bottom-element ">
                  <p className="col-12 d-flex">
                    <div className="col-5 offset-1">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3159/3159436.png"
                        alt=""
                        className="icon me-2"
                      />
                      <span className=" text-center">{item.rooms} Quartos</span>
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
                        {item.garages} Garagens
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
          <Button className="contact-button">Entrar em contato</Button>
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
                setMode("display");
                //props.onSave(item);
              }}
              className="btn-primary"
            >Salvar</Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
