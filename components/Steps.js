import { Icon } from '@iconify/react';
import Container from './Container';

export default function Steps() {
  return (
    <div className="text-green-500 py-10 text-center">
      <Container flex={true} between={true}>
        <div className="py-10 px-5 w-full xs:w-auto">
          <span className="text-5xl text-red-500 flex justify-center">
            <Icon icon="emojione-monotone:girl" />
          </span>
          <h4 className="pt-7">
            Take computer science courses <br />
            with personalized support
          </h4>
        </div>
        <div className="py-10 px-5 w-full xs:w-auto">
          <span className="text-5xl text-red-500 flex justify-center">
            <Icon icon="system-uicons:rocket" />
          </span>
          <h4 className="pt-7">
            Build cool projects <br />
            to showcase your skills
          </h4>
        </div>
        <div className="py-10 px-5 w-full xs:w-auto">
          <span className="text-5xl text-red-500 flex justify-center">
            <Icon icon="bi:globe" />
          </span>
          <h4 className="pt-7">
            Take computer science courses <br />
            with personalized support
          </h4>
        </div>
      </Container>
    </div>
  );
}
