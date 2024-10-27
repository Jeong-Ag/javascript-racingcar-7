import { Random } from "@woowacourse/mission-utils";

/**
 * 객체를 반복하며 최소값에서 최대값 사이 랜덤한 값을 뽑아,
 * 기준값보다 크면 1점을 추가하는 함수입니다.
 *
 * @param {Object} carList - 자동차 이름이 key, 점수가 value로 이루어진 객체
 * @returns {Object} 자동차 별 점수를 업데이트한 객체
 */
export function calculateRandomScores(carList) {
  const MIN_NUMBER = 0;
  const MAX_NUMBER = 9;
  const STANDARD_NUMBER = 4;

  Object.keys(carList).forEach((carName) => {
    if (Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER) >= STANDARD_NUMBER)
      carList[carName] += 1;
  });

  return carList;
}