import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import renderSavannaPage from '../components/mini-game/savanna/render-savanna-page';
import learningWords from '../components/learningWords/learningWords';
import speakIt from '../components/mini-game/speak-it/start-page';
import renderOurGamePage from '../components/mini-game/our-game/our-game-render-page';
import audioCall from '../components/mini-game/audio-call/createAudioCallPage';
import englishPuzzle from '../components/mini-game/english-puzzle';

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
  '#/english-puzzle': {
    requiresAuth: true,
    render: speakIt,
  },
  '#/speak-it': {
    requiresAuth: true,
    render: englishPuzzle,
  },
  '#/audiocall': {
    requiresAuth: true,
    render: audioCall,
  },
  '#/savanna-game': {
    requiresAuth: true,
    render: renderSavannaPage,
  },
  '#/our-game': {
    requiresAuth: true,
    render: renderOurGamePage,
  },
};

export default routes;
