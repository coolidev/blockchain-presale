import React, { useContext } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import ReactReadMoreReadLess from "react-read-more-read-less";

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import linkedinBlackIcon from '../../../assets/images/crosswise/linkedin-black-icon.png';
import linkedinLightIcon from '../../../assets/images/crosswise/linkedin-white-icon.png';

import Freddy from '../../../assets/images/crosswise/members/Freddy.png';
import Greg from '../../../assets/images/crosswise/members/Greg.png';
import Dino from '../../../assets/images/crosswise/members/Dino.jpg';
import Harry from '../../../assets/images/crosswise/members/Harry.jpg';
import Leon from '../../../assets/images/crosswise/members/Leon.jpg';
import JamesGao from '../../../assets/images/crosswise/members/JamesGao.jpg';
import BenWeider from '../../../assets/images/crosswise/members/BenWeider.jpg';
import JamesYin from '../../../assets/images/crosswise/members/JamesYin.jpg';

const SectionTeamwork = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)

    const teamMembers = [
        {
            image: Freddy,
            name: 'Frederic Beeg',
            linkedIn: 'https://www.linkedin.com/in/fbeeg/',
            role: 'CEO & Founder',
            desc: `Freddy is a long-time entrepreneur. At the age of 19, he set up what became  the leading European marketplace for video game distribution in 2013, which he later sold to a major competitor. In recent years he has focused on investing in crypto, building e-commerce platforms, and launching several brands on Amazon. He spends most of his time between Koh Phangan, Thailand and Canggu, Bali, Indonesia. Freddy is also an avid tennis player.`
        },
        {
            image: Greg,
            name: 'Gregory Khine',
            linkedIn: 'https://www.linkedin.com/in/gregory-khine/',
            role: 'Chief Operating Officer',
            desc: `Founded an award-winning web agency as well as popular online education resources in the late 90s. Greg fell down the crypto rabbit hole in 2015, and has since developed a particular interest in DeFi, both the technology and its transformative potential. He holds undergraduate and graduate degrees from the London School of Economics & Political Science.`
        },
        {
            image: Dino,
            name: 'Dino Dzizic',
            linkedIn: 'https://www.linkedin.com/in/dino-dzizic-189a54191/',
            role: 'Chief Technology Officer',
            desc: `DeFi/Dapp/NFT specialist with a passion for blockchain technology. Dino has lead the crosswise development team since it's inception. He has over 5 years experience developing blockchain technology, including high-profile projects, and holds a Bachelor's degree in software engineering. In his free time he enjoys playing tennis and is a big fan of fellow Serbian Novak Djokovic.`
        },
        {
            image: Harry,
            name: 'Harry Liu',
            linkedIn: 'https://www.linkedin.com/in/harry-liu-192510191/',
            role: 'Senior Smart Contract Developer',
            desc: `Harry is a software engineer with strong background in decentralized 
            application architecture. He's a certified blockchain developer with expertise in smart contracts and decentralized applications development. He is most proficient in Solidity, C++, Golang and Rust programming languages. Harry has worked on numerous blockchain projects as a developer, lead and consultant. Harry earned a Bachelor's degree in Computer Software Engineering at the Hebei University of Technology. He is based in Canada. but is originally from China. In his free time, he enjoys swimming and as well as playing billiards and the piano.`
        },
        {
            image: Leon,
            name: 'Leon Jin',
            linkedIn: 'https://www.linkedin.com/in/leon-jin-7013011b9/',
            role: 'Senior Smart Contract Developer',
            desc: `In recent years Leon has focused on developing blockchain projects. He has an in-depth understanding of blockchain technology, with a particular focus on building decentralized applications, yield farming, and new proof methods. Leon is from Liaoning, China. In his spare time he enjoys playing football.`
        },
        {
            image: JamesGao,
            name: 'James Gao',
            linkedIn: 'https://www.linkedin.com/in/james-gao-49461a217/',
            role: 'Senior Smart Contract Developer',
            desc: `James is from Xiangtan, Hunan, China. He holds bachelor's degree in computer science and has a profound understanding of software engineering. He is a full stack developer who has contributed to several well-known DeFi projects. James also manages our servers. In his spare time he is an avid climber and has a particular interest in architecture.`
        },
        {
            image: JamesYin,
            name: 'James Yin',
            linkedIn: 'https://www.linkedin.com/in/yin-james-a303631b7/',
            role: 'Senior Back-End Developer',
            desc: `James specializes in smart contract and Dapp development at Crosswise. He is an accomplished back-end and front-end developer with over 8 years experience building web and mobile applications. He has accumulated extensive experience in blockchain development, contributing to a wide range of DeFi projects. James is a particularly creative and innovative developer.`
        },
        {
            image: BenWeider,
            name: 'Ben Weider',
            linkedIn: 'https://www.linkedin.com/in/ben-weider-411184211/',
            role: 'Lead Front-End Developer',
            desc: `Ben is a passionate blockchain and full stack Fintech developer who likes to build solutions combining blockchain technologies and financial trading systems. With over 9 years of experience, Ben leads the front-end development team. Ben has a particular talent for applying development best practices, methodologies and ensuring overall code quality. He loves to work together as part of a great team. In his free time he enjoys tennis and basketball, as well as technical trading on forex, futures and the crypto markets.`
        },
    ]

    return (

        <section className="teamwork_section section_padding odd_background" id="team">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Core Team</h1>
                    </div>
                </Row>
                <Row className="team_member">
                    {teamMembers.map((member, index) => {
                        return (
                            <Col md={3} sm={6} xs={12} className="mb-3" key={index}>
                                <div className="gallery_photo shadow">
                                    <img className="user_img_top" src={member.image} />
                                    {
                                        isDark ? (<a className="linkedin_img_icon" href={member.linkedIn} target="_blank" rel="noreferrer"><img src={linkedinBlackIcon} /></a>) :
                                            (<a className="linkedin_img_icon" href={member.linkedIn} target="_blank" rel="noreferrer"><img src={linkedinLightIcon} /> </a>)
                                    }
                                    <div className="card-img-overlay p-3">
                                    </div>
                                    <div className="photo_content">
                                        <h6>{member.name}</h6>
                                        <p>{member.role}</p>
                                    </div>
                                    <div className="photo_description">
                                        <p>
                                            <ReactReadMoreReadLess
                                                charLimit={300}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                                readMoreClassName="read-more-less--more"
                                                readLessClassName="read-more-less--less"
                                            >
                                                {member.desc}
                                            </ReactReadMoreReadLess>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default SectionTeamwork;