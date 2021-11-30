import { di } from '@mdna/di';
import { Story, Meta } from '@storybook/react';
import { createContext } from 'react';
import { Ui, UiProps } from './ui';

export default {
  component: Ui,
  title: 'Ui',
} as Meta;

const Template: Story<UiProps> = (args) => {
  di.provideContext('I18n', createContext({ t: () => 'Welcome to Ui!' }));
  return <Ui {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
