import React from 'react';

import FeedHome from './FeedHome';
import PostWriter from '../organisms/PostWriter';
import FeedList from '../organisms/FeedList';
import FeedItem from '../organisms/FeedItem';
import WriterInfo from '../organisms/WriterInfo';
import MainContent from '../organisms/MainContent';

export default {
  title: 'FeedHome',
  component: FeedHome,
};

const Template = (args:any) => {
    const { list } = args
    return (
        <FeedHome>
            <PostWriter/>
            <FeedList>
                { list.map((item:any) => (
                    <FeedItem item={item} >
                        <WriterInfo user={item} />
                        <MainContent content={"안녕하세요"} />
                    </FeedItem>
                ))}
            </FeedList>
        </FeedHome>
    )
};

export const HasList = Template.bind({});
HasList.args = {
  list: [{
    id: 1,
    email: "TonyStart@email.com",
    first_name: "Tony",
    last_name: "Stark",
    avatar: "https://ww.namu.la/s/96cd9bb3ed713c55528a48eff8c7f717c958db78f204300a33a4a2c9fe140e3282aef943cb799e10c85f78dc08f46bafbf3e90c3638698049c3611f491123a13b77c2befe6967df7e69755b6da48a0c1965484b51cbba6f933af683a2b53304173451d3c42f3001223f6a98923536427"
  }, {
    id: 2,
    email: "SteveRogers@email.com",
    first_name: "Steve",
    last_name: "Rogers",
    avatar: "https://w.namu.la/s/bd90b28b3008365f1fc6df7a1321289ff0bab537c28c927dda7796ad2324479e166230581e711dc68fbe023961deb036f058df3c2ebd075e6fb20a763340f9cfa751fca3a2cba44d56d6f3d0e0b9c0347eba834d34ae7cd3a0ce6aae590bf8e3f1b307e55f4192fcf91e8477a3a416a6"
  }]
};
