import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { Link } from "react-router-dom";

const Download = () => {
	const { t } = useTranslation();

	const androidLinks = [
		{
			imgSrc: "./android.svg",
			title: t("download.androidLinks.apk"),
			link: "https://github.com/smswithoutborders/RelaySMS-Android"
		},
		{
			imgSrc: "./play.svg",
			title: t("download.androidLinks.playStore"),
			link: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
		},
		{
			imgSrc: "./fdroid.png",
			title: t("download.androidLinks.fDroid"),
			link: "https://apt.izzysoft.de/fdroid/index/apk/com.afkanerd.sw0b"
		}
	];

	return (
		<Container className="full-screen-container py-5">
			{/* Responsive Navbar */}
			<Navbar expand="lg" fixed="top" className="custom-navbar">
				<Navbar.Brand href="/" className="navbar-logo">
					<img src="./logo.png" alt="Logo" height="40" className="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav" className="justify-content-end">
					<Nav className="nav-links">
						<Nav.Link href="/" className="mx-2">
							{t("Nav.Home")}
						</Nav.Link>
						<Nav.Link href="https://blog.smswithoutborders.com/" className="mx-2">
							{t("Nav.Blog")}
						</Nav.Link>
						<Nav.Link href="https://docs.smswithoutborders.com/" className="mx-2">
							{t("Nav.Support")}
						</Nav.Link>
						<Nav.Link as={Link} to="/Contact_Us" className="mx-2">
							{t("Nav.Contact")}
						</Nav.Link>
					</Nav>
					<Nav className="social-icons">
						<Nav.Link href="https://x.com/RelaySMS" className="mx-2">
							<img src="./x.svg" alt="X logo" height="20" />
						</Nav.Link>
						<Nav.Link href="https://github.com/smswithoutborders" className="mx-2">
							<FaGithub />
						</Nav.Link>
						<LanguageSwitcher className="mx-2" />
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Row className="mb-5">
				<Col>
					<h2 className="download-section text-center">{t("download.android")}</h2>
				</Col>
			</Row>
			<Row className="justify-content-center">
				{androidLinks.map((item, index) => (
					<Col md={4} sm={6} xs={12} key={index} className="mb-4 text-center">
						<a href={item.link} target="_blank" rel="noopener noreferrer">
							<Button
								variant="outline-primary"
								className="icon-btn mb-3"
								style={{
									width: "110px",
									height: "110px",
									borderRadius: "50%",
									backgroundColor: "#F0F1F3",
									borderColor: "#F0F1F3",
									boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" // Adds a soft shadow
								}}
							>
								<img
									src={item.imgSrc} // Dynamic image source
									alt="Icon"
									style={{ width: "50%", height: "50%", objectFit: "contain" }} // Adjust image size to fit within button
								/>
							</Button>
						</a>
						{/* Link title text */}
						<div>
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: "inherit", textDecoration: "none" }}
							>
								{item.title}
							</a>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Download;
