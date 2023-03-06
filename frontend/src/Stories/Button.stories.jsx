import Button from "Patterns/01_Atoms/Button/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  text: "Press me",
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Press me",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  text: "Press me",
  size: "small",
};
