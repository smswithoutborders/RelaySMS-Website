import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaArrowLeft } from "react-icons/fa6";

const Download = () => {
	const { t } = useTranslation();

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
				minHeight: "100vh",
				width: "100%",
				paddingTop: "120px",
				paddingBottom: "60px"
			}}
		>
			<Button as="a" href="/" variant="light" className="mb-4 ms-3">
				<FaArrowLeft className="me-2" /> {t("Nav.Back")}
			</Button>
			<Container className="d-flex flex-column justify-content-center">
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
			</Container>
		</div>
	);
};

export default Download;
