import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLeetcode,
    SiGeeksforgeeks,
    SiGithub
} from "react-icons/si";

const Codeprofile = () => {
    return (
        <>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <a href="https://leetcode.com/chaosmaker027/"><SiLeetcode /></a>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <a href="https://auth.geeksforgeeks.org/user/ramkuma2sos">
                        <SiGeeksforgeeks />
                    </a>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <a href="https://github.com/RaM21234">
                        <SiGithub />
                    </a>
                </Col>

            </Row>
        </>
    )
}

export default Codeprofile
