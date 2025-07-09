import React, {useState} from 'react';
import {Col, Modal, Row} from 'antd';
import "../assets/container.css"
import "../assets/modal.css"

const Post = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={"container !mt-16"}>
                <Row className={"flex justify-between"}>
                    <Col span={10}>
                        <p className={"text-4xl font-semibold le"}>Tiệc tại gia chất nhà hàng</p>
                        <p className={"text-lg mt-7"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eum quae fugit accusantium commodi esse modi pariatur praesentium,
                            voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eum quae fugit accusantium commodi esse modi pariatur praesentium,
                            voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
                        </p>
                        <p className={"text-lg mt-7"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eum quae fugit accusantium commodi esse modi pariatur praesentium,
                            voluptas dolor ea qui? Vel dolore ipsam vitae voluptatem esse repellat nobis sint.
                        </p>
                    </Col>
                    <Col span={12} className={"relative"}>
                        <img className={"w-5/6"}
                             src="https://intern-project-chi.vercel.app/static/media/banner.3d2794dc83c9f6633434.jpg"
                             alt=""/>
                        <button type="button" data-bs-toggle="modal" className={"absolute top-40 left-60"} onClick={showModal} data-bs-target="#exampleModal">
                            <div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGBElEQVR4nO2bfWhVZRzHv7/nvrXt7jpnpmIqFeRiRopuF9x
                                obleqgRSTyCKyFhakWWBEIAwGhdALEZqkOJWSbAbNwD+k3L0zZ7Xrbb3AdBuipENs5XTu3qvdl3N+/eGCsHPuPS/PuSu8nz/P8/xenu+e89vzci5QpEiRIrcwVKhAiVBwFoS6iFUsJNACBlcQkx8AmD
                                hBoHEGnyOBYahiwB+OjhYiL8cE4HaIZG8wRMwtDGoEcZVJF4ME6mGhdpXVxXqoHaoTeUoXIN68ZCbS3o0EbgVwpyS3Iwzey4q6LXC0/5IknwAkCjBeXz/d7U23gfAigDJZfm8iCdCOjJJ6a/rRn8dlO
                                LQtAAOUDNWuBfAOgDvsp2SIUTC97o9E99l1ZEuAseZgwJfiXSA8YTcRKzDwpZLyPl9x/PgVqz4sCxBvrKkmQYcA3GXVhwwYOAsSq8q7+wat2AsrRtealtWSoKOY4sEDAAF3E9RvJxqX1Vm0N8dEU81y
                                QXQEQKmVgA6SFEQrS7ujfWaMTAkwOe2PAag0lVrhGGPQg+Xh6CmjBoYFuLJicYXH5f0R/4FpnwsCzqRIWVrZ3X/VSH/DNcArfLvxHx88ADBwj49dHUb7GxIgEap9lolXW0+rsDDweCJU87SRvnlfgfH
                                6+uluX3oIJhc5NK0CnEwA2awZM5mMZpR0Vb4VY94Z4Pam22BhhedavBQluzvhbggBVLBN5z+Z5XF5N+frlFOAiVDtDCK8YDUDMXcefG1bULK1A67qB6y6scP6iRVLb8/VIacABHqVAb/dLMR9i3DbBzv
                                ha9sCmjPXrjszlJHb9XKuDroCcDsEgZ+TlgoR3A0hlO49AO+GTSB/uTTXOcMyWrldf5y6DcneYAjAPOkZuT3wtKxByb4ueJ5cC3i80kPcxPxEb7BBr1FXAGJucSafSf/lAXjXbUBJx37HC6XIMRb9V4D
                                Q5Ew6NyVQgELJQKNufK2HiRU1swEsdCQbvUScLJSE6vhDyzX/lWvPADcWyc3AIM4VSoKiVGs1aArALAr61/8XDhRKwaw5Jk0BCLzAdkQJyCyUTNobOe0ZAAQsR3IAGYWSGJrvk84MsL/6cwI7hZKJjAtw
                                K+HWeshAYkr2b3lQBweQ3rEVyslfTNsSc1zruaYABEyYjuAg6oURZPZ8hOyxCMBsyQcL7THpzAA6R7AWSCYcn0DmwD5kvugEMmlbvkjFr1rPtWeAUIegTuFLkM0gc6gLmY93gROaM9c0qhBDWs81BYAqBi
                                bnWmFVYEb2WATpju3gixekeoYndVKrQVMAfzg6mmgKDlu407eMnQKXF8bJ8sM//aHVpD0DABAhwoDjAsgocHkhiug16QrApB4E03pnMpJb4PLGEmqXXpvuQqisPhYBMCI9m2wGmYMHcP2Z1ch0fuL44AGc
                                99fFevUa9U+E2qEyeK+0NJiR/SaMa61rkN7+vrTqng9i7Mn1fZHuKwAADNoqgE12T4YdLXC5SSqqsj1Xh5x7gUD4xBiDdlqNrl4YQerNzbj+yrqpGDxA+DDfR1V5/8+PNQcDvjQPAZhjKvbUX439lialKt
                                8tcd7d4IzD0QkwvWE2Ol8dn8rBA4xNRq7IDa/0Eitr94PxlL2sCgTjc3/kxBojXQ2fB6ShvMTAWetZFYzTKR8Zvs80LEBld/9VVdAjAH63lFZhuKS6lEdnHI4a3s6bOhGadiR6WhA9BiBpOjWHISAhVLEq
                                8HW/5q5PD9NHYqXd0T4CN4KhubmYIi4rzA+X9vRFzRpaOhMsC8diLEQDAWes2EvmtKqqywOR2HdWjC0fipZ39w1e+9OzBOBOqz7swsDBjJKuDfT8MGzVh5QDjxsfJNF7AGbL8GeAi2C85o+c+MyuIynH4v
                                5w7NM0KVUA3iUgIcOnDnEQ3k55qUrG4AEHjrwmvyvaSIxWAPMluT1PjD1Zj2vbtK++vyzJJwCHfzKT6A02COaWyW8NNG9n9cwBnAIozELt8tfFev83P5nRI968ZCZSnvsFcC8Tz2dQ5d9XcDcuYvgyMZ1X
                                iYbhTQ/oneEVKVKkSBGJ/AWu5CwNWQqZvAAAAABJRU5ErkJggg==" alt=""/>
                            </div>
                        </button>
                    </Col>
                </Row>

                <Modal
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={1000}
                    className={"!h-full"}
                    footer={null}
                >
                    <iframe className={"w-full h-full"}
                            src="https://www.youtube.com/embed/9_60Fl6g9xE"
                            title="YouTube video player"
                            // frameBorder="0"
                            allowFullScreen>
                    </iframe>
                </Modal>
            </div>
        </>
    )
}
export default Post;