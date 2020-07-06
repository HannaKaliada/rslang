import renderAboutTeamPage from "./about-team-page.js";
import swiper from "./swiper.js";
import "swiper/css/swiper.min.css";
import "./about-team-page.scss";

export default function renderTeamPage() {
  renderAboutTeamPage();
  swiper();
}
