import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import image1 from "../images/blog-image-1.jpg"
import image2 from "../images/home-bg.jpg"
import image3 from "../images/portfolio-image-3.jpg"
import image4 from "../images/team-member-2.jpg"


const images = [image1, image2, image3, image4];

export default function ImageLightBox() {

    const [state, setState] = useState({
        photoIndex: 0,
        isOpen: false,
    })

    const openLightbox = () => {
        setState(s => ({ ...s, isOpen: true }))
    }

    return (
        <>
            <div className="container-fluid min-vh-100 bg-secondary">
                <div className="container">
                    <div className="row py-4">
                        <div className="col text-center text-white">
                            <h1 onClick={openLightbox}>Lightbox</h1>
                        </div>
                    </div>

                    <div className="row">
                        {images.map((image, i) => {
                            return <div key={i} className="col-12 col-md-6 col-lg-3 text-center">
                                <div class="card w-100">
                                    <img src={image} class="card-img-top" alt="Something text" onClick={() => { setState(s => ({ ...s, isOpen: true, photoIndex: i })) }} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            {state.isOpen && (
                <Lightbox
                    mainSrc={images[state.photoIndex]}
                    nextSrc={images[(state.photoIndex + 1) % images.length]}
                    prevSrc={images[(state.photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setState(s => ({ ...s, isOpen: false }))}
                    onMovePrevRequest={() =>
                        setState(s => ({ ...s, photoIndex: (s.photoIndex + images.length - 1) % images.length }))
                    }
                    onMoveNextRequest={() =>
                        setState(s => ({ ...s, photoIndex: (s.photoIndex + 1) % images.length }))
                    }
                    closeLabel="Close"
                />
            )}
        </>
    )
}
