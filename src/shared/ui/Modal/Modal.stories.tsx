import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat harum nesciunt accusamus minima laborum excepturi perferendis, nobis necessitatibus soluta incidunt iste praesentium magnam eaque debitis beatae aspernatur velit illum?',

};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero placeat harum nesciunt accusamus minima laborum excepturi perferendis, nobis necessitatibus soluta incidunt iste praesentium magnam eaque debitis beatae aspernatur velit illum?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

