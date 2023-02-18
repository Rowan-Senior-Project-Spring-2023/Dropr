import Button from "Patterns/01_Atoms/Button";

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
