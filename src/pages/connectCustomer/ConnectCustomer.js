import { Container, Progress, GoogleButton, Title, Text } from 'components';
import css from './connectCustomer.module.css';

//List components
import ListComponent from 'components/list/ListComponent';
import ItemComponent from 'components/list/ItemComponent';
import ImgComponent from 'components/list/ImgComponent';
import TitleComponent from 'components/list/TitleComponent';
import TextComponent from 'components/list/TextComponent';

const ConnectCustomer = () => {
  const progress = 3;
  return (
    <Container>
      <Progress completed={progress} />
      <div className={css.content_wrapper}>
        <Title>Connect to customer support email</Title>
        <Text>
          Allows Chad to send automated responses on your behalf from your usual
          support mailbox
        </Text>
        <ListComponent>
          <ItemComponent>
            <ImgComponent />
            <TitleComponent>Contextual responses</TitleComponent>
            <TextComponent>
              Custom responses to any support situation from “where’s my stuff?”
              to “I want a refund”
            </TextComponent>
          </ItemComponent>
          <ItemComponent>
            <ImgComponent />
            <TitleComponent>Reply from anywhere</TitleComponent>
            <TextComponent>
              Respond to your customers via email or Chad chat—it’s all saved in
              the same thread
            </TextComponent>
          </ItemComponent>
          <ItemComponent>
            <ImgComponent />
            <TitleComponent>Categorical inbox tags</TitleComponent>
            <TextComponent>
              Tags your emails by category so you know what to expect before
              even opening an email
            </TextComponent>
          </ItemComponent>
        </ListComponent>
        <GoogleButton />
        <a
          className={css.link}
          href="https://olenatepanchukhw8.netlify.app/login"
        >
          I don’t use Shopify
        </a>
      </div>
    </Container>
  );
};
export default ConnectCustomer;
