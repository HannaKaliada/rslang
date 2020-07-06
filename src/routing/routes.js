import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import learningWords from '../components/learningWords/learningWords';
import createStartPage from '../components/mini-game/speak-it/start-page';
import audioCall from '../components/audio-call/createAudioCallPage';

function speakIt() {
  const page = document.querySelector('.root');
  page.innerHTML = '';
  page.append(createStartPage(page));
}

const routes = {
  '#/': {
    requiresAuth: false,
    render: renderStartPage,
  },
  '#/settings': {
    requiresAuth: true,
    render: settings,
  },
  '#/auth': {
    requiresAuth: false,
    render: createSignInSignUpPage.init.bind(createSignInSignUpPage),
  },
  '#/about-team': {
    requiresAuth: false,
    render: renderTeamPage,
  },
  '#/hub': {
    requiresAuth: true,
    render: initHubPage,
  },
  '#/learning': {
    requiresAuth: true,
    render: learningWords,
  },
  '#/speak-it': {
    requiresAuth: true,
    render: speakIt,
  },
  '#/audiocall': {
    requiresAuth: true,
    render: audioCall,
  },
};

export default routes;
