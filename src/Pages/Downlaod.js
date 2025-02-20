import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";
import { Link } from "react-router-dom";

const Download = () => {
	const { t, i18n } = useTranslation();
	const isFarsi = i18n.language === "fa";

	// Android links
	const androidLinks = [
		{
			imgSrc: "./play.svg",
			title: t("download.androidLinks.playStore"),
			link: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
		},
		{
			imgSrc: "./fdroid.png",
			title: t("download.androidLinks.fDroid"),
			link: "https://apt.izzysoft.de/fdroid/index/apk/com.afkanerd.sw0b"
		},
		{
			imgSrc: "./android.svg",
			title: t("download.androidLinks.apk"),
			link: "https://github.com/smswithoutborders/RelaySMS-Android"
		}
	];

	// iOS links
	const iosLinks = [
		{
			imgSrc: "./ios.png",
			title: t("download.ios"),
			link: "https://apps.apple.com/us/app/relaysms/id6630382970"
		}
	];

	return (
		<div
			style={{
				backgroundColor: "#FAF2E4",
				paddingBottom: "6rem",
				paddingLeft: "3rem",
				paddingRight: "3rem",
				boxShadow: "10px 4px 10px rgba(2, 27, 95, 0.1)"
			}}
		>
			{/* Navbar */}
			<Navbar
				style={{ background: "#FAF2E4", fontFamily: "'Mona Sans', ubuntu" }}
				dir={isFarsi ? "rtl" : "ltr"}
				expand="lg"
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="#">
						<img
							src="/logo.png"
							alt="My Website Logo"
							className="d-inline-block align-top"
							style={{ height: "35px" }}
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/">{t("Nav.Home")}</Nav.Link>
							<Nav.Link href="https://blog.smswithoutborders.com/">{t("Nav.Blog")}</Nav.Link>
							<Nav.Link href="https://docs.smswithoutborders.com/">{t("Nav.Support")}</Nav.Link>
							<Nav.Link as={Link} to="/Contact_Us">
								{t("Nav.Contact")}
							</Nav.Link>

							<Nav.Link href="https://x.com/RelaySMS" className="mx-2" title={t("social.x")}>
								<img src="./x.svg" alt="X logo" height="20" />
							</Nav.Link>

							<Nav.Link
								href="https://bsky.app/profile/relaysms.bsky.social"
								className="mx-2"
								title={t("social.bluesky")}
							>
								<img src="./bluesky.svg" alt="Bluesky logo" height="20" />
							</Nav.Link>

							<Nav.Link
								href="https://github.com/smswithoutborders"
								className="mx-2"
								title={t("social.github")}
							>
								<FaGithub size={20} />
							</Nav.Link>

							<Nav.Link>
								<LanguageSwitcher className="mx-2" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			{/* Android Section */}
			<Row className="mb-5">
				<Col>
					<h2
						className="text-center"
						style={{
							fontSize: "2.5rem",
							fontWeight: "bold",
							color: "#2D2A5A",
							padding: window.innerWidth >= 768 ? "20px" : "20px",
							transition: "color 0.3s ease, transform 0.3s ease"
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "#0056b3";
							e.currentTarget.style.transform = "scale(1.05)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "#333";
							e.currentTarget.style.transform = "scale(1)";
						}}
					>
						{t("download.android")}
					</h2>
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
									boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
								}}
							>
								<img
									src={item.imgSrc}
									alt="Icon"
									style={{ width: "50%", height: "50%", objectFit: "contain" }}
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

			{/* iOS Section */}
			<Row className="mb-5">
				<Col>
					<h2
						className="text-center"
						style={{
							fontSize: "2.5rem",
							fontWeight: "bold",
							color: "#2D2A5A",
							padding: window.innerWidth >= 768 ? "20px" : "20px",
							transition: "color 0.3s ease, transform 0.3s ease"
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "#0056b3";
							e.currentTarget.style.transform = "scale(1.05)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "#333";
							e.currentTarget.style.transform = "scale(1)";
						}}
					>
						{t("download.ios")}
					</h2>
				</Col>
			</Row>
			<Row className="justify-content-center">
				{iosLinks.map((item, index) => (
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
									boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
								}}
							>
								<img
									src={item.imgSrc}
									alt="Icon"
									style={{ width: "50%", height: "50%", objectFit: "contain" }}
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
		</div>
	);
};

export default Download;
