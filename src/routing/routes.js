import settings from '../components/settings/settings';
import renderTeamPage from '../components/about-team-page/render-about-team-page';
import renderStartPage from '../components/start-page/renderStartPage';
import initHubPage from '../components/hub/hub-page/initHubPage';
import createSignInSignUpPage from '../components/auth/createSignInSignUpPage';
import renderSavannaPage from '../components/mini-game/savanna/render-savanna-page';
import learningWords from '../components/learningWords/learningWords';
import englishPuzzle from '../components/mini-game/english-puzzle';
import speakIt from '../components/mini-game/speak-it/start-page';
import renderOurGamePage from '../components/mini-game/our-game/our-game-render-page';
import audioCall from '../components/mini-game/audio-call/createAudioCallPage';
import renderStartSprintPage from '../components/mini-game/sprint/pages/StartSprintPage';
import gamesPages from '../components/gamesPage/gamesPage';


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
  '#/sprint': {
    requiresAuth: true,
    render: renderStartSprintPage,
  },
  '#/our-game': {
    requiresAuth: true,
    render: renderOurGamePage,
  },
  '#/games': {
    requiresAuth: true,
    render: gamesPages,
  }
};

export default routes;
