import React from 'react';
import { Usage, Correct, Incorrect } from './Usage';

export default {
  title: 'Usage',
};

export const usage = () => (
  <Usage>
    <Incorrect>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt quis,
      modi omnis fuga repellat perferendis distinctio facere? Possimus illum aut
      maxime minima atque iste, aliquid quod unde pariatur exercitationem.
    </Incorrect>

    <Correct>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt quis,
      modi omnis fuga repellat perferendis distinctio facere?
    </Correct>
  </Usage>
);

export const customTitles = () => (
  <>
    <Usage>
      <Correct title="Right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt
        quis, modi omnis fuga repellat perferendis distinctio facere?
      </Correct>

      <Incorrect title="Wrong">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt
        quis, modi omnis fuga repellat perferendis distinctio facere?
      </Incorrect>
    </Usage>

    <Usage>
      <Correct title="🙂">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt
        quis, modi omnis fuga repellat perferendis distinctio facere?
      </Correct>

      <Incorrect title="🙁">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum sunt
        quis, modi omnis fuga repellat perferendis distinctio facere?
      </Incorrect>
    </Usage>
  </>
);
