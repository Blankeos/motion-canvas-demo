import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Circle, } from '@motion-canvas/2d/lib/components';
import {createRef} from '@motion-canvas/core/lib/utils';
import {all} from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  view.add(
    <Circle
      ref={myCircle}
      x={-300}
      width={240}
      height={240}
      fill="#e13238"
    />,
  );


  // yield* all(
  //   myCircle().position.x(300, 1).to(-300, 1),
  //   myCircle().fill('#e6a700', 1).to('#e13238', 1),
  // );
  yield * myCircle().fill('red', 1);
  yield * myCircle().fill('blue', 1);
  yield * myCircle().fill('red', 1);
  yield * myCircle().fill('red', 1);
  yield * myCircle().scale(3, 0.6);
  yield * myCircle().scale(1, 0.6);
  yield * myCircle().position.x(300, 0.3);
  yield * myCircle().position.x(0, 0.4);
  yield * myCircle().position.x(-300, 0.5);

  yield * all(
    myCircle().position.y(-500, 0.3),
    myCircle().scale(0.5, 0.8),
    myCircle().fill('purple', 0.5),
  )

  yield * myCircle().position.y(0, 0.3);
  yield * myCircle().scale(1, 0.8);
  yield * myCircle().fill('red', 0.3);
});