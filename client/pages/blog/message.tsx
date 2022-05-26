import React from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('r3hdmku56rrh');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZW1wdHktd2F0ZXJmYWxsLTcifQ.WSp6fTpx7hCfqdhpUDQ2hLbVYk54DTIn7j1IBOUgSFs';

chatClient.connectUser(
  {
    id: 'empty-waterfall-7',
    name: 'empty-waterfall-7',
    image:
      'https://getstream.io/random_png/?id=empty-waterfall-7&name=empty-waterfall-7',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['empty-waterfall-7'],
});

const Message = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default Message;
