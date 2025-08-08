import {WrapperTheme} from "./WrapperTheme.jsx";
import {Button, Col, Row} from "antd";
import videoDemo from "../assets/post_video.mp4"

export const About = () => {
    return (
        <WrapperTheme className={"px-25"}>
            <Row className="justify-between">
                <Col span={6} className={"p-4"}>
                    <h1 className={"text-4xl leading-15 font-semibold"}>SỰ LỰA CHỌN ẨM THỰC SỐ 1</h1>
                    <Button type={"primary"} className={"!rounded-none text-4xl !p-7 !mt-3"} size={"large"}>XEM HÌNH ẢNH
                        TIỆC</Button>
                </Col>
                <Col span={17} className={"p-6"}>
                    <video width="full" height="900" controls>
                        <source src={videoDemo} type="video/mp4"/>
                    </video>
                    <Row>
                        <Col span={12}>
                            <Col className={"my-4 px-1"}>
                                <p className={"text-base leading-7"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus porta ante dui, nec condimentum diam auctor nec.
                                    sInteger auctor turpis odio, eu lacinia lorem ultricies at.
                                    Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus.
                                    Integer mollis arcu sit amet mollis blandit.
                                </p>
                            </Col>
                            <Col className={"my-4 px-1"}>
                                <p className={"text-base leading-7"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis
                                    odio,
                                    eu lacinia lorem ultricies at.
                                    Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer
                                    mollis arcu sit amet mollis blandit.
                                    Nulla imperdiet molestie nunc.
                                    Curabitur consectetur nulla massa, sed vehicula mi dictum in.
                                </p>
                            </Col>
                        </Col>
                        <Col span={12}>
                            <Col className={"my-4 px-1"}>
                                <p className={"text-base leading-7"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus porta ante dui, nec condimentum diam auctor nec.
                                    sInteger auctor turpis odio, eu lacinia lorem ultricies at.
                                    Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus.
                                    Integer mollis arcu sit amet mollis blandit.
                                </p>
                            </Col>
                            <Col className={"my-4 px-1"}>
                                <p className={"text-base leading-7"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus porta ante dui, nec condimentum diam auctor nec. sInteger auctor turpis
                                    odio,
                                    eu lacinia lorem ultricies at.
                                    Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer
                                    mollis arcu sit amet mollis blandit.
                                    Nulla imperdiet molestie nunc.
                                    Curabitur consectetur nulla massa, sed vehicula mi dictum in.
                                </p>
                            </Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </WrapperTheme>
    )
}