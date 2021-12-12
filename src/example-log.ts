import * as config from './config';
import prompt from 'prompt';
import { exit } from 'process';

export const exampleLog = async () => {
  const promptSchema = {
    properties: {
      name: {
        description: config.exampleQuestion,
        required: true,
      },
    },
  };

  prompt.start();

  try {
    const { name } = await prompt.get([promptSchema]);

    if (!name) {
      console.log('You have to provide the value!');
      exit();
    }

    console.log(`${config.exampleAnswer} ${name}!`);
  } catch (e: any) {
    console.log(e.message);
    exit();
  }
};
