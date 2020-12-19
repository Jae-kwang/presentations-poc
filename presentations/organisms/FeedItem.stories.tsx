import React from 'react';

import FeedItem from './FeedItem';
import WriterInfo from '../organisms/WriterInfo';
import MainContent from '../organisms/MainContent';

export default {
  title: 'FeedItem',
  component: FeedItem,
};

const Template = (args:any) => {
    const { item } = args
    return (
        <FeedItem item={item} >
            <WriterInfo user={item} />
            <MainContent content={"안녕하세요"} />
        </FeedItem>
    )
};

export const HasItem = Template.bind({});
HasItem.args = {
  item: {
    id: 1,
    email: "TonyStart@email.com",
    first_name: "Tony",
    last_name: "Stark",
    avatar: "https://ww.namu.la/s/96cd9bb3ed713c55528a48eff8c7f717c958db78f204300a33a4a2c9fe140e3282aef943cb799e10c85f78dc08f46bafbf3e90c3638698049c3611f491123a13b77c2befe6967df7e69755b6da48a0c1965484b51cbba6f933af683a2b53304173451d3c42f3001223f6a98923536427"
  }
};
