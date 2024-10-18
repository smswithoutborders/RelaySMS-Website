import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlay, FaLinux, FaAndroid, FaApple } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Download = () => {
	const { t } = useTranslation();

	const androidLinks = [
		{
			icon: FaAndroid,
			title: t("download.androidLinks.apk"),
			link: "https://github.com/smswithoutborders/RelaySMS-Android"
		},
		{
			icon: FaPlay,
			title: t("download.androidLinks.playStore"),
			link: "https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
		},
		{
			icon: FaAndroid,
			title: t("download.androidLinks.fDroid"),
			link: "https://f-droid.org/packages/com.example/"
		}
	];

	const iosLink = {
		icon: FaApple,
		title: t("download.iosLink"),
		link: "https://apps.apple.com/us/app/relaysms/id6630382970"
	};

	const desktopLinks = [
		{
			icon: FaLinux,
			title: t("download.desktopLinks.linux"),
			link: "https://github.com/smswithoutborders/RelaySMS-Android/releases"
		},
		{
			icon: FaApple,
			title: t("download.desktopLinks.comingSoon"),
			link: "#"
		}
	];

	return (
		<Container className="py-5">
			<Row className="mb-5">
				<Col>
					<h2 className=" Download-section text-center">{t("download.android")}</h2>
				</Col>
			</Row>
			<Row className="justify-content-center">
				{androidLinks.map((item, index) => (
					<Col md={4} sm={6} xs={12} key={index} className="mb-4 text-center">
						<a href={item.link} target="_blank" rel="noopener noreferrer">
							<Button
								variant="outline-primary"
								className="icon-btn mb-3"
								style={{ width: "100px", height: "100px" }}
							>
								<item.icon className="h3 m-0" />
							</Button>
						</a>
						<div>{item.title}</div>
					</Col>
				))}
			</Row>

			<Row className="mb-5">
				<Col>
					<h2 className="text-center">{t("download.ios")}</h2>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={4} sm={6} xs={12} className="mb-4 text-center">
					<a href={iosLink.link} target="_blank" rel="noopener noreferrer">
						<Button
							variant="outline-primary"
							className="icon-btn mb-3"
							style={{ width: "100px", height: "100px" }}
						>
							<iosLink.icon className="h3 m-0" />
						</Button>
					</a>
					<div>{iosLink.title}</div>
				</Col>
			</Row>

			<Row className="mb-5">
				<Col>
					<h2 className="text-center">{t("download.desktop")}</h2>
				</Col>
			</Row>
			<Row className="justify-content-center mb-4">
				<Col md={6}>
					<img src="/desktopimage.png" alt="Desktop Download" className="img-fluid" />
				</Col>
			</Row>
			<Row className="justify-content-center">
				{desktopLinks.map((item, index) => (
					<Col md={4} sm={6} xs={12} key={index} className="mb-4 text-center">
						<a href={item.link} target="_blank" rel="noopener noreferrer">
							<Button
								variant="outline-primary"
								className="icon-btn mb-3"
								style={{ width: "80px", height: "80px" }}
							>
								<item.icon className="h3 m-0" />
							</Button>
						</a>
						<div>{item.title}</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Download;
