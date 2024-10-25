import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaApple, FaLinux, FaGithub } from "react-icons/fa";

const Footer = () => {
	const { t } = useTranslation();

	const [email, setEmail] = useState("");
	const [status, setStatus] = useState(null);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setStatus({ message: "Please enter a valid email.", type: "error" });
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email })
			});

			if (response.ok) {
				setStatus({ message: "Subscription successful!", type: "success" });
				setEmail("");
			} else {
				setStatus({ message: "Subscription failed. Please try again.", type: "error" });
			}
		} catch (error) {
			setStatus({ message: "An error occurred. Please try again.", type: "error" });
		}
	};

	return (
		<footer className="footer py-4">
			<Container>
				<Row>
					{/* Resources Section */}
					<Col md={4}>
						<h5>Resources</h5>
						<ul className="list-unstyled">
							<li>
								<a href="https://blog.smswithoutborders.com/" className="mx-2">
									{t("Nav.Blog")}
								</a>
							</li>
							<li>
								<a href="https://docs.smswithoutborders.com/">{t("Nav.Support")}</a>
							</li>

							<li>
								<a href="https://smswithoutborders.com/privacy-policy">Privacy Policy</a>
							</li>
						</ul>
					</Col>

					{/* Downloads Section */}
					<Col md={4}>
						<h5>Downloads</h5>
						<ul className="list-unstyled">
							<li>
								<a
									href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									<FaAndroid />
									Android
								</a>
							</li>
							<li>
								<a
									href="https://apps.apple.com/us/app/relaysms/id6630382970"
									target="_blank"
									rel="noopener noreferrer"
								>
									{" "}
									<FaApple /> iOS
								</a>
							</li>
							<li>
								<a href="https://github.com/smswithoutborders/SMSWithoutBorders-App-Android/releases">
									{" "}
									<FaLinux /> Linux
								</a>
							</li>
						</ul>
					</Col>

					{/* Mailing List Section */}
					<Col md={4}>
						<h5>Join Our Mailing List</h5>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="formEmail">
								<Form.Control
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="footer-input"
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
						{status && (
							<Alert variant={status.type === "error" ? "danger" : "success"} className="mt-3">
								{status.message}
							</Alert>
						)}
					</Col>
				</Row>

				<Row className="my-4 text-center d-flex justify-content-end">
					<Col className="d-flex justify-content-end align-items-center">
						<a
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							<img src="./x-w.png" alt="X logo" height="20" />
						</a>
						<a
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-link"
						>
							<FaGithub className="footer-link" />
						</a>
						<LanguageSwitcher className="mx-2" />
					</Col>
				</Row>

				<Row className="mt-4">
					<Col className="text-center">
						<p>
							&copy; {new Date().getFullYear()} {t("Footer.copyright")}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
