const deepFreeze = require('../utils/deepFreeze');
const { PROCESS_CONSTANTS } = require('./Setting');

const MESSAGE = {
  process: {
    startNotice: '점심 메뉴 추천를 시작합니다.',
    inputCoachName: '\n코치의 이름을 입력해 주세요. (, 로 구분)\n',
    inputNotGoodMenu: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
    printMenuNotice: '\n메뉴 추천 결과입니다.\n[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
    quitNotice: '\n추천을 완료했습니다.',
  },

  error: {
  },
};

module.exports = MESSAGE;
