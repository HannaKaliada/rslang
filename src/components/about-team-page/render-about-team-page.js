import renderAboutTeamPage from './about-team-page';
import swiper from './swiper';
import 'swiper/css/swiper.min.css';
import './about-team-page.scss';

export default function renderTeamPage() {
  renderAboutTeamPage();
  swiper();
}
