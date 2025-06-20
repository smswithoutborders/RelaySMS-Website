import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub } from "react-icons/fa";
import { faGlobe, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Link } from "react-router-dom";
import "../index.css";

const languages = [
	{ code: "en", label: "English", flag: "🇬🇧" },
	{ code: "fr", label: "Français", flag: "🇫🇷" },
	{ code: "fa", label: "فارسی", flag: "🇮🇷" },
	{ code: "es", label: "Español", flag: "🇪🇸" }
];

export default function Navigation() {
	const { t } = useTranslation();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [showLangMenu, setShowLangMenu] = useState(false);
	const langRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (langRef.current && !langRef.current.contains(e.target)) {
				setShowLangMenu(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const changeLanguage = (code) => {
		i18n.changeLanguage(code);
		setShowLangMenu(false);
		setMenuOpen(false);
	};

	const navLinks = [
		{ label: t("Nav.Home"), to: "/" },
		{ label: t("Nav.Blog"), href: "https://blog.smswithoutborders.com/", external: true },
		{ label: t("Nav.Support"), href: "https://docs.smswithoutborders.com/", external: true },
		{ label: t("Nav.Contact"), to: "/Contact_Us", isRouterLink: true }
	];

	const iconStyle = {
		filter: "#2d2a5a",
		height: "24px",
		transition: "transform 0.3s, filter 0.3s"
	};

	const handleIconHover = (e, isHovering) => {
		e.currentTarget.style.transform = isHovering ? "scale(1.2)" : "scale(1)";
		e.currentTarget.style.filter = isHovering
			? "invert(84%) sepia(37%) saturate(696%) hue-rotate(2deg) brightness(100%) contrast(101%)"
			: iconStyle.filter;
	};

	return (
		<nav className="navbar-container" role="navigation" aria-label="Main Navigation">
			<Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
				<img src="/logo.png" alt="Logo" />
			</Link>

			<button
				className="burger"
				onClick={() => setMenuOpen((prev) => !prev)}
				aria-label="Toggle menu"
			>
				<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
			</button>

			<div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
				<ul className="nav-list">
					{navLinks.map((link, i) => (
						<li key={i}>
							{link.external ? (
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setMenuOpen(false)}
								>
									{link.label}
								</a>
							) : (
								<Link to={link.to} onClick={() => setMenuOpen(false)}>
									{link.label}
								</Link>
							)}
						</li>
					))}

					<li>
						<a
							href="https://x.com/RelaySMS"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RelaySMS on X"
						>
							<img
								src="./x-w.png"
								alt="X logo"
								style={iconStyle}
								onMouseEnter={(e) => handleIconHover(e, true)}
								onMouseLeave={(e) => handleIconHover(e, false)}
							/>
						</a>
					</li>

					<li>
						<a
							href="https://github.com/smswithoutborders"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RelaySMS on GitHub"
						>
							<FaGithub
								style={iconStyle}
								onMouseEnter={(e) => handleIconHover(e, true)}
								onMouseLeave={(e) => handleIconHover(e, false)}
							/>
						</a>
					</li>

					<li>
						<a
							href="https://bsky.app/profile/relaysms.bsky.social"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="RelaySMS on Bluesky"
						>
							<img
								src="./bluesky.svg"
								alt="Bluesky logo"
								style={iconStyle}
								onMouseEnter={(e) => handleIconHover(e, true)}
								onMouseLeave={(e) => handleIconHover(e, false)}
							/>
						</a>
					</li>

					<li ref={langRef} className="lang-wrapper">
						<button className="lang-button" onClick={() => setShowLangMenu((s) => !s)}>
							<FontAwesomeIcon icon={faGlobe} />
							<span className="flag">{languages.find((l) => l.code === i18n.language)?.flag}</span>
						</button>
						{showLangMenu && (
							<ul className="lang-dropdown">
								{languages.map((lang) => (
									<li key={lang.code} onClick={() => changeLanguage(lang.code)}>
										{lang.flag} {lang.label}
									</li>
								))}
							</ul>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
}
