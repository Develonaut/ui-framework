import { Title, Subtitle } from "@storybook/addon-docs/blocks";

export const PageTitle = ({ title, subtitle }) => (
  <>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </>
);
