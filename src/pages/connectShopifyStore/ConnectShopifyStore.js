import React, { useState } from 'react';

import {
  Container,
  Progress,
  Button,
  Title,
  Text,
  ModalStoreConnect,
} from 'components';
import css from './connectShopifyStore.module.css';

//List components
import ListComponent from 'components/list/ListComponent';
import ItemComponent from 'components/list/ItemComponent';
import ImgComponent from 'components/list/ImgComponent';
import TitleComponent from 'components/list/TitleComponent';
import TextComponent from 'components/list/TextComponent';

const ConnectShopifyStore = () => {
  const [isShowing, setIsShowing] = useState(false);
  const progress = 2;

  const HandleTogleModal = () => {
    if (isShowing === false) {
      console.log(isShowing);
      setIsShowing(true);
    } else {
      setIsShowing(false);
      console.log('2', isShowing);
    }
  };

  return (
    <Container>
      <Progress completed={progress} />
      <div className={css.content_wrapper}>
        <Title>Connect to Shopify Store</Title>
        <Text>
          Installs the Chad widget in your Shopify store and sets it up to
          display your customersâ€™ order information and self-serve options.
        </Text>

        <ListComponent>
          <ItemComponent>
            <ImgComponent />
            <TitleComponent>Track orders and shipping</TitleComponent>
            <TextComponent>
              Global coverage with 600+ couriers supported
            </TextComponent>
          </ItemComponent>
          <ItemComponent>
            <ImgComponent />
            <TitleComponent>Manage orders</TitleComponent>
            <TextComponent>
              Allow customers to track, return, exchange, or report problems
              with their orders
            </TextComponent>
          </ItemComponent>
          <ItemComponent>
            <ImgComponent />
            <TitleComponent>Process returns and exchanges</TitleComponent>
            <TextComponent>
              Automatically checks your store policy and existing inventory
              before resolving or escalating each request
            </TextComponent>
          </ItemComponent>
        </ListComponent>
        <Button click={HandleTogleModal}>Connect store</Button>
        <button className={css.button}>I donâ€™t use Shopify</button>
      </div>
      {isShowing && (
        <ModalStoreConnect hide={isShowing} click={HandleTogleModal} />
      )}
    </Container>
  );
};
export default ConnectShopifyStore;
